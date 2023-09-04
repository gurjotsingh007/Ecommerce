import {createSlice} from '@reduxjs/toolkit';
import { getProducts, getSingleProduct } from './productAction';
const productSlice = createSlice({
    name:"products",
    initialState:{
        loading:false,
        products:[],
        loadingSingle:false,
        singleProduct:[],
        error:null
    },
    reducers:{

    },
    extraReducers:{
        [getProducts.pending]:(state, action) => {
            state.loading = true;
            state.products = [];
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

// export const {
//     allProductRequest,
//     allProductSuccess,
//     allProductFail,
//     clearErrors,
//     singleProductRequest,
//     singleProductSuccess,
//     singleProductFail

// } = productSlice.actions;

export default productSlice.reducer;