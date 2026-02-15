const db = require('./db');
try {
    const info = db.pragma('table_info(users)');
    console.log(JSON.stringify(info, null, 2));
} catch (error) {
    console.error(error);
}
