import React from 'react';
import { Box, Typography, Button } from '@mui/material';

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
        padding: 4,
        position: 'relative',
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: 'bold',
          letterSpacing: 1,
          mb: 4,
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
          zIndex: 1,
        }}
      >
        Welcome to Our Store
      </Typography>
      <Typography
        variant="h5"
        sx={{
          mb: 4,
          textShadow: '1px 1px 3px rgba(0, 0, 0, 0.6)',
          zIndex: 1,
        }}
      >
        Discover the latest trends and collections.
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: 'black',
          color: 'white',
          padding: '10px 20px',
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
