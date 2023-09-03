import {createSlice} from '@reduxjs/toolkit';
import { getProducts , getSingleProduct} from './productAction';

const productSlice = createSlice({
    name:"products",
    initialState:{
        loading:false,
        products:[],
        loadingSingle:false,
        singleProduct:null,
        error:null
    },
    reducers:{
        allProductRequest: (state) => {
            state.loading = true;
            state.products = [];
        },
        allProductSuccess: (state, action) => {
            state.loading = false;
            state.products = action.payload.products;
            state.productsCount = action.payload.productsCount;
        },
        allProductFail:(state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        clearErrors:(state)=>{
            state.error = null;
        },
        singleProductRequest:(state)=>{
            state.loadingSingle = true;
            state.singleProduct = null;
        },
        singleProductSuccess:(state, action) => {
            state.loadingSingle = false;
            state.singleProduct = action.payload.product;
        },
        singleProductFail:(state, action) => {
            state.loadingSingle = false;
            state.error = action.payload;
        }
    },
    extraReducers:{
        [getProducts.pending]:(state) => {
            state.loading = true;
        },
        [getProducts.fulfilled]:(state, action) => {
            state.loading = false;
            state.products = action.payload;
        },
        [getProducts.rejected]:(state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [getSingleProduct.pending]:(state) => {
            state.loadingSingle = true;
        },
        [getSingleProduct.fulfilled]:(state, action) => {
            state.loadingSingle = false;
            state.singleProduct = action.payload;
        },
        [getSingleProduct.rejected]:(state, action) => {
            state.loadingSingle = false;
            state.error = action.payload;
        }
    }
});

export const {
    allProductRequest,
    allProductSuccess,
    allProductFail,
    clearErrors,
    singleProductRequest,
    singleProductSuccess,
    singleProductFail

} = productSlice.actions;

export default productSlice.reducer;