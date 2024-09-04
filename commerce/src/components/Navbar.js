import React, { useState, useEffect, useContext } from "react";
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
  styled,
  Switch,
  FormControlLabel,
} from "@mui/material";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  Menu as MenuIcon,
  Close,
} from "@mui/icons-material";
import { myGlobalContext } from "../utils/theme";

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

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            "#fff"
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor: "#aab4be",
          ...theme.applyStyles("dark", {
            backgroundColor: "#8796A5",
          }),
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: "#001e3c",
      width: 32,
      height: 32,
      "&::before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
      ...theme.applyStyles("dark", {
        backgroundColor: "#003892",
      }),
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: "#aab4be",
      borderRadius: 20 / 2,
      ...theme.applyStyles("dark", {
        backgroundColor: "#8796A5",
      }),
    },
  }));

  const values = useContext(myGlobalContext);

  if (!values) return <>loading</>;

  return (
    <AppBar
      position="fixed"
      sx={{
        transition: "background-color 0.3s, color 0.3s",

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
            sx={values.darkMode ? { color: "white" } : { color: "black" }}
            onClick={() => navigate("/search")}
          >
            <Search />
          </IconButton>
          <IconButton
            sx={values.darkMode ? { color: "white" } : { color: "black" }}
            onClick={() => navigate("/cart")}
          >
            <Badge badgeContent={cartItems} color="error">
              <ShoppingCart />
            </Badge>
          </IconButton>

          <FormControlLabel
            control={
              <MaterialUISwitch
                onClick={values.toggleThemeFn}
                sx={{ m: 1 }}
                checked={values.darkMode}
                defaultValue={false}
              />
            }
          />

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
