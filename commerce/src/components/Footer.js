import React from 'react';
import { Box, Typography, IconButton, TextField, Button, useTheme } from '@mui/material';
import { Facebook, Instagram, WhatsApp, Pinterest, LinkedIn, YouTube } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok } from '@fortawesome/free-brands-svg-icons'; 
const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: '95%',  // Adjusted width
        maxWidth: '1200px',
        margin: 'auto',
        padding: 4,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.background.paper,
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          paddingBottom: 4,
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            '& > p': {
              marginBottom: 2,
              fontSize: '1.1rem',
            },
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
            ABOUT SAFIYA KHANUM
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
          Safiya Khanum blends traditional elegance with contemporary style. Our collections are thoughtfully designed to offer timeless fashion with a modern twist, crafted from high-quality materials. .
          </Typography>
          <Box sx={{ display: 'flex', marginTop: 2 }}>
            <IconButton href="https://www.facebook.com/share/tWprYsnM25DyChsA/?mibextid=qi2Omg" sx={{ marginRight: 1 }}>
              <Facebook />
            </IconButton>
            <IconButton href="https://www.instagram.com/safiyakhanumofficial?igsh=MWpjdnV5ZXhvdHFiMA==" sx={{ marginRight: 1 }}>
              <Instagram />
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/safiyah-khanum-856172325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" sx={{ marginRight: 1 }}>
              <LinkedIn />
            </IconButton>
            <IconButton href="https://pin.it/1xhd6K3rJ" sx={{ marginRight: 1 }}>
              <Pinterest />
            </IconButton>
            <IconButton href="https://youtube.com/@safiyakhanum?si=KDdkj4bHP9pU4Cw_https://youtube.com/@safiyakhanum?si=KDdkj4bHP9pU4Cw_" sx={{ marginRight: 1 }}>
              <YouTube />
            </IconButton>
            <IconButton href="https://www.tiktok.com/@safiyakhanumofficial?_t=8pAdNI2NUsD&_r=1">
              <FontAwesomeIcon icon={faTiktok} />
            </IconButton>
            
          </Box>
          <Box>
  Contact us at
  <br />
  <span 
    style={{
      display: 'inline-block',
      background: 'linear-gradient(135deg, #f2709c, #ff9472)',
      WebkitBackgroundClip: 'text',
      color: 'transparent',
      textDecoration: 'none',
    }}
  >
 
    <a 
      href="mailto:safiyahkhanum73@gmail.com" 
      style={{
        color: 'inherit', // Inherit color from the parent span
        textDecoration: 'none', // Remove underline
      }}
    >
      safiyahkhanum73@gmail.com
    </a>
  </span>
</Box>


          <Typography variant="body2" sx={{ fontSize: '0.9rem', marginTop: 2 }}>
            © 2024 - Safiya Khanum | Luxury Womenswear<br></br>
            
          </Typography>
        </Box>

        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderLeft: `1px solid ${theme.palette.divider}`,
            paddingLeft: 4,
            paddingRight: 4,
            '& > h6': {
              marginBottom: 2,
              fontWeight: 'bold',
            },
            '& > a': {
              margin: 1,
              textDecoration: 'none',
              color: theme.palette.text.primary,
              '&:hover': {
                color: theme.palette.primary.main,
              },
            },
          }}
        >
          <Typography variant="h6">CUSTOMER HUB</Typography>
          <RouterLink to="/" style={{ margin: '8px', textDecoration: 'none', color: theme.palette.text.primary }}>
            HOME
          </RouterLink>
          <RouterLink to="/privacy" style={{ margin: '8px', textDecoration: 'none', color: theme.palette.text.primary }}>
            PRIVACY
          </RouterLink>
          <RouterLink to="/terms" style={{ margin: '8px', textDecoration: 'none', color: theme.palette.text.primary }}>
            TERMS OF USE
          </RouterLink>
        </Box>

        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            '& > h6': {
              marginBottom: 2,
              fontWeight: 'bold',
            },
            '& > p': {
              marginBottom: 2,
              fontSize: '0.9rem',
            },
            '& > .footer-input': {
              marginBottom: 2,
              width: '100%',
            },
            '& > .footer-button': {
              backgroundColor: theme.palette.primary.main,
              color: 'white',
              '&:hover': {
                backgroundColor: theme.palette.primary.dark,
              },
            },
          }}
        >
          <Typography variant="h6">Newsletter</Typography>
          <Typography variant="body2">
            Subscribe to receive updates, access to exclusive deals, and more.
          </Typography>
          <TextField
            className="footer-input"
            variant="outlined"
            placeholder="E-mail"
            size="small"
          />
          <Button
            className="footer-button"
            variant="contained"
          >
            Subscribe
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
