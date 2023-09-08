import {configureStore} from '@reduxjs/toolkit';
import productSlice from './Product/productSlice';
import updatingSlice from './UpdatingValues/updatingSlice';
import usersSlice from './Users/usersSlice';

const store = configureStore({
    reducer:{
        products: productSlice,
        updating: updatingSlice,
        users: usersSlice
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;