const express = require('express');
const mysql = require('mysql2');
const app = express();

// 创建 MySQL 连接池
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'rootpassword',
  database: process.env.DB_NAME || 'tracking_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// 测试数据库连接
pool.query('SELECT 1 + 1 AS solution', (error, results) => {
  if (error) throw error;
  console.log('Database connected, solution:', results[0].solution);
});

app.get('/', (req, res) => {
  res.send('Tracking Backend is running!');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});