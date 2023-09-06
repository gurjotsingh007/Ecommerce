import { createAsyncThunk } from '@reduxjs/toolkit';

export const getProducts = createAsyncThunk('getProducts', async (keyword = '', thunkAPI) => {
  try {
    const { getState } = thunkAPI;
    const { price, currentPage, category , rating} = getState().updating;

    let link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${rating}`;
    if(category){
      link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${rating}`;
    }
    console.log(link);
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