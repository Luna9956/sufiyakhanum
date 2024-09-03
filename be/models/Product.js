const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  tags: { type: [String], required: true },
  mainImage: { type: String, required: true },
  secondaryImages: { type: [String], default: [] },
  size: { type: String, enum: ['XS', 'S', 'M', 'L'], default: null },
  length: { type: Number, default: null },
  fabric: { type: String, required: true }, // Add fabric option
  color: { type: [String], required: true }, // Add color options (as an array of strings)
  details: { type: String, required: true }, // Add required type (e.g., bridal, casual, etc.)
  description: { type: String, required: true },
  stock: { type: Number, required: true, default: 0 } // Add stock field with default value 0
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
