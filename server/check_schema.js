const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.resolve(__dirname, 'cyberlink.db');
const db = new Database(dbPath);

console.log('Checking users table schema...');
const info = db.pragma('table_info(users)');
console.log(info);
