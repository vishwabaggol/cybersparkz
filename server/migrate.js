const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.resolve(__dirname, 'cyberlink.db');
const db = new Database(dbPath);

console.log('Running migration...');

try {
    const info = db.pragma('table_info(users)');
    const hasUsername = info.some(col => col.name === 'username');

    if (!hasUsername) {
        console.log('Adding username column...');
        db.exec("ALTER TABLE users ADD COLUMN username TEXT UNIQUE");
        console.log('Username column added.');
    } else {
        console.log('Username column already exists.');
    }
} catch (error) {
    console.error('Migration failed:', error);
}
