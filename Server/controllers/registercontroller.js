const db = require('../db/db');
const bcrypt = require('bcrypt');

async function registerUser(req, res) {
    const { user, mail, pass, cpass } = req.body;

    if (pass !== cpass) {
        return res.status(400).json({ error: 'Passwords do not match.' });
    }

    try {
        const hashedPassword = await bcrypt.hash(pass, 10);

        const query = 'INSERT INTO register (user, mail, pass, cpass) VALUES (?, ?, ?, ?)';
        const values = [user, mail, hashedPassword, hashedPassword];

        db.query(query, values, (err, result) => {
            if (err) {
                console.error('Error inserting data:', err);
                if (err.code === 'ER_DUP_ENTRY') {
                    return res.status(400).json({ error: 'Email already registered.' });
                }
                return res.status(500).json({ error: 'Failed to register user.' });
            }
            res.status(201).json({ message: 'User registered successfully.' });
        });
    } catch (error) {
        console.error('Error hashing password:', error);
        res.status(500).json({ error: 'Failed to register user.' });
    }
}

module.exports = {
    registerUser
};
