import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Checkout from "./pages/Checkout";
import All from "./pages/All";
import Unstitched from "./pages/Unstitched";
import Stitched from "./pages/Stitched";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Bridal from "./pages/Bridal";
import NewIn from "./pages/NewIn";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsofUse";
import Sale from "./pages/Sale";
import ProductDetail from "./components/ProductDetail";
import Embroidory from "./pages/Embroidory";
import SocialMedia from "./pages/SocialMedia";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item._id === product._id);
      if (existingItem) {
        return prevItems.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        const updatedItems = [...prevItems, { ...product, quantity: 1 }];
        localStorage.setItem("cartItems", JSON.stringify(updatedItems));
        return updatedItems;
      }
    });
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<All />} />
        <Route
          path="/unstitched"
          element={<Unstitched addToCart={addToCart} />}
        />
        <Route path="/stitched" element={<Stitched addToCart={addToCart} />} />
        <Route path="/bridal" element={<Bridal addToCart={addToCart} />} />
        <Route path="/newin" element={<NewIn addToCart={addToCart} />} />
        <Route path="/sale" element={<Sale addToCart={addToCart} />} />
        <Route path="/product" element={<Product addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/product/:id"
          element={<ProductDetail addToCart={addToCart} />}
        />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/socialmedia" element={<SocialMedia />} />
        <Route
          path="/embroidory"
          element={<Embroidory addToCart={addToCart} />}
        />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
