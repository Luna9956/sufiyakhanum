import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductForm from './ProductForm';
import { useParams, useNavigate } from 'react-router-dom';
import { Typography, Container, CircularProgress } from '@mui/material';

const EditProductPage = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const navigate = useNavigate(); // For navigation after saving
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://sufiyakhanum.vercel.app/products/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleProductUpdate = async (updatedProduct) => {
    try {
      await axios.put(`https://sufiyakhanum.vercel.app/products/${id}`, updatedProduct, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      navigate('/products'); // Navigate to the products list page after saving
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  if (loading) return <CircularProgress />; // Show loading spinner while fetching

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Edit Product
      </Typography>
      {product && (
        <ProductForm
          product={product}
          onProductSave={() => navigate('/products')} // Optional, navigate to products list after save
          onProductUpdate={handleProductUpdate}
        />
      )}
    </Container>
  );
};

export default EditProductPage;
