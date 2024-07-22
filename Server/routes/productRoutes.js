const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController'); // Ensure this path is correct

router.post('/add', productController.addProduct);

module.exports = router;
