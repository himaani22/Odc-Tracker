// db.js
const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',       // ✅ replace with your MySQL username
  password: 'your_password',   // ✅ replace with your MySQL password
  database: 'your_database',   // ✅ replace with your database name
});

module.exports = db;
