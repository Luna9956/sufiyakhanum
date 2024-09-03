import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, Card, CardMedia, CardContent, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Unstitched = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://sufiyakhanum.vercel.app/products?tag=bridal');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleCardClick = (product) => {
    navigate(`/product/${product._id}`);
  };

  return (
    <>
      <Box sx={{ padding: 4 }}>
        <Navbar />
      </Box>
      <Box sx={{ marginTop: '120px', paddingTop: '20px', paddingX: 4 }}>
        {products.length === 0 ? (
          <Typography variant="h6" align="center">No Bridal products available</Typography>
        ) : (
          <Grid container spacing={4}>
            {products.map((product) => (
              <Grid item xs={6} sm={6} md={4} key={product._id}>
                <Card
                  sx={{
                    cursor: 'pointer',
                    boxShadow: 8,
                    borderRadius: 3,
                    overflow: 'hidden',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: 16
                    }
                  }}
                  onClick={() => handleCardClick(product)}
                >
                  <CardMedia
                    component="img"
                    height="500"
                    image={product.mainImage}
                    alt={product.name}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ flex: 1, textAlign: 'center', padding: 3 }}>
                    <Typography variant="h5" component="div" gutterBottom>
                      {product.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </>
  );
};

export default Unstitched;
