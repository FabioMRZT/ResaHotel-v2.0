const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: '127.0.0.1',
  port: 3308,
  user: 'root',        // ← à adapter
  password: '',        // ← à adapter
  database: 'resahotelcalifornia',
  waitForConnections: true,
  connectionLimit: 10,
});

module.exports = pool;