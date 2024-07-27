const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: './uploads/images',
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname)); // Use a unique filename
    }
  });

  const uploadFile = multer({storage})
  module.exports = {uploadFile}
