import { createSlice } from "@reduxjs/toolkit";

const updatingSlice = createSlice({
    name:"updating",
    initialState:{
        price:[0, 25000],
        currentPage:1,
        category:"",
        rating:0
    },
    reducers:{
        changePrice:(state, action) => {
            state.price = action.payload;
        },
        changeCurrPage:(state, action) => {
            state.currentPage = action.payload;
        },
        setProductCategory:(state, action) => {
            state.category = action.payload;
        },
        setProductRating:(state, action) => {
            state.rating = action.payload;
        }
    }
});

export const {changePrice, changeCurrPage, setProductCategory,setProductRating} = updatingSlice.actions;

export default updatingSlice.reducer;