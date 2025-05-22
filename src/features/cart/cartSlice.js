import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [
    { id: 1, name: 'Pizze Name', unitPrice: 10, quantity: 2, totalPrice: 20 },
    { id: 2, name: 'Pizze Name 2', unitPrice: 20, quantity: 4, totalPrice: 60 },
  ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      // payload = newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // action.payload = id
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseItemQuantity(state, action) {
      // action.payload = id
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      // action.payload = id
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const { addItem, deleteItem, increaseItemQuantity, decreaseItemQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
