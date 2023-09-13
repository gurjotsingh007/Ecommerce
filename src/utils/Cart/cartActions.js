import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'
import { addToCart, removeFromCart } from './cartSlice';

export const addItemsToCart = createAsyncThunk('addItemsToCart', async (clickedProductInfo, { dispatch, getState }) => {
    const id = clickedProductInfo.product_id || clickedProductInfo.id;
    const quantity = clickedProductInfo.quantity || clickedProductInfo.newQty;
    const { data } = await axios.get(`/api/v1/product/${id}`);
    const product = {
        product: data.product._id,
        name: data.product.name,
        price: data.product.price,
        image: data.product.images[0].url,
        stock: data.product.stock,
        quantity,
    };
    dispatch(addToCart(product));

    // Access the Redux state using getState() function
    const updateCartItems = getState().cart.cartItems;

    localStorage.setItem("cartItems", JSON.stringify(updateCartItems));
});

export const loadStateFromLocalStorage = (key) => {
    try {
      const serializedData = localStorage.getItem(key);
      if (serializedData === null) {
        // Return undefined if the key is not found in localStorage
        return undefined;
      }
      return JSON.parse(serializedData);
    } catch (err) {
      console.error("Error loading state from localStorage:", err);
      return undefined; // Return undefined in case of an error
    }
  };

  export const removeItemsFromCart = createAsyncThunk('removeItemsFromCart', async(id, {dispatch, getState}) => {
    const itemToBeRemoved = getState().cart.cartItems.find((item) => item.product === id);
    
    dispatch(removeFromCart(itemToBeRemoved));

    const updateCartItems = getState().cart.cartItems;

    localStorage.setItem("cartItems", JSON.stringify(updateCartItems));
  });