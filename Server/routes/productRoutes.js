const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { upload, uploadFile } = require("../utils/upload");

router.post('/add', uploadFile.array("images", 4), productController.addProduct);

module.exports = router;
