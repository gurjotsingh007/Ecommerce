import {configureStore} from '@reduxjs/toolkit';
import productSlice from './Product/productSlice';
import updatingSlice from './UpdatingValues/updatingSlice';
import usersSlice from './Users/usersSlice';
import cartSlice from './Cart/cartSlice';
import { loadStateFromLocalStorage } from "./Cart/cartActions";
import OrderSlice from './Order/OrderSlice';

const preloadedState = {
  cart: {
    cartItems: loadStateFromLocalStorage("cartItems") || [],
    shippingInfo: loadStateFromLocalStorage("shippingInfo") || {},
  },
};

const store = configureStore({
  reducer: {
    products: productSlice,
    updating: updatingSlice,
    users: usersSlice,
    cart: cartSlice,
    orders: OrderSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  preloadedState, // Pass the preloadedState here
  // Other store configuration options
});

export default store;