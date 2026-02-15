const db = require('./db');

console.log('Migrating applications table...');

try {
    const columns = [
        { name: 'email', type: 'TEXT' },
        { name: 'contact_number', type: 'TEXT' },
        { name: 'alt_contact_number', type: 'TEXT' },
        { name: 'resume_url', type: 'TEXT' }
    ];

    columns.forEach(col => {
        try {
            db.prepare(`ALTER TABLE applications ADD COLUMN ${col.name} ${col.type}`).run();
            console.log(`Added column: ${col.name}`);
        } catch (error) {
            if (error.message.includes('duplicate column name')) {
                console.log(`Column ${col.name} already exists.`);
            } else {
                console.error(`Error adding column ${col.name}:`, error.message);
            }
        }
    });

    console.log('Migration completed.');
} catch (error) {
    console.error('Migration failed:', error);
}
