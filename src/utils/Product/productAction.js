import { createAsyncThunk } from '@reduxjs/toolkit';

export const getProducts = createAsyncThunk("products/getProducts", async (_, { rejectWithValue }) => {
  try {
    const response = await fetch("/api/v1/products");
    const result = await response.json();
    return result;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
export const getSingleProduct = createAsyncThunk("getSingleProduct", async (id, { rejectWithValue }) => {
    try {
      console.log("this is id in action "+id);
      const response = await fetch(`/api/v1/product/${id}`);
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  });
  

// allProductRequest: (state) => {
//   state.loading = true;
//   state.products = [];
// },
// allProductSuccess: (state, action) => {
//   state.loading = false;
//   state.products = action.payload.products;
//   state.productsCount = action.payload.productsCount;
// },
// allProductFail:(state, action) => {
//   state.loading = false;
//   state.error = action.payload;
// },
// clearErrors:(state)=>{
//   state.error = null;
// },
// singleProductRequest:(state)=>{
//   state.loadingSingle = true;
//   state.singleProduct = null;
// },
// singleProductSuccess:(state, action) => {
//   state.loadingSingle = false;
//   state.singleProduct = action.payload.product;
// },
// singleProductFail:(state, action) => {
//   state.loadingSingle = false;
//   state.error = action.payload;
// }