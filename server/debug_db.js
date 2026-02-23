const db = require('./db');

try {
    console.log('--- Inspecting Jobs Table ---');
    const job = db.prepare('SELECT * FROM jobs WHERE id = ?').get(3);
    console.log('Job ID 3:', job);

    const columns = db.pragma('table_info(jobs)');
    console.log('Jobs Table Columns:', columns.map(c => c.name));

} catch (e) {
    console.error(e);
}
