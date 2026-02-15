const db = require('./db');

try {
    console.log("Adding photo_url column to recruiters table...");
    db.prepare('ALTER TABLE recruiters ADD COLUMN photo_url TEXT').run();
    console.log("Successfully added photo_url column.");
} catch (error) {
    if (error.message.includes('duplicate column name')) {
        console.log("Column photo_url already exists.");
    } else {
        console.error("Error adding column:", error);
    }
}
