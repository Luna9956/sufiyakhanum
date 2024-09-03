// src/features/cart/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    updateCart(state, action) {
      const { id, change } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        item.quantity = Math.max(item.quantity + change, 1); // Ensure quantity is at least 1
      }
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { updateCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
