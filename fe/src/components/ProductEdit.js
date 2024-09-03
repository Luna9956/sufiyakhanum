import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ProductForm from './ProductForm'; // Reuse ProductForm component

const ProductEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleProductSave = async (updatedProduct) => {
    try {
      await axios.put(`http://localhost:5000/products/${id}`, updatedProduct, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      navigate('/admin'); // Navigate back to the product management page
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <div>
      <h2>Edit Product</h2>
      {product ? (
        <ProductForm product={product} onProductSave={handleProductSave} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductEdit;
