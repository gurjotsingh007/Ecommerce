import {createSlice} from '@reduxjs/toolkit';

const productSlice = createSlice({
    name:"product",
    initialState:{
        loading:false,
        products:[]
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
    },
});

export const {
    allProductRequest,
    allProductSuccess,
    allProductFail,
    clearErrors
} = productSlice.actions;

export default productSlice.reducer;