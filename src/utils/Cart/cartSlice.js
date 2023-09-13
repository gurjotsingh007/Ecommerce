import { createSlice } from "@reduxjs/toolkit";
import { saveShippingInfo } from "./cartActions";

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
    },
    shippingItem: (state, action) => {
      const data = action.payload;

      state.shippingInfo = action.payload

      localStorage.setItem("shippingInfo", JSON.stringify(data));
    }
  }
});

export const { addToCart, removeFromCart, shippingItem } = cartSlice.actions;

export default cartSlice.reducer;