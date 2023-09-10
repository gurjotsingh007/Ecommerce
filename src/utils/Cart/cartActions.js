import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'
import { addToCart } from './cartSlice';

export const addItemsToCart = createAsyncThunk('addItemsToCart', async (clickedProductInfo, { dispatch, getState }) => {
    const id = clickedProductInfo.product_id;
    const quantity = clickedProductInfo.quantity;
    console.log("1");
    console.log("2");
    const { data } = await axios.get(`/api/v1/product/${id}`);
    if (!data) {
        console.log(data);
    }
    console.log("3");
    console.log("Data is: " + data);
    const product = {
        product: data.product._id,
        name: data.product.name,
        price: data.product.price,
        image: data.product.images[0].url,
        stock: data.product.Stock,
        quantity,
    };
    console.log("4");
    console.log(product);
    dispatch(addToCart(product));
    console.log("5");

    // Access the Redux state using getState() function
    const updateCartItems = getState().cart.cartItems;
    console.log("updateCartItems: " + updateCartItems);
    console.log("6");

    localStorage.setItem("cartItems", JSON.stringify(updateCartItems));
    console.log("7");
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