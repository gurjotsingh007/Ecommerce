import { createSlice } from "@reduxjs/toolkit";
import { login } from "./usersAction";
const usersSlice = createSlice({
    name:'users',
    initialState:{
        loading:true,
        isAuthenticated:false,
        error:null,
        user:null
    },
    reducers:{},
    extraReducers:{
        [login.pending]:(state, action) => {
            state.loading = true;
            state.isAuthenticated = false;
            state.user = null;
        },
        [login.fulfilled]:(state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        [login.rejected]:(state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.error = action.payload;
        }
    }
});

export default usersSlice.reducer;