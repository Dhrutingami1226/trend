const db = require('../db/db');
const { upload, uploadFile } = require('../utils/upload');

function addProduct(req, res) {
  uploadFile.array('images', 4)(req, res, (err) => {
    if (err) {
      console.log('Upload Error:', err);
      return res.status(400).json({ error: 'Image upload error: ' + err });
    }

    console.log('Files Uploaded:', req.files);  // uploaded files

    const { productName, gender, rentPrice, securityDepo, description } = req.body;

    if (!productName || !gender || !rentPrice || !securityDepo || !description) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    // Ensure we have exactly 4 files
    if (!req.files || req.files.length !== 4) {
      console.log('Files Length:', req.files.length);  // number of files received
      return res.status(400).json({ error: 'All four images are required' });
    }

    // Map each file's path to the database columns
    const imagePaths = req.files.map(file => file.path);
    const [image1, image2, image3, image4] = imagePaths;

    const query = `
      INSERT INTO product (name, gender, rent, securitydepo, detail, img1, img2, img3, img4)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [productName, gender, rentPrice, securityDepo, description, image1, image2, image3, image4];

    db.query(query, values, (err, results) => {
      if (err) {
        console.log('Database Error:', err);  // any database errors
        return res.status(500).json({ error: 'Database error: ' + err });
      }
      res.status(201).json({ message: 'Product added successfully!' });
    });
  });
}

module.exports = { addProduct };
