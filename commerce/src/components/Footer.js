import React from 'react';
import { Box, Typography, IconButton, TextField, Button, useTheme } from '@mui/material';
import { Facebook, Instagram, Pinterest, LinkedIn, YouTube } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok } from '@fortawesome/free-brands-svg-icons'; 

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '1200px',
        margin: 'auto',
        padding: { xs: 2, sm: 4 },
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' }, // Stack vertically on mobile, row on larger screens
        backgroundColor: theme.palette.background.paper,
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', sm: 'flex-start' }, // Center on mobile, align left on larger screens
          marginBottom: { xs: 4, sm: 0 },
          textAlign: { xs: 'center', sm: 'left' },
          '& > p': {
            marginBottom: 2,
            fontSize: '0.9rem',
          },
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
          ABOUT SAFIYA KHANUM
        </Typography>
        <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
          Safiya Khanum blends traditional elegance with contemporary style. Our collections are thoughtfully designed to offer timeless fashion with a modern twist, crafted from high-quality materials.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-start' }, flexWrap: 'wrap', gap: 1 }}>
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

        <Box sx={{ marginTop: 2 }}>
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
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              safiyahkhanum73@gmail.com
            </a>
          </span>
        </Box>

        <Typography variant="body2" sx={{ fontSize: '0.9rem', marginTop: 2 }}>
          © 2024 - Safiya Khanum | Luxury Womenswear
        </Typography>
      </Box>

      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', sm: 'center', md: 'flex-start' }, // Center on mobile, center on small screens, align left on larger screens
          borderLeft: { xs: 'none', sm: `1px solid ${theme.palette.divider}` }, // Hide border on mobile
          paddingLeft: { xs: 0, sm: 4 }, // Remove padding on mobile
          paddingRight: { xs: 0, sm: 4 },
          marginBottom: { xs: 4, sm: 0 },
          textAlign: { xs: 'center', sm: 'center', md: 'left' },
          '& > h6': {
            marginBottom: 2,
            fontWeight: 'bold',
          },
          '& > a': {
            margin: '8px',
            textDecoration: 'none',
            color: theme.palette.text.primary,
          },
        }}
      >
        <Typography variant="h6">CUSTOMER HUB</Typography>
        <RouterLink to="/">HOME</RouterLink>
        <RouterLink to="/privacy">PRIVACY</RouterLink>
        <RouterLink to="/terms">TERMS OF USE</RouterLink>
      </Box>

      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', sm: 'center', md: 'flex-end' }, // Center on mobile and small screens, align right on larger screens
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
          fullWidth
        />
        <Button
          className="footer-button"
          variant="contained"
          fullWidth
        >
          Subscribe
        </Button>
      </Box>
    </Box>
  );
};

export default Footer;
