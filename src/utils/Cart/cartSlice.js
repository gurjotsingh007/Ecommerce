import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    shippingInfo:{}
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      const isItemExist = state.cartItems.find((i) => i.product === item.product);

      if (isItemExist) {
        const updatedCartItems = state.cartItems.map((i) =>
          i.product === isItemExist.product ? item : i
        );
        state.cartItems = updatedCartItems;
      } else {
        state.cartItems.push(item);
      }
    },
    removeFromCart: (state, action) => {
        const itemToBeDeleted = action.payload;

        const itemsLeft = state.cartItems.filter((item) => item.product !== itemToBeDeleted.product);

        state.cartItems = itemsLeft;
    }
  }
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;