const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cloudinary = require('cloudinary').v2;
const Product = require('./models/Product');
const multer = require('multer');
const cors = require('cors'); 
const adminRoutes = require('./routes/Admin');
const checkoutRoutes = require('./routes/checkout');

// Initialize Express
const app = express();
require('dotenv').config();

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Multer setup to store files in memory
const storage = multer.memoryStorage(); 
const upload = multer({ storage });

// Cloudinary configuration
cloudinary.config({
  cloud_name: 'dsvfigpxw',
  api_key: '829993548587123',
  api_secret: '6Q38eXrvc9ajWV5GjgkAXIzje3Q',
});

// MongoDB connection
mongoose.connect('mongodb+srv://sufiyakhanum:35xMBpSDDn2Eagt7@cluster0.3xnlf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('Failed to connect to MongoDB', err));

// Routes
app.post('/products', upload.fields([
  { name: 'mainImage', maxCount: 1 },
  { name: 'secondaryImages', maxCount: 10 }
]), async (req, res) => {
  try {
    const { name, price, tags, size, length, fabric, color, details, description, stock } = req.body; // Add stock
    let mainImageUrl = null;
    const secondaryImagesUrls = [];

    // Upload main image to Cloudinary
    if (req.files['mainImage']) {
      const mainImageFile = req.files['mainImage'][0].buffer;
      const mainImageResult = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({ folder: 'products' }, (error, result) => {
          if (error) reject(error);
          else resolve(result.secure_url);
        }).end(mainImageFile);
      });
      mainImageUrl = mainImageResult;
    }

    // Upload secondary images to Cloudinary
    if (req.files['secondaryImages']) {
      for (const file of req.files['secondaryImages']) {
        const secondaryImageResult = await new Promise((resolve, reject) => {
          cloudinary.uploader.upload_stream({ folder: 'products' }, (error, result) => {
            if (error) reject(error);
            else resolve(result.secure_url);
          }).end(file.buffer);
        });
        secondaryImagesUrls.push(secondaryImageResult);
      }
    }

    // Create new product with stock
    const newProduct = new Product({
      name,
      price,
      tags,
      mainImage: mainImageUrl,
      secondaryImages: secondaryImagesUrls,
      size: size || null,
      length: length || null,
      fabric,
      color: color.split(','), // Store as array
      details,
      description,
      stock: stock || 0 // Set stock with a default value of 0
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error('Error saving product:', error);
    res.status(500).json({ error: error.message });
  }
});
// Fetch products with optional tag filter
app.get('/products', async (req, res) => {
  try {
    const tag = req.query.tag;
    const filter = tag ? { tags: tag } : {}; // Filter based on tag if provided
    const products = await Product.find(filter);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error });
  }
});


// Fetch a single product by ID
app.get('/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/products/:id', upload.fields([
  { name: 'mainImage', maxCount: 1 },
  { name: 'secondaryImages', maxCount: 10 }
]), async (req, res) => {
  try {
    const { name, price, tags, size, length, fabric, color, details, description, stock } = req.body;
    let mainImageUrl = null;
    const secondaryImagesUrls = [];

    // Log the request body for debugging
    console.log('Request body:', req.body);

    // Upload new main image if provided
    if (req.files['mainImage']) {
      const mainImageFile = req.files['mainImage'][0].buffer;
      const mainImageResult = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({ folder: 'products' }, (error, result) => {
          if (error) reject(error);
          else resolve(result.secure_url);
        }).end(mainImageFile);
      });
      mainImageUrl = mainImageResult;
    }

    // Upload new secondary images if provided
    if (req.files['secondaryImages']) {
      for (const file of req.files['secondaryImages']) {
        const secondaryImageResult = await new Promise((resolve, reject) => {
          cloudinary.uploader.upload_stream({ folder: 'products' }, (error, result) => {
            if (error) reject(error);
            else resolve(result.secure_url);
          }).end(file.buffer);
        });
        secondaryImagesUrls.push(secondaryImageResult);
      }
    }

    // Prepare the update data
    const updatedProductData = {
      name,
      price,
      tags,
      size: size || null,
      length: length || null,
      fabric,
      color: color ? color.split(',') : [], // Ensure color is an array
      details,
      description,
      stock: stock !== undefined ? Number(stock) : 0 // Handle stock correctly
    };

    if (mainImageUrl) updatedProductData.mainImage = mainImageUrl;
    if (secondaryImagesUrls.length > 0) updatedProductData.secondaryImages = secondaryImagesUrls;

    // Update the product in the database
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, updatedProductData, { new: true });
    if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error('Error updating product:', error); // Log detailed error
    res.status(500).json({ error: error.message });
  }
});
// Delete a product by ID
app.delete('/products/:id', async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(deletedProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.post('/api/orders', async (req, res) => {
  try {
    const { products, total } = req.body;
    if (!products || products.length === 0 || !total) return res.status(400).json({ error: 'Invalid order data' });

    // Create and save the new order
    const newOrder = new Checkout({
      ...req.body,
      products: products.map(product => ({
        productId: product.id,
        quantity: product.quantity,
        price: product.price
      }))
    });

    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'Failed to create order' });
  }
});

// Use routes
app.use('/admin', adminRoutes);
app.use('/api/checkouts', checkoutRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
