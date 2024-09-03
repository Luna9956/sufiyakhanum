import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, TextField, FormControl, FormControlLabel, Checkbox, Box, Select, MenuItem, InputLabel } from '@mui/material';
import { Autocomplete } from '@mui/material'; // Import Autocomplete for custom input

const tagsOptions = ['bridal', 'stitched', 'unstitched', 'new', 'embroidery', 'sale'];
const sizeOptions = ['S', 'M', 'L', 'XL', 'XXL'];
const colorOptions = ['Red', 'Blue', 'Green', 'Black', 'White', 'Yellow']; // Predefined color options
const fabricOptions = ['Cotton', 'Silk', 'Linen', 'Wool', 'Polyester']; // Predefined fabric options

const ProductForm = ({ product, onProductSave }) => {
  const [name, setName] = useState(product ? product.name : '');
  const [price, setPrice] = useState(product ? product.price : '');
  const [stock, setStock] = useState(product ? product.stock : ''); // Stock state
  const [tags, setTags] = useState(product ? product.tags : []);
  const [sizes, setSizes] = useState(product ? product.sizes : []);
  const [length, setLength] = useState(product ? product.length : '');
  const [color, setColor] = useState(product ? product.color : ''); // Color state
  const [fabric, setFabric] = useState(product ? product.fabric : ''); // Fabric state
  const [details, setDetails] = useState(product ? product.details.split('\n') : []); // Details as array of strings
  const [description, setDescription] = useState(product ? product.description : '');
  const [mainImage, setMainImage] = useState(null);
  const [mainImagePreview, setMainImagePreview] = useState(null); // State for image preview
  const [secondaryImages, setSecondaryImages] = useState([]);

  useEffect(() => {
    if (product) {
      setName(product.name);
      setPrice(product.price);
      setStock(product.stock || ''); // Reset stock state
      setTags(product.tags || []);
      setSizes(product.sizes || []);
      setLength(product.length || '');
      setColor(product.color || '');
      setFabric(product.fabric || '');
      setDetails(product.details ? product.details.split('\n') : []);
      setDescription(product.description);
      setMainImage(null);
      setMainImagePreview(null); // Reset image preview
      setSecondaryImages([]);
    }
  }, [product]);

  const handleTagChange = (event) => {
    const tag = event.target.value;
    setTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag]
    );
  };

  const handleSizeChange = (event) => {
    const size = event.target.value;
    setSizes((prevSizes) =>
      prevSizes.includes(size)
        ? prevSizes.filter((s) => s !== size)
        : [...prevSizes, size]
    );
  };

  const handleMainImageChange = (event) => {
    const file = event.target.files[0];
    setMainImage(file);
    setMainImagePreview(URL.createObjectURL(file)); // Set preview URL
  };

  const handleDetailsChange = (index, value) => {
    const newDetails = [...details];
    newDetails[index] = value;
    setDetails(newDetails);
  };

  const addDetail = () => {
    setDetails([...details, '']);
  };

  const removeDetail = (index) => {
    setDetails(details.filter((_, i) => i !== index));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate required fields
    if (!name || !price || !length || !color || !fabric || !description || !stock) {
      alert('Please fill in all required fields.');
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('stock', stock); // Add stock to formData
    formData.append('tags', tags.join(',')); // Convert tags array to comma-separated string
    formData.append('sizes', sizes.join(',')); // Convert sizes array to comma-separated string
    formData.append('length', length);
    formData.append('color', color);
    formData.append('fabric', fabric);
    formData.append('details', details.join('\n')); // Convert details array to newline-separated string
    formData.append('description', description);

    if (mainImage) {
      formData.append('mainImage', mainImage);
    }

    secondaryImages.forEach((file) => {
      formData.append('secondaryImages', file);
    });

    try {
      const response = await axios.post('http://localhost:5000/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Product saved successfully:', response.data);
      if (onProductSave) {
        onProductSave(response.data);
      }
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Price"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Stock"
        type="number"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Length"
        value={length}
        onChange={(e) => setLength(e.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <FormControl fullWidth margin="normal">
        <InputLabel id="color-label">Color</InputLabel>
        <Autocomplete
          value={color}
          onChange={(event, newValue) => setColor(newValue)}
          freeSolo
          options={colorOptions}
          renderInput={(params) => <TextField {...params} label="Color" variant="outlined" />}
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel id="fabric-label">Fabric</InputLabel>
        <Autocomplete
          value={fabric}
          onChange={(event, newValue) => setFabric(newValue)}
          freeSolo
          options={fabricOptions}
          renderInput={(params) => <TextField {...params} label="" variant="outlined" />}
        />
      </FormControl>
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <FormControl component="fieldset" margin="normal" fullWidth>
        <Box>
          {sizeOptions.map((size) => (
            <FormControlLabel
              key={size}
              control={
                <Checkbox
                  value={size}
                  checked={sizes.includes(size)}
                  onChange={handleSizeChange}
                />
              }
              label={size}
            />
          ))}
        </Box>
      </FormControl>
      <FormControl component="fieldset" margin="normal" fullWidth>
        <Box>
          {tagsOptions.map((option) => (
            <FormControlLabel
              key={option}
              control={
                <Checkbox
                  value={option}
                  checked={tags.includes(option)}
                  onChange={handleTagChange}
                />
              }
              label={option}
            />
          ))}
        </Box>
      </FormControl>
      <div>
        <h3>Details</h3>
        {details.map((detail, index) => (
          <Box key={index} mb={1} display="flex" alignItems="center">
            <TextField
              fullWidth
              value={detail}
              onChange={(e) => handleDetailsChange(index, e.target.value)}
              placeholder={`Detail ${index + 1}`}
              margin="normal"
            />
            <Button onClick={() => removeDetail(index)} color="error">Remove</Button>
          </Box>
        ))}
        <Button onClick={addDetail} variant="outlined">Add Detail</Button>
      </div>
      <input
        type="file"
        accept="image/*"
        onChange={handleMainImageChange}
      />
      {mainImagePreview && (
        <div style={{ margin: '10px 0' }}>
          <img src={mainImagePreview} alt="Main Preview" style={{ width: '100px', height: 'auto' }} />
        </div>
      )}
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={(e) => setSecondaryImages([...e.target.files])}
      />
      <Button type="submit" variant="contained" color="primary">Save</Button>
    </form>
  );
};

export default ProductForm;
