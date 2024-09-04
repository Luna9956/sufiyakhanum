import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Link as MuiLink,
  IconButton,
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  Menu as MenuIcon,
  Close,
} from "@mui/icons-material";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [cartItems, setCartItems] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const fetchCartItems = () => {
      const items = JSON.parse(localStorage.getItem("cartItems")) || [];
      setCartItems(items.length);
    };
    fetchCartItems();
  }, []);

  const isHomepage = location.pathname === "/";

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        transition: "background-color 0.3s, color 0.3s",
        backgroundColor: isHomepage
          ? scrolled
            ? "white"
            : "transparent"
          : "white",
        color: isHomepage ? (scrolled ? "black" : "white") : "black",
        boxShadow: isHomepage && scrolled ? 4 : "none",
        zIndex: (theme) => theme.zIndex.appBar + 1,
        left: "0", // Aligns the AppBar to the left
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          minHeight: { xs: 50, sm: 60, md: 80 },
          padding: { xs: "0 0px", sm: "0 12px", md: "0 16px" },
          // width: { xs:300, sm: 600, md: '1366px',xl:"2366px"}, // Make sure it spans the full width
        }}
      >
        <IconButton
          edge="start"
          sx={{
            display: { xs: "block", md: "none" },
            color: isHomepage ? (scrolled ? "black" : "white") : "black",
          }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>

        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem" },
              fontFamily: "'Serif DiHot', serif",
              cursor: "pointer",
              color: isHomepage ? (scrolled ? "black" : "white") : "black",
              textAlign: "center", // Centered for all sizes
              flexGrow: 1, // Allow to grow and take available space
            }}
          >
            S-K
          </Typography>
        </Link>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "space-between",
            flexGrow: 1,
          }}
        >
          <MuiLink component={Link} to="/newin" sx={navLinkStyle}>
            NEW IN
          </MuiLink>
          <MuiLink component={Link} to="/stitched" sx={navLinkStyle}>
            Stitched
          </MuiLink>
          <MuiLink component={Link} to="/unstitched" sx={navLinkStyle}>
            UNSTITCHED
          </MuiLink>
          <MuiLink component={Link} to="/bridal" sx={navLinkStyle}>
            Bridal
          </MuiLink>
          <MuiLink component={Link} to="/embroidory" sx={navLinkStyle}>
            Embroidory
          </MuiLink>
          <MuiLink component={Link} to="/sale" sx={navLinkStyle}>
            SALE
          </MuiLink>
          <MuiLink component={Link} to="/socialmedia" sx={navLinkStyle}>
            SK's Community
          </MuiLink>
        </Box>

        <Box
          sx={{
            display: { xs: "flex", md: "flex" },
            alignItems: "center",
            gap: 1,
          }}
        >
          <IconButton
            sx={{
              color: isHomepage ? (scrolled ? "black" : "white") : "black",
            }}
            onClick={() => navigate("/search")}
          >
            <Search />
          </IconButton>
          <IconButton
            sx={{
              color: isHomepage ? (scrolled ? "black" : "white") : "black",
            }}
            onClick={() => navigate("/cart")}
          >
            <Badge badgeContent={cartItems} color="error">
              <ShoppingCart />
            </Badge>
          </IconButton>

          {/* <IconButton
            sx={{
              display: { xs: "none", md: "block" },
              color: isHomepage ? (scrolled ? "black" : "white") : "black",
            }}
            onClick={() => navigate("/cart")}
          >
            <Badge badgeContent={cartItems} color="error">
              <ShoppingCart />
            </Badge>
          </IconButton> */}
        </Box>

        {/* Drawer for small screens */}
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <IconButton onClick={toggleDrawer(false)}>
              <Close />
            </IconButton>
            <List>
              <ListItem button component={Link} to="/newin">
                <ListItemText primary="NEW IN" />
              </ListItem>
              <ListItem button component={Link} to="/stitched">
                <ListItemText primary="Stitched" />
              </ListItem>
              <ListItem button component={Link} to="/unstitched">
                <ListItemText primary="UNSTITCHED" />
              </ListItem>
              <ListItem button component={Link} to="/bridal">
                <ListItemText primary="Bridal" />
              </ListItem>
              <ListItem button component={Link} to="/embroidory">
                <ListItemText primary="Embroidory" />
              </ListItem>
              <ListItem button component={Link} to="/sale">
                <ListItemText primary="SALE" />
              </ListItem>
              <ListItem button component={Link} to="/socialmedia">
                <ListItemText primary="SK's Community" />
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

// Common styles for nav links
const navLinkStyle = {
  color: "inherit",
  fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
  fontWeight: "bold",
  padding: 1,
  textDecoration: "none",
  fontFamily: "'Serif DiHot', serif",
  "&:hover": {
    color: "black",
  },
};

export default Navbar;
