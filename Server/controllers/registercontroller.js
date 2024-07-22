const db = require('../db/db'); 

function registerUser(req, res) {
    const { name, email, password } = req.body;

    const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    const values = [name, email, password];

    db.query(query, values, (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).json({ error: 'Failed to register user.' });
        }
        res.status(201).json({ message: 'User registered successfully.' });
    });
}

module.exports = {
    registerUser
};
