require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('./db');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const nodemailer = require('nodemailer');

// Twilio Configuration
const twilio = require('twilio');
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
// Initialize Client only if creds exist to avoid startup crash if env vars missing
let client = null;
try {
    if (accountSid && authToken && accountSid.startsWith('AC')) {
        client = twilio(accountSid, authToken);
    } else {
        console.warn('Twilio credentials missing or invalid (AccountSID must start with AC). SMS features disabled.');
    }
} catch (err) {
    console.error('Failed to initialize Twilio client:', err.message);
}

const app = express();
const PORT = process.env.PORT || 3000;
const SECRET_KEY = process.env.JWT_SECRET || 'secret';

const helmet = require('helmet');
const xss = require('xss');

app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use('/uploads', express.static('uploads'));

// Input Sanitization Middleware
const sanitizeInput = (req, res, next) => {
    const sanitize = (obj) => {
        for (const key in obj) {
            if (typeof obj[key] === 'string') {
                obj[key] = xss(obj[key]);
            } else if (typeof obj[key] === 'object' && obj[key] !== null) {
                sanitize(obj[key]);
            }
        }
    };

    if (req.body) sanitize(req.body);
    if (req.query) sanitize(req.query);
    if (req.params) sanitize(req.params);

    next();
};

app.use(sanitizeInput);

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

// Email Configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER || 'your-email@gmail.com',
        pass: process.env.EMAIL_PASS || 'your-app-password'
    }
});

// Function to send interview notification email
const sendInterviewEmail = async (to, applicantName, jobTitle, interviewDate, notes) => {
    const mailOptions = {
        from: process.env.EMAIL_USER || 'your-email@gmail.com',
        to: to,
        subject: `Interview Scheduled - ${jobTitle}`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #4F46E5;">Interview Scheduled!</h2>
                <p>Dear ${applicantName},</p>
                <p>Congratulations! Your interview has been scheduled for the position of <strong>${jobTitle}</strong>.</p>
                <div style="background-color: #F3F4F6; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <p><strong>Interview Date & Time:</strong><br/>${new Date(interviewDate).toLocaleString()}</p>
                    ${notes ? `<p><strong>Additional Notes:</strong><br/>${notes}</p>` : ''}
                </div>
                <p>Please be prepared and join on time. Good luck!</p>
                <p>Best regards,<br/>CyberSparkz Team</p>
            </div>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Interview email sent to:', to);
        return true;
    } catch (error) {
        console.error('Error sending email:', error);
        return false;
    }
};

