import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
export const getProducts = createAsyncThunk('getProducts', async (keyword = '', thunkAPI) => {
  try {
    const { getState } = thunkAPI;
    const { price, currentPage, category , rating} = getState().updating;

    let link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${rating}`;
    if(category){
      link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${rating}`;
    }
    const response = await fetch(link);
    const result = await response.json();
    return result;
  } catch (error) {
    return error.message;
  }
});
export const getSingleProduct = createAsyncThunk("getSingleProduct", async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/v1/product/${id}`);
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  });

  export const newReview = createAsyncThunk("newReview", async (reviewData, { rejectWithValue }) => {
    try {
      const config = {
        headers:{"Content-Type" : "application/json"}
      };
      const {response} = await axios.put(`/api/v1/review`, reviewData, config);
      return response.success;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  });

  export const getAdminProducts = createAsyncThunk('getAdminProducts', async () => {
    try {
      const response = await fetch('/api/v1/admin/products');
      const result = await response.json();
      return result.products;
    } catch (error) {
      return error.message;
    }
  });

  export const createProduct = createAsyncThunk("createProduct", async (productData, { rejectWithValue }) => {
    try {
      const config = {
        headers:{"Content-Type" : "application/json"}
      };
      const {response} = await axios.post(`/api/v1/admin/product/new`, productData, config);
      return response.success;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  });
  
  export const deleteProduct = createAsyncThunk("deleteProduct", async (id, { rejectWithValue }) => {
    try {
      const {response} = await axios.delete(`/api/v1/admin/product/${id}`);
      return response.success;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  });

  export const updateProduct = createAsyncThunk("updateProduct", async (data, { rejectWithValue }) => {
    const id = data.productId;
    const productData = data.myForm;
    console.log(productData.get("name"));
    try {
      const config = {
        headers:{"Content-Type" : "application/json"}
      };
      const {response} = await axios.put(`/api/v1/admin/product/${id}`, productData, config);
      return response.success;
    } catch (error) {
      console.log(error);
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