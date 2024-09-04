import React from "react";
import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage:
          "url(https://aik.store/cdn/shop/files/Lawn_-_Eid_edit_-_Vol._3_-_website_Banner_4.jpg?v=1720445523&width=1400)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        position: "relative", // Ensure the ::after pseudo-element is positioned correctly
        width: "100%",
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          // width: { xs:300, sm: 600, md: '1366px',xl:"2366px"},
          height: "100%",
          background: "rgba(0, 0, 0, 0.5)",
          zIndex: -1, // Ensure the overlay is behind the text
        },
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem" }, // Adjust font size for different screen sizes
          fontWeight: "bold",
          zIndex: 1, // Ensure the text is above the overlay
        }}
      >
        Welcome to SafiyaKhanum
      </Typography>
    </Box>
  );
};

export default Home;
