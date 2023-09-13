import { createSlice } from '@reduxjs/toolkit';
import { createProduct, deleteProduct, getAdminProducts, getProducts, getSingleProduct, newReview, updateProduct } from './productAction';

const productSlice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    products: [],
    loadingSingle: false,
    singleProduct: [],
    review:[],
    adminProducts:[],
    newProductAdmin:false,
    productDetails:[],
    error: null,
    reviewError:null
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
        state.error = "";
      })
      .addCase(getSingleProduct.fulfilled, (state, action) => {
        state.loadingSingle = false;
        state.singleProduct = action.payload;
      })
      .addCase(getSingleProduct.rejected, (state, action) => {
        state.loadingSingle = false;
        state.error = action.payload;
      })
      .addCase(newReview.pending, (state) => {
        state.reviewError = null;
      })
      .addCase(newReview.fulfilled, (state, action) => {
        state.review = action.payload;
      })
      .addCase(newReview.rejected, (state, action) => {
        state.reviewError = action.payload;
      })
      .addCase(getAdminProducts.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(getAdminProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.adminProducts = action.payload;
      })
      .addCase(getAdminProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createProduct.pending, (state) => {
        state.error = null;
        state.loading = true;
        state.newProductAdmin = false;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.newProductAdmin = action.payload;
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteProduct.pending, (state) => {
        state.error = null;
        state.loading = true;
        state.newProductAdmin = false;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.newProductAdmin = action.payload;
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateProduct.pending, (state) => {
        state.error = null;
        state.loading = true;
        state.productDetails = false;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.productDetails = action.payload;
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
