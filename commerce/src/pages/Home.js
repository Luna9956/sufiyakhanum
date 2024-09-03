import React from 'react';
import { Box, Typography } from '@mui/material';

const Home = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundImage: 'url(https://aik.store/cdn/shop/files/Lawn_-_Eid_edit_-_Vol._3_-_website_Banner_4.jpg?v=1720445523&width=1400)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.5)',
        },
      }}
    >
      <Typography
        variant="h1"
        sx={{
          position: 'relative',
          fontSize: '4rem',
          fontWeight: 'bold',
        }}
      >
        Welcome to SafiyaKhanum
      </Typography>
    </Box>
  );
};

export default Home;
