const mysql = require('mysql');

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "node_project"
});

const login = async (req, res)=> {
    var email = req.body.email;
    var password = req.body.password;
    if (!email || !password) {
        return res.status(400).send('Email and password are required');
    }
    pool.getConnection(function (err, connection) {
        if (err) {
            return res.status(500).send('Error connecting to the database');
        }
        var query = "SELECT * FROM register WHERE mail = ? AND pass = ?";
        connection.query(query, [email, password], function (err, results) {
            connection.release();
            if (err) {
                console.error('Error querying the database:', err);
                return res.status(500).send('Error querying the database');
            }
            if (results.length === 0) {
                return res.status(401).send('Invalid email or password');
            }
            res.redirect('/products');
        });
    })}





    module.exports = {
        login
    }