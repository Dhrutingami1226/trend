const express = require('express');
const router = express.Router();
const { forgotPassword } = require('../controllers/forgotController');

router.post('/forgot', forgotPassword);

module.exports = router;
