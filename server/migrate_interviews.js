const db = require('better-sqlite3')('jobs.db');

try {
    // Check if interview_date column exists
    const info = db.prepare("PRAGMA table_info(applications)").all();
    const hasInterviewDate = info.some(col => col.name === 'interview_date');

    if (!hasInterviewDate) {
        console.log("Adding interview_date column...");
        db.prepare("ALTER TABLE applications ADD COLUMN interview_date DATETIME").run();
    } else {
        console.log("interview_date column already exists.");
    }

    // Check if interview_notes column exists
    const hasInterviewNotes = info.some(col => col.name === 'interview_notes');

    if (!hasInterviewNotes) {
        console.log("Adding interview_notes column...");
        db.prepare("ALTER TABLE applications ADD COLUMN interview_notes TEXT").run();
    } else {
        console.log("interview_notes column already exists.");
    }

    console.log("Migration completed successfully.");

} catch (error) {
    console.error("Migration failed:", error);
}
