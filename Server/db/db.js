const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '2792242584Arya',
  database: 'prod'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL server.');
});

module.exports = connection;
 