// Function to send OTP email
const sendOtpEmail = async (to, otp) => {
    const mailOptions = {
        from: process.env.EMAIL_USER || 'your-email@gmail.com',
        to: to,
        subject: `Password Reset OTP - CyberSparkz`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #4F46E5;">Password Reset Request</h2>
                <p>Use the following OTP to reset your password. This OTP is valid for 15 minutes.</p>
                <div style="background-color: #F3F4F6; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center;">
                    <h1 style="letter-spacing: 5px; color: #333;">${otp}</h1>
                </div>
                <p>If you didn't request this, please ignore this email.</p>
                <p>Best regards,<br/>CyberSparkz Team</p>
            </div>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('OTP email sent to:', to);
        return true;
    } catch (error) {
        console.error('Error sending OTP email:', error);
        return false;
    }
};

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
    console.log('[LOGIN RAW BODY]', JSON.stringify(req.body));

    try {
        console.log(`[LOGIN ATTEMPT] Username/Email: ${username}, Password: ${password}`);
        const user = db.prepare('SELECT * FROM users WHERE LOWER(username) = LOWER(?) OR LOWER(email) = LOWER(?)').get(username, username);
        if (!user) {
            console.log('[LOGIN FAIL] User not found');
            return res.status(400).json({ error: 'Invalid credentials' });
        }
        console.log(`[LOGIN FOUND] User: ${user.username}, Role: ${user.role}, Hash: ${user.password.substring(0, 10)}...`);

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            console.log('[LOGIN FAIL] Password mismatch');
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

app.post('/api/auth/request-otp-reset', async (req, res) => {
    const { identifier } = req.body; // email or username

    try {
        const user = db.prepare('SELECT * FROM users WHERE email = ? OR username = ?').get(identifier, identifier);
        console.log(`[DEBUG] Forgot Password Request for: ${identifier}. User found: ${!!user}`);
        if (!user || !user.email) {
            return res.status(400).json({ error: 'User not found with that email/username' });
        }

        // Generate 6-character complex OTP
        const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%^&*';
        let otp = '';
        for (let i = 0; i < 6; i++) {
            otp += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        console.log(`[DEBUG] Generated complex OTP for ${identifier}: ${otp}`);

        const expiresAt = new Date(Date.now() + 15 * 60 * 1000).toISOString(); // 15 mins

        // Store OTP (always link to email for internal verification)
        db.prepare('INSERT INTO password_resets (email, otp, expires_at) VALUES (?, ?, ?)').run(user.email, otp, expiresAt);

        // Determine if identifier looks like a mobile number (digits only, length 10-15)
        const isMobile = /^\d{10,15}$/.test(identifier);

        // If user entered username (which might be mobile) or if we want to support SMS for usernames:
        // In this app, username IS the mobile number for many users. 
        // We'll simulate SMS if the input identifier matches the username, OR if it looks like a mobile number.

        if (identifier === user.username || isMobile) {
            if (client) {
                try {
                    const to = identifier.startsWith('+') ? identifier : `+91${identifier}`;
                    await client.messages.create({
                        body: `Your CyberSparkz OTP is: ${otp}`,
                        from: process.env.TWILIO_PHONE_NUMBER,
                        to: to
                    });
                    console.log(`[SMS] OTP sent to ${to}`);
                } catch (smsError) {
                    console.error('Error sending SMS:', smsError);
                }
            } else {
                console.log(`[SIMULATED SMS] Sending OTP ${otp} to mobile/username: ${identifier} (Twilio not configured)`);
            }
        }

        // Always send email if we have it, OR just send email if it's NOT a mobile login?
        // Requirement says "otp sent to the mobile number... by using that number otp should be sent"
        // So if they entered mobile, we send to mobile (simulated).
        // if they entered email, we send to email.

        if (identifier.includes('@')) {
            await sendOtpEmail(user.email, otp);
        } else {
            // It's a username/mobile. We already logged it above.
            // But we can also send email as backup if desired? 
            // The prompt implies we should send to mobile *using that number*. 
            // So console log is the "sending".
        }

        // RETURN OTP IN RESPONSE (CAPTCHA STYLE)
        res.json({ success: true, message: 'OTP Generated', otp: otp });
    } catch (error) {
        console.error('Error in forgot-password:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/api/auth/reset-password', async (req, res) => {
    const { email, identifier, otp, newPassword } = req.body; // accept email or identifier

    try {
        // Verify user exists
        // If 'email' is provided, use it. If 'identifier' is provided, look up user to get email.
        let userEmail = email;
        let user;

        if (identifier) {
            user = db.prepare('SELECT * FROM users WHERE email = ? OR username = ?').get(identifier, identifier);
            if (user) userEmail = user.email;
        } else if (email) {
            user = db.prepare('SELECT * FROM users WHERE email = ?').get(email);
            if (user) userEmail = user.email;
        }

        if (!user || !userEmail) {
            return res.status(400).json({ error: 'Invalid request' });
        }

        // Verify OTP
        const resetRecord = db.prepare(`
            SELECT * FROM password_resets 
            WHERE email = ? AND otp = ? AND expires_at > ?
            ORDER BY created_at DESC LIMIT 1
        `).get(userEmail, otp, new Date().toISOString());

        if (!resetRecord) {
            return res.status(400).json({ error: 'Invalid or expired OTP' });
        }

        // Hash new password
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // Update User Password
        db.prepare('UPDATE users SET password = ? WHERE id = ?').run(hashedPassword, user.id);

        // clear used OTP
        db.prepare('DELETE FROM password_resets WHERE id = ?').run(resetRecord.id);

        res.json({ success: true, message: 'Password reset successfully' });

    } catch (error) {
        console.error('Error in reset-password:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/api/auth/verify-otp', async (req, res) => {
    const { email, identifier, otp } = req.body;

    try {
        let userEmail = email;
        let user;

        if (identifier) {
            user = db.prepare('SELECT * FROM users WHERE email = ? OR username = ?').get(identifier, identifier);
            if (user) userEmail = user.email;
        } else if (email) {
            user = db.prepare('SELECT * FROM users WHERE email = ?').get(email);
            if (user) userEmail = user.email;
        }

        if (!user || !userEmail) {
            return res.status(400).json({ error: 'Invalid request' });
        }

        const resetRecord = db.prepare(`
            SELECT * FROM password_resets 
            WHERE email = ? AND otp = ? AND expires_at > ?
            ORDER BY created_at DESC LIMIT 1
        `).get(userEmail, otp, new Date().toISOString());

        if (!resetRecord) {
            return res.status(400).json({ error: 'Invalid or expired OTP' });
        }

        res.json({ success: true, message: 'OTP Verified' });
    } catch (error) {
        console.error('Error in verify-otp:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/api/auth/me', authenticateToken, (req, res) => {
    const user = db.prepare('SELECT id, name, email, role, is_two_factor_enabled, language FROM users WHERE id = ?').get(req.user.id);
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
    const { bio, skills, experience_level, photo_url, name, social_links, education, certifications, resume_url, ctf_score, lab_completions } = req.body;

    try {
        if (req.user.role === 'user') {
            db.prepare(`
                INSERT INTO profiles (user_id, bio, skills, experience_level, photo_url, social_links, education, certifications, resume_url, ctf_score, lab_completions)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                ON CONFLICT(user_id) DO UPDATE SET
                bio = excluded.bio,
                skills = excluded.skills,
                experience_level = excluded.experience_level,
                photo_url = excluded.photo_url,
                social_links = excluded.social_links,
                education = excluded.education,
                certifications = excluded.certifications,
                resume_url = excluded.resume_url,
                ctf_score = excluded.ctf_score,
                lab_completions = excluded.lab_completions
            `).run(
                req.user.id,
                bio,
                skills,
                experience_level,
                photo_url,
                social_links ? JSON.stringify(social_links) : null,
                education ? JSON.stringify(education) : null,
                certifications ? JSON.stringify(certifications) : null,
                resume_url,
                ctf_score || 0,
                lab_completions || 0
            );
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

app.post('/api/users/upgrade', authenticateToken, (req, res) => {
    if (req.user.role !== 'user') return res.status(403).json({ error: 'Only users can upgrade memberships' });

    const { tier } = req.body;
    const validTiers = ['free', 'standard', 'platinum'];
    
    if (!validTiers.includes(tier)) {
        return res.status(400).json({ error: 'Invalid membership tier' });
    }

    let expiryDate = null;
    const now = new Date();

    if (tier === 'standard') {
        now.setMonth(now.getMonth() + 1);
        expiryDate = now.toISOString();
    } else if (tier === 'platinum') {
        now.setFullYear(now.getFullYear() + 1);
        expiryDate = now.toISOString();
    }

    try {
        db.prepare(`
            UPDATE profiles 
            SET membership_tier = ?, membership_expiry = ? 
            WHERE user_id = ?
        `).run(tier, expiryDate, req.user.id);
        
        res.json({ success: true, membership_tier: tier, membership_expiry: expiryDate, message: 'Membership updated successfully' });
    } catch (error) {
        console.error("Error upgrading membership:", error);
        res.status(500).json({ error: 'Failed to upgrade membership' });
    }
});

app.put('/api/recruiters/profile', authenticateToken, (req, res) => {
    if (req.user.role !== 'recruiter') return res.sendStatus(403);

    const { company_name, company_address, designation, name, photo_url, company_website, company_description, logo_url } = req.body;

    try {
        db.prepare(`
            UPDATE recruiters
            SET company_name = ?, company_address = ?, designation = ?, photo_url = ?, company_website = ?, company_description = ?, logo_url = ?
            WHERE user_id = ?
        `).run(company_name, company_address, designation, photo_url, company_website, company_description, logo_url, req.user.id);

        if (name) {
            db.prepare('UPDATE users SET name = ? WHERE id = ?').run(name, req.user.id);
        }

        res.json({ success: true, message: 'Recruiter profile updated' });
    } catch (error) {
        console.error("Error updating recruiter profile:", error);
        res.status(500).json({ error: 'Failed to update profile' });
    }
});

app.put('/api/settings', authenticateToken, (req, res) => {
    const { language } = req.body;

    try {
        if (language) {
            db.prepare('UPDATE users SET language = ? WHERE id = ?').run(language, req.user.id);
        }

        res.json({ success: true, message: 'Settings updated successfully' });
    } catch (error) {
        console.error("Error updating settings:", error);
        res.status(500).json({ error: 'Failed to update settings' });
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

    const { title, description, requirements, location, salary_range, experience_level, job_type, challenge_description, challenge_answer } = req.body;

    try {
        const insertJob = db.prepare(`
        INSERT INTO jobs (recruiter_id, title, description, requirements, location, salary_range, experience_level, job_type, challenge_description, challenge_answer)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `);
        const result = insertJob.run(req.user.id, title, description, requirements, location, salary_range, experience_level, job_type, challenge_description, challenge_answer);
        res.json({ id: result.lastInsertRowid, ...req.body });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create job' });
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

    const { job_id, email, contact_number, alt_contact_number, full_name, challenge_response } = req.body;
    const resume_url = `/uploads/${req.file.filename}`;

    try {
        const existing = db.prepare('SELECT * FROM applications WHERE job_id = ? AND user_id = ?').get(job_id, req.user.id);
        if (existing) {
            return res.status(400).json({ error: 'Already applied to this job' });
        }

        let status = 'applied';
        const jobInfo = db.prepare('SELECT challenge_answer FROM jobs WHERE id = ?').get(job_id);
        if (jobInfo && jobInfo.challenge_answer && challenge_response) {
            if (jobInfo.challenge_answer.trim().toLowerCase() === challenge_response.trim().toLowerCase()) {
                status = 'shortlisted';
            }
        }

        const insertApp = db.prepare(`
            INSERT INTO applications (job_id, user_id, email, contact_number, alt_contact_number, resume_url, full_name, status) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `);
        insertApp.run(job_id, req.user.id, email, contact_number, alt_contact_number, resume_url, full_name, status);

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
            SELECT a.id, a.status, a.applied_at, a.interview_date, a.interview_notes, a.resume_url,
                   j.title as job_title, r.company_name
            FROM applications a
            JOIN jobs j ON a.job_id = j.id
            JOIN recruiters r ON j.recruiter_id = r.user_id
            WHERE a.user_id = ?
            ORDER BY a.applied_at DESC
        `).all(req.user.id);

        // Convert relative resume URLs to absolute URLs
        const applicationsWithFullUrls = applications.map(app => ({
            ...app,
            resume_url: app.resume_url ? `http://localhost:3000${app.resume_url}` : null
        }));

        res.json(applicationsWithFullUrls);
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
        SELECT a.id, a.status, a.applied_at, a.resume_url, a.contact_number, a.alt_contact_number, a.email, a.full_name,
               u.name as applicant_name, u.email as applicant_email,
               j.title as job_title,
               p.ctf_score, p.lab_completions, p.skills
        FROM applications a
        JOIN jobs j ON a.job_id = j.id
        JOIN users u ON a.user_id = u.id
        LEFT JOIN profiles p ON u.id = p.user_id
        WHERE j.recruiter_id = ?
    `).all(req.user.id);

    // Convert relative resume URLs to absolute URLs
    const applicationsWithFullUrls = applications.map(app => ({
        ...app,
        resume_url: app.resume_url ? `http://localhost:3000${app.resume_url}` : null
    }));

    res.json(applicationsWithFullUrls);
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

app.post('/api/applications/:id/schedule', authenticateToken, async (req, res) => {
    if (req.user.role !== 'recruiter') return res.sendStatus(403);

    const { id } = req.params;
    const { interview_date, interview_notes } = req.body;

    try {
        // Get application details with user email and job title
        const application = db.prepare(`
            SELECT a.*, u.email as applicant_email, u.name as applicant_name, j.title as job_title
            FROM applications a
            JOIN users u ON a.user_id = u.id
            JOIN jobs j ON a.job_id = j.id
            WHERE a.id = ?
        `).get(id);

        if (!application) {
            return res.status(404).json({ error: 'Application not found' });
        }

        // Update application with interview details and set status to interview_scheduled
        db.prepare(`
            UPDATE applications 
            SET status = 'interview_scheduled', interview_date = ?, interview_notes = ? 
            WHERE id = ?
        `).run(interview_date, interview_notes, id);

        // Send email notification
        await sendInterviewEmail(
            application.applicant_email,
            application.applicant_name,
            application.job_title,
            interview_date,
            interview_notes
        );

        res.json({ success: true, message: 'Interview scheduled and notification sent' });
    } catch (error) {
        console.error('Error scheduling interview:', error);
        res.status(500).json({ error: 'Failed to schedule interview' });
    }
});

// --- Connection Routes ---

// Get all connections and requests
app.get('/api/connections', authenticateToken, (req, res) => {
    try {
        const connections = db.prepare(`
            SELECT c.*, 
                   sender.name as sender_name, sender.email as sender_email,
                   receiver.name as receiver_name, receiver.email as receiver_email,
                   sp.photo_url as sender_photo, rp.photo_url as receiver_photo,
                   sp.bio as sender_headline, rp.bio as receiver_headline
            FROM connections c
            JOIN users sender ON c.sender_id = sender.id
            JOIN users receiver ON c.receiver_id = receiver.id
            LEFT JOIN profiles sp ON sender.id = sp.user_id
            LEFT JOIN profiles rp ON receiver.id = rp.user_id
            WHERE c.sender_id = ? OR c.receiver_id = ?
            ORDER BY c.created_at DESC
        `).all(req.user.id, req.user.id);
        res.json(connections);
    } catch (error) {
        console.error('Error fetching connections:', error);
        res.status(500).json({ error: 'Failed to fetch connections' });
    }
});

// Explore users (exclude self and existing connections/requests)
app.get('/api/users/explore', authenticateToken, (req, res) => {
    try {
        // Get IDs of users already connected or with pending requests
        const connectedIds = db.prepare(`
            SELECT sender_id FROM connections WHERE receiver_id = ?
            UNION
            SELECT receiver_id FROM connections WHERE sender_id = ?
        `).all(req.user.id, req.user.id).map(c => c.sender_id);

        connectedIds.push(req.user.id); // Exclude self

        const users = db.prepare(`
            SELECT u.id, u.name, p.photo_url, p.experience_level, p.skills
            FROM users u
            LEFT JOIN profiles p ON u.id = p.user_id
            WHERE u.role = 'user' AND u.id NOT IN (${connectedIds.join(',') || 0})
            LIMIT 20
        `).all();

        res.json(users);
    } catch (error) {
        console.error('Error exploring users:', error);
        res.status(500).json({ error: 'Failed to fetch users' });
    }
});

// Send connection request
app.post('/api/connections/send', authenticateToken, (req, res) => {
    const { receiver_id } = req.body;
    try {
        const existing = db.prepare('SELECT * FROM connections WHERE (sender_id = ? AND receiver_id = ?) OR (sender_id = ? AND receiver_id = ?)').get(req.user.id, receiver_id, receiver_id, req.user.id);
        if (existing) {
            return res.status(400).json({ error: 'Connection already exists or pending' });
        }

        const info = db.prepare('INSERT INTO connections (sender_id, receiver_id) VALUES (?, ?)').run(req.user.id, receiver_id);
        res.json({ success: true, id: info.lastInsertRowid });
    } catch (error) {
        console.error('Error sending connection request:', error);
        res.status(500).json({ error: 'Failed to send request' });
    }
});

// Respond to connection request
app.put('/api/connections/:id/status', authenticateToken, (req, res) => {
    const { id } = req.params;
    const { status } = req.body; // 'accepted' or 'rejected'

    if (!['accepted', 'rejected'].includes(status)) {
        return res.status(400).json({ error: 'Invalid status' });
    }

    try {
        const connection = db.prepare('SELECT * FROM connections WHERE id = ?').get(id);
        if (!connection) return res.status(404).json({ error: 'Connection not found' });

        // Only receiver can accept/reject
        if (connection.receiver_id !== req.user.id) {
            return res.status(403).json({ error: 'Not authorized' });
        }

        if (status === 'rejected') {
            db.prepare('DELETE FROM connections WHERE id = ?').run(id);
        } else {
            db.prepare('UPDATE connections SET status = ? WHERE id = ?').run(status, id);
        }

        res.json({ success: true, message: `Connection ${status}` });
    } catch (error) {
        console.error('Error updating connection status:', error);
        res.status(500).json({ error: 'Failed to update status' });
    }
});

// --- Message Routes ---

// Send a message
app.post('/api/messages', authenticateToken, (req, res) => {
    const { receiver_id, content } = req.body;

    if (!content || !content.trim()) {
        return res.status(400).json({ error: 'Message content is required' });
    }

    try {
        // Verify connection exists (optional but good practice)
        const connection = db.prepare(`
            SELECT * FROM connections 
            WHERE (sender_id = ? AND receiver_id = ? AND status = 'accepted')
               OR (sender_id = ? AND receiver_id = ? AND status = 'accepted')
        `).get(req.user.id, receiver_id, receiver_id, req.user.id);

        if (!connection) {
            return res.status(403).json({ error: 'You can only message connected users' });
        }

        const info = db.prepare(`
            INSERT INTO messages (sender_id, receiver_id, content) VALUES (?, ?, ?)
        `).run(req.user.id, receiver_id, content);

        res.json({ success: true, id: info.lastInsertRowid, timestamp: new Date() });
    } catch (error) {
        console.error('Error sending message:', error);
        res.status(500).json({ error: 'Failed to send message' });
    }
});

// Get conversation with a specific user
app.get('/api/messages/:userId', authenticateToken, (req, res) => {
    const otherUserId = req.params.userId;
    try {
        const messages = db.prepare(`
            SELECT * FROM messages 
            WHERE (sender_id = ? AND receiver_id = ?) 
               OR (sender_id = ? AND receiver_id = ?)
            ORDER BY created_at ASC
        `).all(req.user.id, otherUserId, otherUserId, req.user.id);

        res.json(messages);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch messages' });
    }
});

// --- Community Feed Routes ---

// Get all posts for the global feed
app.get('/api/posts', (req, res) => {
    try {
        const posts = db.prepare(`
            SELECT p.*, u.name as author_name, u.role as author_role, pr.photo_url as author_photo 
            FROM posts p
            JOIN users u ON p.user_id = u.id
            LEFT JOIN profiles pr ON u.id = pr.user_id
            ORDER BY p.created_at DESC
            LIMIT 50
        `).all();
        res.json(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
});

// Create a new post
app.post('/api/posts', authenticateToken, (req, res) => {
    const { type, content, url } = req.body;
    
    if (!content || !content.trim()) {
        return res.status(400).json({ error: 'Post content is required' });
    }

    try {
        const info = db.prepare(`
            INSERT INTO posts (user_id, type, content, url)
            VALUES (?, ?, ?, ?)
        `).run(req.user.id, type || 'standard', content, url || null);
        
        res.json({ success: true, id: info.lastInsertRowid });
    } catch (error) {
        console.error('Error creating post:', error);
        res.status(500).json({ error: 'Failed to create post' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
