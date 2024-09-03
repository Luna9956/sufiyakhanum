import React from 'react';
import { Box, Typography, Grid, IconButton, useTheme, useMediaQuery } from '@mui/material';
import { Facebook, Instagram, Pinterest, LinkedIn, YouTube } from '@mui/icons-material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';

const AboutUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isExtraSmall = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Box
      sx={{
        width: { xs:300, sm: 600, md: '1366px',xl:"2366px"},
        padding: 4,
        background: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: isMobile ? '0px' : 0,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          marginBottom: 4,
          color: 'black',
          textAlign: 'center',
          fontWeight: 'bold',
          letterSpacing: 1,
          fontSize: isExtraSmall ? '1.5rem' : isMobile ? '2rem' : '2.5rem',
        }}
      >
        #WORLDOFSK
      </Typography>

      <Grid container spacing={4} direction={isExtraSmall ? 'column' : 'row'}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              padding: 3,
              borderRadius: '16px',
              border: `1px solid ${theme.palette.grey[300]}`,
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: -20,
                left: -20,
                width: 'calc(100% + 40px)',
                height: 'calc(100% + 40px)',
                background: 'white',
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 80%)',
                zIndex: -1,
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -20,
                right: -20,
                width: 'calc(100% + 40px)',
                height: 'calc(100% + 40px)',
                background: 'white',
                clipPath: 'polygon(0% 20%, 100% 0%, 100% 100%, 0% 100%)',
                zIndex: -1,
              },
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: isExtraSmall ? '1rem' : '1.3rem',
                color: theme.palette.text.primary,
                lineHeight: 1.8,
                '&:hover': {
                  color: theme.palette.primary.main,
                  transition: 'color 0.3s ease',
                },
              }}
            >
              Welcome to the world of Safiya Khanum, where tradition meets elegance. Explore our unique collection of timeless designs that celebrate the essence of culture and craftsmanship.
            </Typography>
            <img
              src="https://aik.store/cdn/shop/files/RTW_-_Home_Page_Website_Banner.jpg?v=1720519136&width=1400"
              alt="About Us"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '16px',
                marginTop: '16px',
                display: 'block',
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              borderRadius: '16px',
              overflow: 'hidden',
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: -20,
                left: -20,
                width: 'calc(100% + 40px)',
                height: 'calc(100% + 40px)',
                background: 'white',
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 80%)',
                zIndex: -1,
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -20,
                right: -20,
                width: 'calc(100% + 40px)',
                height: 'calc(100% + 40px)',
                background: 'white',
                clipPath: 'polygon(0% 20%, 100% 0%, 100% 100%, 0% 100%)',
                zIndex: -1,
              },
            }}
          >
            <img
              src="https://aik.store/cdn/shop/files/RTW_-_Home_Page_Website_Banner.jpg?v=1720519136&width=1400"
              alt="About Us"
              style={{ width: '100%', height: 'auto', borderRadius: '16px', display: 'block' }}
            />
          </Box>
          <Typography
            variant="body1"
            sx={{
              marginTop: 2,
              fontSize: isExtraSmall ? '1rem' : '1.3rem',
              color: theme.palette.text.primary,
              lineHeight: 1.8,
              '&:hover': {
                color: theme.palette.primary.main,
                transition: 'color 0.3s ease',
              },
            }}
          >
            Our mission is to bring you the finest in traditional fashion with a modern touch. Discover designs that reflect both our heritage and our commitment to quality.
          </Typography>
        </Grid>
      </Grid>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginTop: 4,
        }}
      >
        <IconButton
          href="https://www.facebook.com/share/tWprYsnM25DyChsA/?mibextid=qi2Omg"
          sx={{
            margin: 1,
            color: theme.palette.text.primary,
            '&:hover': {
              color: theme.palette.primary.main,
            },
          }}
        >
          <Facebook />
        </IconButton>
        <IconButton
          href="https://pin.it/1xhd6K3rJ"
          sx={{
            margin: 1,
            color: theme.palette.text.primary,
            '&:hover': {
              color: theme.palette.primary.main,
            },
          }}
        >
          <Pinterest />
        </IconButton>
        <IconButton
          href="https://www.instagram.com/safiyakhanumofficial?igsh=MWpjdnV5ZXhvdHFiMA=="
          sx={{
            margin: 1,
            color: theme.palette.text.primary,
            '&:hover': {
              color: theme.palette.primary.main,
            },
          }}
        >
          <Instagram />
        </IconButton>
        <IconButton
          href="https://www.linkedin.com/in/safiyah-khanum-856172325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          sx={{
            margin: 1,
            color: theme.palette.text.primary,
            '&:hover': {
              color: theme.palette.primary.main,
            },
          }}
        >
          <LinkedIn />
        </IconButton>
        <IconButton
          href="https://youtube.com/@safiyakhanum?si=KDdkj4bHP9pU4Cw_https://youtube.com/@safiyakhanum?si=KDdkj4bHP9pU4Cw_"
          sx={{
            margin: 1,
            color: theme.palette.text.primary,
            '&:hover': {
              color: theme.palette.primary.main,
            },
          }}
        >
          <YouTube />
        </IconButton>
        <IconButton href="https://www.tiktok.com/@safiyakhanumofficial?_t=8pAdNI2NUsD&_r=1">
          <FontAwesomeIcon icon={faTiktok} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default AboutUs;
