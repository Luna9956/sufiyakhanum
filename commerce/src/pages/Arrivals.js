import React, { useState } from 'react';
import { Box, Button, Card, CardMedia, CardContent, useMediaQuery, useTheme } from '@mui/material';

// Sample data for images
const trendingImages = [
  'https://aik.store/cdn/shop/files/aik-atelier-wedding-festive-24-vol-1-look-03-1.jpg?v=1706725844&width=200',
  'https://aik.store/cdn/shop/files/aik-atelier-wedding-festive-24-vol-1-look-01-1.jpg?v=1717622436&width=200',
  'https://aik.store/cdn/shop/files/aik-atelier-wedding-festive-24-vol-1-look-10-1.jpg?v=1716387288&width=200',
  'https://aik.store/cdn/shop/files/aik-atelier-wedding-festive-24-vol-1-look-08-1_9ea3346a-08a9-4cff-9eb3-abf574d80721.jpg?v=1706872134&width=200',
  'https://aik.store/cdn/shop/files/aik-atelier-wedding-festive-24-vol-1-look-03-1.jpg?v=1706725844&width=200',
  'https://aik.store/cdn/shop/files/aik-atelier-wedding-festive-24-vol-1-look-03-1.jpg?v=1706725844&width=200',
  'https://aik.store/cdn/shop/files/aik-atelier-lawn-eid-edit-vol-3-look-03-A-1.jpg?v=1717504500&width=200',
  'https://aik.store/cdn/shop/files/aik-atelier-lawn-eid-edit-vol-3-look-03-A-1.jpg?v=1717504500&width=200',
];

const newInImages = [
  'https://aik.store/cdn/shop/files/aik-atelier-lawn-eid-edit-vol-3-look-01-A-1.jpg?v=1717504009&width=200',
  'https://aik.store/cdn/shop/files/aik-atelier-lawn-eid-edit-vol-3-look-03-B-1.jpg?v=1717504801&width=200',
  'https://aik.store/cdn/shop/files/aik-atelier-lawn-eid-edit-vol-3-look-03-A-1.jpg?v=1717504500&width=200',
  'https://aik.store/cdn/shop/files/aik-atelier-lawn-eid-edit-vol-3-look-01-B-1.jpg?v=1717504094&width=200',
  'https://aik.store/cdn/shop/files/aik-atelier-lawn-eid-edit-vol-3-look-02-A-1.jpg?v=1717504181&width=200',
  'https://aik.store/cdn/shop/files/aik-atelier-lawn-eid-edit-vol-3-look-02-B-1.jpg?v=1717504264&width=200',
  'https://aik.store/cdn/shop/files/aik-atelier-lawn-eid-edit-vol-3-look-02-B-1.jpg?v=1717504264&width=200',
 

];

const Arrivals = () => {
  const [selectedCategory, setSelectedCategory] = useState('TRENDING');
  const [startIndex, setStartIndex] = useState(0);
  const imagesPerPage = 5;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const images = selectedCategory === 'TRENDING' ? trendingImages : newInImages;

  const handleScroll = (direction) => {
    const maxIndex = Math.max(0, images.length - imagesPerPage);
    if (direction === 'left') {
      setStartIndex(prev => Math.max(prev - imagesPerPage, 0));
    } else {
      setStartIndex(prev => Math.min(prev + imagesPerPage, maxIndex));
    }
  };

  return (
    <Box sx={{ width: '100%', height: '100vh', overflow: 'hidden', position: 'relative' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
        <Button
          variant="text"
          sx={{ color: 'black', borderBottom: '2px solid black', marginX: 2, '&:hover': { borderBottom: '2px solid black' } }}
          onClick={() => setSelectedCategory('TRENDING')}
        >
          TRENDING
        </Button>
        <Button
          variant="text"
          sx={{ color: 'black', borderBottom: '2px solid black', marginX: 2, '&:hover': { borderBottom: '2px solid black' } }}
          onClick={() => setSelectedCategory('NEW IN')}
        >
          NEW IN
        </Button>
      </Box>

      <Box
        sx={{
          display: 'flex',
          overflowX: 'hidden',
          height: 'calc(100% - 150px)',
          width: '100%',
          whiteSpace: 'nowrap',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            transition: 'transform 0.5s',
            transform: `translateX(-${(startIndex / imagesPerPage) * 100}%)`,
          }}
        >
          {images.slice(startIndex, startIndex + imagesPerPage).map((img, index) => (
            <Card
              key={index}
              sx={{ height: '100%', width: isMobile ? '100%' : '20%', display: 'inline-block', position: 'relative' }}
            >
              <CardMedia
                component="img"
                image={img}
                alt={`Image ${index}`}
                sx={{ height: '100%', objectFit: 'cover' }}
              />
            </Card>
          ))}
        </Box>
      </Box>

      <Box sx={{ position: 'absolute', top: 'calc(100% - 50px)', left: '50%', transform: 'translateX(-50%)', width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="contained"
          sx={{ backgroundColor: 'black', color: 'white', '&:hover': { backgroundColor: 'darkgrey' } }}
        >
          Explore More
        </Button>
      </Box>

      <Box sx={{ position: 'absolute', top: '50%', left: 0, transform: 'translateY(-50%)' }}>
        <Button
          variant="contained"
          onClick={() => handleScroll('left')}
          sx={{ backgroundColor: 'black', color: 'white', '&:hover': { backgroundColor: 'darkgrey' } }}
        >
          &#9664;
        </Button>
      </Box>
      <Box sx={{ position: 'absolute', top: '50%', right: 0, transform: 'translateY(-50%)' }}>
        <Button
          variant="contained"
          onClick={() => handleScroll('right')}
          sx={{ backgroundColor: 'black', color: 'white', '&:hover': { backgroundColor: 'darkgrey' } }}
        >
          &#9654;
        </Button>
      </Box>
    </Box>
  );
};

export default Arrivals;
