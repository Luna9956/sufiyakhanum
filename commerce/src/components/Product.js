// src/Product.js
import React from 'react';
import Unstitched from '../pages/Unstitched';

const Product = ({ addToCart }) => {
  return (
    <div>
      <h1>Product Page</h1>
      <Unstitched addToCart={addToCart} />
    </div>
  );
};

export default Product;
