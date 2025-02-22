import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, TextField, Typography, Button, Grid, Snackbar, Alert, Card, CardMedia, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Checkout = () => {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    country: '',
    firstName: '',
    lastName: '',
    address: '',
    apartmentSuite: '',
    city: '',
    postalCode: '',
  });
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCartItems = () => {
      const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      setCartItems(savedCartItems);
    };

    fetchCartItems();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleItemChange = (index, e) => {
    const { name, value } = e.target;
    const updatedCartItems = [...cartItems];
    updatedCartItems[index][name] = value;
    setCartItems(updatedCartItems);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Map cartItems to include productId, size, and length
      const formattedCartItems = cartItems.map(item => ({
        productId: item._id, // Ensure _id is sent as productId
        quantity: item.quantity,
        price: item.price,
        size: item.size || '', // Default to empty string if not provided
        length: item.length || '' // Default to empty string if not provided
      }));
  
      console.log('Submit Data:', { ...formData, products: formattedCartItems }); // Add this line to inspect the data being sent
  
      await axios.post('https://sufiya-admin.vercel.app/api/checkouts', { ...formData, products: formattedCartItems });
      setSuccess(true);
      localStorage.removeItem('cartItems'); // Clear cart items after successful checkout
      // Navigate to a confirmation page or similar
    } catch (err) {
      setError('There was an error processing your order. Please try again.');
    }
  };

  return (
    <>
    <Navbar/>
    <Box sx={{ marginTop: '100px', paddingTop: '20px' }}>
      <Typography variant="h4" gutterBottom>Checkout</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="First Name"
              name="firstName"
              fullWidth
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Last Name"
              name="lastName"
              fullWidth
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Phone Number"
              name="phoneNumber"
              fullWidth
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Country"
              name="country"
              fullWidth
              value={formData.country}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Address"
              name="address"
              fullWidth
              value={formData.address}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Apartment/Suite"
              name="apartmentSuite"
              fullWidth
              value={formData.apartmentSuite}
              onChange={handleChange}
              placeholder="e.g., Apt 4B"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="City"
              name="city"
              fullWidth
              value={formData.city}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Postal Code"
              name="postalCode"
              fullWidth
              value={formData.postalCode}
              onChange={handleChange}
              required
            />
          </Grid>
        </Grid>

        <Box mt={4}>
          <Typography variant="h6">Cart Items:</Typography>
          {cartItems.length === 0 ? (
            <Typography>No items in cart</Typography>
          ) : (
            cartItems.map((item, index) => (
              <Card key={item._id} sx={{ marginTop: 2 }}>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={item.mainImage}
                      alt={item.name}
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <CardContent>
                      <Typography variant="h6">{item.name}</Typography>
                      <Typography variant="body1">Price: Rs:{item.price}</Typography>
                      <TextField
                        label="Size"
                        name="size"
                        value={item.size || ''}
                        onChange={(e) => handleItemChange(index, e)}
                        fullWidth
                      />
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
            ))
          )}
        </Box>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 4 }}>
          <Button type="submit" variant="contained" color="primary" sx={{ mb: 2 }}>
            Place Order
          </Button>
          <Button type="button" variant="contained" color="primary" onClick={() => navigate('/')}>
            Continue Shopping
          </Button>
        </Box>
      </form>

      {success && (
        <Snackbar open={success} autoHideDuration={6000} onClose={() => setSuccess(false)}>
          <Alert onClose={() => setSuccess(false)} severity="success">
            Order placed successfully!
          </Alert>
        </Snackbar>
      )}
      {error && (
        <Snackbar open={!!error} autoHideDuration={6000} onClose={() => setError(null)}>
          <Alert onClose={() => setError(null)} severity="error">
            {error}
          </Alert>
        </Snackbar>
      )}
    </Box>
    </>
  );
};

export default Checkout;
