const db = require('./db');

try {
    console.log("Migrating database for 2FA...");

    // Check if column exists, if not add it. SQLite doesn't support IF COLUMN EXISTS in ALTER TABLE directly in older versions, 
    // but we can try and catch.

    try {
        db.prepare('ALTER TABLE users ADD COLUMN two_factor_secret TEXT').run();
        console.log("Added two_factor_secret column.");
    } catch (e) {
        if (!e.message.includes('duplicate column')) console.log("Column two_factor_secret might already exist or error:", e.message);
    }

    try {
        db.prepare('ALTER TABLE users ADD COLUMN is_two_factor_enabled BOOLEAN DEFAULT 0').run();
        console.log("Added is_two_factor_enabled column.");
    } catch (e) {
        if (!e.message.includes('duplicate column')) console.log("Column is_two_factor_enabled might already exist or error:", e.message);
    }

    console.log("Migration complete.");
} catch (error) {
    console.error("Migration failed:", error);
}
