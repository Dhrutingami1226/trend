// controllers/registerController.js

const pool = require('../db/db'); // Assuming db.js handles database connection and exports pool

function registerUser(req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    var confirmPassword = req.body.confirmPassword;

    if (!name || !email || !password || !confirmPassword) {
        return res.status(400).send('All fields are required');
    }

    if (password !== confirmPassword) {
        return res.status(400).send('Passwords do not match');
    }

    pool.getConnection(function (err, connection) {
        if (err) {
            return res.status(500).send('Error connecting to the database');
        }

        var query = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
        connection.query(query, [name, email, password], function (err, result) {
            connection.release();

            if (err) {
                console.error('Error inserting data into the database:', err);
                return res.status(500).send('Error inserting data into the database');
            }

            res.status(201).send('User registered successfully');
        });
    });
}

module.exports = {
    registerUser: registerUser
};