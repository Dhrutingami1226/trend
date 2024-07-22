const db = require('../db/db');
const multer = require('multer');
const path = require('path');

// Set photo storage path
const storage = multer.diskStorage({
  destination: './uploads/images',
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Use a unique filename
  }
});

// Uploading condition
const upload = multer({
  storage,
  limits: { fileSize: 30000000 } // 30MB limit per photo
}).array('images', 4); 

// Add Product Function
function addProduct(req, res) {
  upload(req, res, (err) => {
    if (err) {
      return res.status(400).json({ error: 'Image upload error: ' + err });
    }

    const { productName, rentPrice, description, type } = req.body;

    if (!productName || !rentPrice || !description || !type) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    if (!req.files || req.files.length !== 4) {
      return res.status(400).json({ error: 'All four images are required'+ err });
    }

    const imagePaths = req.files.map(file => file.path);
    const [image1, image2, image3, image4] = imagePaths;

    const query = 'INSERT INTO products (name, type, description, price, image1, image2, image3, image4) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [productName, type, description, rentPrice, image1, image2, image3, image4];

    db.query(query, values, (err, results) => {
      if (err) {
        return res.status(500).json({ error: 'Database error: ' + err });
      }
      res.status(201).json({ message: 'Product added successfully!' });
    });
  });
}

module.exports = { addProduct };
