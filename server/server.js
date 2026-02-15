require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('./db');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const SECRET_KEY = process.env.JWT_SECRET || 'secret';

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use('/uploads', express.static('uploads'));

// Configure Multer for Resume Uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = 'uploads/';
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir);
        }
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 2 * 1024 * 1024 }, // 2MB limit
    fileFilter: (req, file, cb) => {
        if (file.mimetype === 'application/pdf') {
            cb(null, true);
        } else {
            cb(new Error('Only .pdf format allowed!'));
        }
    }
});

// Middleware to authenticate token
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.sendStatus(401);

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

const { authenticator } = require('otplib');
const qrcode = require('qrcode');

// --- Auth Routes ---

app.post('/api/auth/register', async (req, res) => {
    const { name, email, username, password, role, ...details } = req.body;

    if (!name || !username || !password || !role) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    // Basic validation for username (Mobile or Alphanumeric)
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    if (!usernameRegex.test(username)) {
        return res.status(400).json({ error: 'Username must be alphanumeric (Letters, Numbers or Mix)' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const insertUser = db.prepare('INSERT INTO users (name, email, username, password, role) VALUES (?, ?, ?, ?, ?)');
        const result = insertUser.run(name, email || null, username, hashedPassword, role);
        const userId = result.lastInsertRowid;

        if (role === 'recruiter') {
            const insertRecruiter = db.prepare('INSERT INTO recruiters (user_id, company_name, company_address, designation) VALUES (?, ?, ?, ?)');
            insertRecruiter.run(userId, details.company_name, details.company_address, details.designation);
        } else {
            // Job seeker profile
            const insertProfile = db.prepare('INSERT INTO profiles (user_id) VALUES (?)');
            insertProfile.run(userId);
        }

        const token = jwt.sign({ id: userId, username, role }, SECRET_KEY, { expiresIn: '1h' });
        res.json({ token, user: { id: userId, name, username, role } });

    } catch (error) {
        if (error.code === 'SQLITE_CONSTRAINT_UNIQUE') {
            if (error.message.includes('users.username')) {
                return res.status(400).json({ error: 'Username already exists' });
            }
            return res.status(400).json({ error: 'Email or Username already exists' });
        }
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/api/auth/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = db.prepare('SELECT * FROM users WHERE username = ?').get(username);
        if (!user) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        // Check if 2FA is enabled
        if (user.is_two_factor_enabled) {
            // Generate a temporary token valid for 2FA verification step only
            // For simplicity, we just return a flag. In production, we should return a temp token or session ID.
            // Here we'll return a special response.
            return res.json({
                twoFactorRequired: true,
                userId: user.id
            });
        }

        const token = jwt.sign({ id: user.id, username: user.username, role: user.role }, SECRET_KEY, { expiresIn: '1h' });
        res.json({ token, user: { id: user.id, name: user.name, username: user.username, role: user.role } });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/api/auth/2fa/login', async (req, res) => {
    const { userId, token } = req.body;
    console.log(`2FA Login Attempt: User ${userId}, Token: ${token}`);

    try {
        const user = db.prepare('SELECT * FROM users WHERE id = ?').get(userId);
        if (!user) return res.status(400).json({ error: 'User not found' });

        const verified = authenticator.check(token, user.two_factor_secret);
        console.log(`2FA Login Verify: User ${userId}, Secret: ${user.two_factor_secret ? 'Present' : 'Missing'}, Valid: ${verified}`);

        if (!verified) return res.status(400).json({ error: 'Invalid 2FA code' });

        const jwtToken = jwt.sign({ id: user.id, username: user.username, role: user.role }, SECRET_KEY, { expiresIn: '1h' });
        res.json({ token: jwtToken, user: { id: user.id, name: user.name, username: user.username, role: user.role } });
    } catch (error) {
        console.error("2FA Login Error:", error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/api/auth/2fa/generate', authenticateToken, async (req, res) => {
    console.log("Hit /api/auth/2fa/generate for user:", req.user.id);
    try {
        const secret = authenticator.generateSecret();
        console.log("Generated secret:", secret);

        const user = db.prepare('SELECT email FROM users WHERE id = ?').get(req.user.id);
        console.log("User email:", user?.email);

        const otpauth = authenticator.keyuri(user?.email || 'user', 'Cybersparkz', secret);
        console.log("OTP Auth URL:", otpauth);

        const imageUrl = await qrcode.toDataURL(otpauth);
        console.log("Generated QR Code URL length:", imageUrl?.length);

        // Save secret temporarily or permanently? Ideally execute enabling in verify step.
        // For simplicity, we update secret now but set enabled=0 until verified.
        db.prepare('UPDATE users SET two_factor_secret = ? WHERE id = ?').run(secret, req.user.id);
        console.log("Updated user with 2FA secret");

        res.json({ secret, imageUrl });
    } catch (error) {
        console.error("Error in 2FA generate:", error);
        res.status(500).json({ error: 'Error generating 2FA secret' });
    }
});

app.post('/api/auth/2fa/verify', authenticateToken, async (req, res) => {
    const { token } = req.body;
    console.log(`2FA Setup Verify: User ${req.user.id}, Token: ${token}`);

    try {
        const user = db.prepare('SELECT two_factor_secret FROM users WHERE id = ?').get(req.user.id);
        if (!user.two_factor_secret) {
            console.log("2FA Setup Verify Fail: No secret found for user");
            return res.status(400).json({ error: '2FA setup not initiated' });
        }

        const verified = authenticator.check(token, user.two_factor_secret);
        console.log(`2FA Setup Verify Result: ${verified}`);

        if (verified) {
            db.prepare('UPDATE users SET is_two_factor_enabled = 1 WHERE id = ?').run(req.user.id);
            res.json({ success: true, message: '2FA enabled successfully' });
        } else {
            res.status(400).json({ error: 'Invalid token' });
        }
    } catch (error) {
        console.error("2FA Setup Verify Error:", error);
        res.status(500).json({ error: 'Error verifying 2FA token' });
    }
});

app.post('/api/auth/2fa/disable', authenticateToken, async (req, res) => {
    try {
        db.prepare('UPDATE users SET is_two_factor_enabled = 0, two_factor_secret = NULL WHERE id = ?').run(req.user.id);
        res.json({ success: true, message: '2FA disabled successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error disabling 2FA' });
    }
});

app.get('/api/auth/me', authenticateToken, (req, res) => {
    const user = db.prepare('SELECT id, name, email, role, is_two_factor_enabled FROM users WHERE id = ?').get(req.user.id);
    if (!user) return res.sendStatus(404);

    if (user.role === 'recruiter') {
        const details = db.prepare('SELECT * FROM recruiters WHERE user_id = ?').get(user.id);
        res.json({ ...user, ...details });
    } else {
        const details = db.prepare('SELECT * FROM profiles WHERE user_id = ?').get(user.id);
        res.json({ ...user, ...details });
    }
});

app.put('/api/users/profile', authenticateToken, (req, res) => {
    const { bio, skills, experience_level, photo_url, name } = req.body;

    try {
        if (req.user.role === 'user') {
            db.prepare(`
                UPDATE profiles 
                SET bio = ?, skills = ?, experience_level = ?, photo_url = ?
                WHERE user_id = ?
            `).run(bio, skills, experience_level, photo_url, req.user.id);
        } else if (req.user.role === 'recruiter') {
            // Recruiters might have different fields, but if they share some, we update them here or ignore
            // For now, only job seekers have the 'profiles' table with these fields
        }

        if (name) {
            db.prepare('UPDATE users SET name = ? WHERE id = ?').run(name, req.user.id);
        }

        res.json({ success: true, message: 'Profile updated successfully' });
    } catch (error) {
        console.error("Error updating profile:", error);
        res.status(500).json({ error: 'Failed to update profile' });
    }
});

app.put('/api/recruiters/profile', authenticateToken, (req, res) => {
    if (req.user.role !== 'recruiter') return res.sendStatus(403);

    const { company_name, company_address, designation, name, photo_url } = req.body;

    try {
        db.prepare(`
            UPDATE recruiters 
            SET company_name = ?, company_address = ?, designation = ?, photo_url = ?
            WHERE user_id = ?
        `).run(company_name, company_address, designation, photo_url, req.user.id);

        if (name) {
            db.prepare('UPDATE users SET name = ? WHERE id = ?').run(name, req.user.id);
        }

        res.json({ success: true, message: 'Recruiter profile updated' });
    } catch (error) {
        console.error("Error updating recruiter profile:", error);
        res.status(500).json({ error: 'Failed to update profile' });
    }
});

// --- Job Routes ---

app.get('/api/jobs', (req, res) => {
    const jobs = db.prepare(`
    SELECT j.*, r.company_name 
    FROM jobs j 
    JOIN recruiters r ON j.recruiter_id = r.user_id
    ORDER BY j.created_at DESC
  `).all();
    res.json(jobs);
});

app.post('/api/jobs', authenticateToken, (req, res) => {
    if (req.user.role !== 'recruiter') {
        return res.status(403).json({ error: 'Only recruiters can post jobs' });
    }

    const { title, description, requirements, location, salary_range, experience_level } = req.body;

    try {
        const insertJob = db.prepare(`
      INSERT INTO jobs (recruiter_id, title, description, requirements, location, salary_range, experience_level)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `);
        const result = insertJob.run(req.user.id, title, description, requirements, location, salary_range, experience_level);
        res.json({ id: result.lastInsertRowid, ...req.body });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create job' });
    }
});

// Update User Profile
app.put('/api/users/profile', authenticateToken, (req, res) => {
    const { name, bio, skills, experience_level, photo_url } = req.body;
    const userId = req.user.id;

    try {
        const update = db.prepare(`
            UPDATE users 
            SET name = ?, bio = ?, skills = ?, experience_level = ?, photo_url = ?
            WHERE id = ?
        `);
        update.run(name, bio, skills, experience_level, photo_url, userId);

        // Return updated user data
        const updatedUser = db.prepare('SELECT id, name, email, role, bio, skills, experience_level, photo_url FROM users WHERE id = ?').get(userId);
        res.json(updatedUser);
    } catch (error) {
        console.error('Error updating profile', error);
        res.status(500).json({ error: 'Failed to update profile' });
    }
});

// --- Application Routes ---

app.post('/api/apply', authenticateToken, upload.single('resume'), (req, res) => {
    if (req.user.role !== 'user') {
        return res.status(403).json({ error: 'Recruiters cannot apply for jobs' });
    }

    // Multer error handling should ideally be middleware, but simple check here
    if (!req.file) {
        return res.status(400).json({ error: 'Resume (PDF) is required' });
    }

    const { job_id, email, contact_number, alt_contact_number } = req.body;
    const resume_url = `/uploads/${req.file.filename}`;

    try {
        const existing = db.prepare('SELECT * FROM applications WHERE job_id = ? AND user_id = ?').get(job_id, req.user.id);
        if (existing) {
            return res.status(400).json({ error: 'Already applied to this job' });
        }

        const insertApp = db.prepare(`
            INSERT INTO applications (job_id, user_id, email, contact_number, alt_contact_number, resume_url) 
            VALUES (?, ?, ?, ?, ?, ?)
        `);
        insertApp.run(job_id, req.user.id, email, contact_number, alt_contact_number, resume_url);

        res.json({ success: true, message: 'Applied successfully' });
    } catch (error) {
        console.error("Apply Error:", error);
        res.status(500).json({ error: 'Failed to apply' });
    }
});

app.get('/api/user/applications', authenticateToken, (req, res) => {
    if (req.user.role !== 'user') {
        return res.status(403).json({ error: 'Access denied' });
    }

    try {
        const applications = db.prepare(`
            SELECT a.id, a.status, a.applied_at, a.interview_date, a.interview_notes,
                   j.title as job_title, r.company_name
            FROM applications a
            JOIN jobs j ON a.job_id = j.id
            JOIN recruiters r ON j.recruiter_id = r.user_id
            WHERE a.user_id = ?
            ORDER BY a.applied_at DESC
        `).all(req.user.id);
        res.json(applications);
    } catch (error) {
        console.error('Error fetching user applications', error);
        res.status(500).json({ error: 'Failed to fetch applications' });
    }
});

app.get('/api/recruiter/applications', authenticateToken, (req, res) => {
    if (req.user.role !== 'recruiter') {
        return res.status(403).json({ error: 'Access denied' });
    }

    const applications = db.prepare(`
        SELECT a.id, a.status, a.applied_at, 
               u.name as applicant_name, u.email as applicant_email,
               j.title as job_title
        FROM applications a
        JOIN jobs j ON a.job_id = j.id
        JOIN users u ON a.user_id = u.id
        WHERE j.recruiter_id = ?
    `).all(req.user.id);

    res.json(applications);
});

app.patch('/api/applications/:id/status', authenticateToken, (req, res) => {
    if (req.user.role !== 'recruiter') return res.sendStatus(403);

    const { id } = req.params;
    const { status } = req.body;

    try {
        db.prepare('UPDATE applications SET status = ? WHERE id = ?').run(status, id);
        res.json({ success: true });
    } catch (error) {
        console.error('Error updating status', error);
        res.status(500).json({ error: 'Failed to update status' });
    }
});

app.post('/api/applications/:id/schedule', authenticateToken, (req, res) => {
    if (req.user.role !== 'recruiter') return res.sendStatus(403);

    const { id } = req.params;
    const { interview_date, interview_notes } = req.body;

    try {
        db.prepare(`
            UPDATE applications 
            SET status = 'interview_scheduled', interview_date = ?, interview_notes = ? 
            WHERE id = ?
        `).run(interview_date, interview_notes, id);
        res.json({ success: true });
    } catch (error) {
        console.error('Error scheduling interview', error);
        res.status(500).json({ error: 'Failed to schedule interview' });
    }
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
