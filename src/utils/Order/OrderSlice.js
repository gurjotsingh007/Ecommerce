import { createSlice } from "@reduxjs/toolkit";
import { getAllOrders, getOrderDetails } from "./OrderAction";

const orderSlice = createSlice({
    name:"orders",
    initialState:{
        order:[],
        orders:[],
        orderDetail:[],
        loading:false
    },
    reducers:{
        populateOrder:(state, action) => {
            state.loading = false;
            state.order = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getAllOrders.pending, (state) => {
            state.loading = true;
        })
        .addCase(getAllOrders.fulfilled, (state, action) => {
            state.loading = false;
            state.orders = action.payload;
        })
        .addCase(getAllOrders.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(getOrderDetails.pending, (state) => {
            state.loading = true;
        })
        .addCase(getOrderDetails.fulfilled, (state, action) => {
            state.loading = false;
            state.orderDetail = action.payload;
        })
        .addCase(getOrderDetails.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
});
export const {populateOrder} = orderSlice.actions;
export default orderSlice.reducer;