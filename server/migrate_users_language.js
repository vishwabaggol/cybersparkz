const db = require('./db');

try {
    console.log("Running migration: Add language column to users table...");

    // Add language column if it doesn't exist
    const tableInfo = db.prepare("PRAGMA table_info(users)").all();
    const languageExists = tableInfo.some(col => col.name === 'language');

    if (!languageExists) {
        db.prepare("ALTER TABLE users ADD COLUMN language TEXT DEFAULT 'English (India)'").run();
        console.log("Added 'language' column to 'users' table.");
    } else {
        console.log("'language' column already exists.");
    }

    console.log("Migration completed successfully.");
} catch (error) {
    console.error("Migration failed:", error);
}
