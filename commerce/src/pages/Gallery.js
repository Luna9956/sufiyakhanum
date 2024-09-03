import React from 'react';
import { Box } from '@mui/material';

const Gallery = () => {
  const images = [
    'https://aik.store/cdn/shop/files/Wedding_Festive_-_Home_Page_Website_Banner.jpg?v=1720518412&width=600',
    'https://aik.store/cdn/shop/files/Unstitched_-_Home_Page_Website_Banner.jpg?v=1720518456&width=500',
    'https://aik.store/cdn/shop/files/AIK_Lawn_-_Home_Page_Website_Banner.jpg?v=1720518495&width=600'
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        padding: 2,
      }}
    >
      {images.map((url, index) => (
        <Box
          key={index}
          sx={{
            width: { xs: '100%', sm: '45%', md: '30%' },
            margin: 1,
            '& img': {
              width: '100%',
              height: 'auto',
              borderRadius: 2,
              boxShadow: 3,
            },
          }}
        >
          <img src={url} alt={`Gallery Image ${index + 1}`} />
        </Box>
      ))}
    </Box>
  );
};

export default Gallery;
