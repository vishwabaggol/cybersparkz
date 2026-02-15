const db = require('./db');

console.log('Migrating applications table (full_name)...');

try {
    try {
        db.prepare('ALTER TABLE applications ADD COLUMN full_name TEXT').run();
        console.log('Added column: full_name');
    } catch (error) {
        if (error.message.includes('duplicate column name')) {
            console.log('Column full_name already exists.');
        } else {
            console.error('Error adding column full_name:', error.message);
        }
    }

    console.log('Migration completed.');
} catch (error) {
    console.error('Migration failed:', error);
}
