import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Addition = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        backgroundImage: `url('https://aik.store/cdn/shop/files/RTW_-_Home_Page_Website_Banner.jpg?v=1720519136&width=1400')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        padding: { xs: 1, sm: 2, md: 4 }, // Adjust padding for mobile
        position: 'relative',
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: 'bold',
          letterSpacing: 1,
          mb: { xs: 1, sm: 2, md: 4 }, // Adjust margin for mobile
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
          zIndex: 1,
          fontSize: { xs: '1.5rem', sm: '2rem', md: '3rem' }, // Smaller font size for mobile
        }}
      >
        Welcome to Our Store
      </Typography>
      <Typography
        variant="h5"
        sx={{
          mb: { xs: 1, sm: 2, md: 4 }, // Adjust margin for mobile
          textShadow: '1px 1px 3px rgba(0, 0, 0, 0.6)',
          zIndex: 1,
          fontSize: { xs: '0.9rem', sm: '1.2rem', md: '1.5rem' }, // Smaller font size for mobile
        }}
      >
        Discover the latest trends and collections.
      </Typography>
      <Button
        variant="contained"
        component={Link}
        to="/newin"
        sx={{
          backgroundColor: 'black',
          color: 'white',
          padding: { xs: '6px 12px', sm: '8px 16px', md: '10px 20px' }, // Smaller padding for mobile
          fontSize: { xs: '0.7rem', sm: '0.9rem', md: '1rem' }, // Smaller font size for mobile
          '&:hover': {
            backgroundColor: 'darkgrey',
          },
          zIndex: 1,
        }}
      >
        Explore Now
      </Button>
    </Box>
  );
};

export default Addition;
