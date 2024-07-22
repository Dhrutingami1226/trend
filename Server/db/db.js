const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'gami8590',
  database: 'prod'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    throw err;
  }
  console.log('Connected to MySQL database.');
});

module.exports = connection;
