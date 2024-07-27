const db = require('../db/db'); 
const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

const forgotPassword = (req, res) => {
    const { email } = req.body;

    // Directly query the database using the single connection
    db.query('SELECT * FROM register WHERE mail = ?', [email], (error, results) => {
    if (error) {
      console.error('Error querying the database:', error);
         return res.status(500).send('Error querying the database');
        }

    if (results.length > 0) {
     const code = Math.floor(100000 + Math.random() * 900000);

     db.query('UPDATE register SET reset_code = ? WHERE mail = ?', [code, email], (error) => {
      if (error) {
         console.error('Error updating reset code:', error);
          return res.status(500).send('Error updating reset code');
            }

     transporter.sendMail({
     from: process.env.EMAIL_USER,
     to: email,
     subject: 'Reset Your Password',
     text: `Your verification code is: ${code}`
    }, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
                return res.status(500).send('Error sending email');
                    }
                    console.log('Email sent: ' + info.response);
                    res.send('Check your email for the verification code.');
                });
            });
        } else {
            res.status(404).send('Email not found.');
        }
    });
};

module.exports = {
    forgotPassword
};
