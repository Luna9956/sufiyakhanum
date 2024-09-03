import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Box, Link as MuiLink, IconButton, Badge, Menu, MenuItem } from '@mui/material';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Search, ShoppingCart } from '@mui/icons-material';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [cartItems, setCartItems] = useState(0); // State to track number of items in the cart
  const [anchorEl, setAnchorEl] = useState(null); // State to manage dropdown menu
  const location = useLocation(); // Get current location
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Fetch cart items count from local storage or an API
    const fetchCartItems = () => {
      // For example, using local storage (replace with your logic)
      const items = JSON.parse(localStorage.getItem('cartItems')) || [];
      setCartItems(items.length);
    };

    fetchCartItems();
  }, []);

  const isHomepage = location.pathname === '/';

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (path) => {
    setAnchorEl(null);
    navigate(path);
  };

  const open = Boolean(anchorEl);

  return (
    <AppBar
      position="fixed"
      sx={{
        transition: 'background-color 0.3s, color 0.3s',
        backgroundColor: isHomepage ? (scrolled ? 'white' : 'transparent') : 'white',
        color: isHomepage ? (scrolled ? 'black' : 'white') : 'black',
        boxShadow: isHomepage && scrolled ? 4 : 'none',
        zIndex: (theme) => theme.zIndex.appBar + 1, // Ensure the navbar is above other content
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 100,
          position: 'relative',
          padding: '0 16px', // Optional padding
        }}
      >
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: '3rem',
              fontFamily: "'Serif DiHot', serif", // Updated to use Serif DiHot
              cursor: 'pointer', // Indicate that it's clickable
              color: isHomepage ? (scrolled ? 'black' : 'white') : 'black',
            }}
          >
            SafiyaKhanum
          </Typography>
        </Link>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            width: '100%',
            marginTop: 2,
          }}
        >
          <MuiLink
            component={Link}
            to="/newin"
            sx={navLinkStyle}
          >
            NEW IN
          </MuiLink>
          <MuiLink
            component={Link}
            to="/stitched"
            sx={navLinkStyle}
          >
            Stitched
          </MuiLink>
          <MuiLink
            component={Link}
            to="/unstitched"
            sx={navLinkStyle}
          >
            UNSTITCHED
          </MuiLink>
          <MuiLink
            component={Link}
            to="/bridal"
            sx={navLinkStyle}
          >
            Bridal
          </MuiLink>
          <MuiLink
            component={Link}
            to="/embroidory"
            sx={navLinkStyle}
          >
            Embroidory
          </MuiLink>
          <MuiLink
            component={Link}
            to="/sale"
            sx={navLinkStyle}
          >
            SALE
          </MuiLink>
          <MuiLink
            component={Link}
            to="/socialmedia"
            sx={navLinkStyle}
          >
           SK's Community
          </MuiLink>
        </Box>
        <Box
          sx={{
            position: 'absolute',
            right: 16,
            top: 16,
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <IconButton
            sx={{
              color: isHomepage ? (scrolled ? 'black' : 'white') : 'black',
            }}
            onClick={handleClick} // Open the dropdown menu
          >
            <Search />
          </IconButton>
          <IconButton
            sx={{
              color: isHomepage ? (scrolled ? 'black' : 'white') : 'black',
            }}
            onClick={() => navigate('/cart')} // Navigate to cart page
          >
            <Badge
              badgeContent={cartItems} // Show the number of items
              color="error"
              sx={{
                '.MuiBadge-dot': {
                  borderRadius: '50%',
                  width: 8,
                  height: 8,
                },
              }}
            >
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Box>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
        >
          <MenuItem onClick={() => handleClose('/newin')}>NEW IN</MenuItem>
          <MenuItem onClick={() => handleClose('/stitched')}>Stitched</MenuItem>
          <MenuItem onClick={() => handleClose('/unstitched')}>UNSTITCHED</MenuItem>
          <MenuItem onClick={() => handleClose('/bridal')}>Bridal</MenuItem>
          <MenuItem onClick={() => handleClose('/sale')}>SALE</MenuItem>
          <MenuItem onClick={() => handleClose('/socialmedia')}>World Of Safiya Khanum</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

// Common styles for nav links
const navLinkStyle = {
  color: 'inherit',
  fontSize: '1.1rem',
  fontWeight: 'bold',
  padding: 1,
  textDecoration: 'none',
  fontFamily: "'Serif DiHot', serif", // Updated to use Serif DiHot
  '&:hover': {
    color: 'black',
  },
};

export default Navbar;
