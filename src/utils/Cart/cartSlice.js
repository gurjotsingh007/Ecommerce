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
    }
  }
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: { cartItems: [], shippingInfo: {} },
//   reducers: {
//     addToCart: (state, action) => {
//       const item = action.payload;
//       const isItemExist = state.cartItems.find((i) => i.product === item.product);

//       if (isItemExist) {
//         const updatedCartItems = state.cartItems.map((i) =>
//           i.product === isItemExist.product ? item : i
//         );
//         state.cartItems = updatedCartItems;
//       } else {
//         state.cartItems.push(item);
//       }
//     },
//     removeCartItem: (state, action) => {
//       state.cartItems = state.cartItems.filter((i) => i.product !== action.payload);
//     },
//     saveShippingInfo: (state, action) => {
//       state.shippingInfo = action.payload;
//     },
//   },
// });

// export const { addToCart, removeCartItem, saveShippingInfo } = cartSlice.actions;
// export default cartSlice.reducer;
