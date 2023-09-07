import { createSlice } from '@reduxjs/toolkit';
import { getProducts, getSingleProduct } from './productAction';

const productSlice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    products: [],
    loadingSingle: false,
    singleProduct: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
        state.products = [];
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getSingleProduct.pending, (state) => {
        state.loadingSingle = true;
      })
      .addCase(getSingleProduct.fulfilled, (state, action) => {
        state.loadingSingle = false;
        state.singleProduct = action.payload;
      })
      .addCase(getSingleProduct.rejected, (state, action) => {
        state.loadingSingle = false;
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
