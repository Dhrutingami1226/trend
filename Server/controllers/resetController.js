const db = require('../db/db'); 
const bcrypt = require('bcrypt');

const resetPassword = (req, res) => {
    const { email, code, newPassword, confirmPassword } = req.body;

    // Check if entered code match code stored in db for email
    db.query('SELECT * FROM register WHERE mail = ? AND reset_code = ?', [email, code], (error, results) => {
        if (error) {
            console.error('Error querying the database:', error);
            return res.status(500).send('Error querying the database');
        }

        if (results.length > 0) {
            // Code matches, reset pass
            if (newPassword === confirmPassword) {
                // Hash the new pass
                bcrypt.hash(newPassword, 10, (err, hashedPassword) => {
                    if (err) {
                        console.error('Error hashing password:', err);
                        return res.status(500).send('Error hashing password');
                    }

                       // Update password in db
                     db.query('UPDATE register SET pass = ?, reset_code = NULL WHERE mail = ?', [hashedPassword, email], (error) => {
                        if (error) {
                            console.error('Error updating password:', error);
                            return res.status(500).send('Error updating password');
                        }
                        res.send('Password reset successfully.');
                    });
                });
            } else {
                res.status(400).send('Passwords do not match.');
            }
        } else {
            // if Code does not match
            res.status(401).send('Invalid verification code.');
        }
    });
};

module.exports = {
    resetPassword
};
