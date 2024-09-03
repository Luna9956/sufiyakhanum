import React from 'react';
import ProductForm from './ProductForm';
import { Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddProductPage = () => {
  const navigate = useNavigate();

  const handleProductSave = async () => {
    navigate('/products'); // Navigate to the products list page after saving
  };

  const handleProductUpdate = async () => {
    // This function won't be used here, but you need to provide it
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Add New Product
      </Typography>
      <ProductForm onProductSave={handleProductSave} onProductUpdate={handleProductUpdate} />
    </Container>
  );
};

export default AddProductPage;
