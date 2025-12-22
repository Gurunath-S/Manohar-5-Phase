
// Cloudinary img upload...

const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../config/cloudinary');

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params:{
      folder:"manoharJewellery",
      allowed_formats: ['jpg', 'png', 'jpeg', 'webp'], 
      // transformation: [{ width: 800, crop: 'limit' }],
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 20 * 1024 * 1024 ,fieldSize:20 * 1024 * 1024},
});

module.exports = upload;

