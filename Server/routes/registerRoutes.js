const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registercontroller');

router.post('/', registerController.registerUser);

module.exports = router;