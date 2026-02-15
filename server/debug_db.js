const db = require('./db');

const user = db.prepare("SELECT * FROM users WHERE name LIKE '%Divya%'").get();

if (user) {
    console.log('User found:', user);
    const profile = db.prepare('SELECT * FROM profiles WHERE user_id = ?').get(user.id);
    console.log('Profile found:', profile);
} else {
    console.log('User not found');
}
