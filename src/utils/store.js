import {configureStore} from '@reduxjs/toolkit';
import productSlice from './Product/productSlice';

const store = configureStore({
    reducer:{
        products: productSlice,
    },
});

export default store;