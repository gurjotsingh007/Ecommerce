import { createSlice } from "@reduxjs/toolkit";
import { deleteOrder, getAllAdminOrders, getAllOrders, getOrderDetails, updateOrder } from "./OrderAction";

const orderSlice = createSlice({
    name:"orders",
    initialState:{
        order:[],
        orders:[],
        orderDetail:[],
        isUpdated:false,
        isDeleted:false,
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
        .addCase(getAllAdminOrders.pending, (state) => {
            state.loading = true;
        })
        .addCase(getAllAdminOrders.fulfilled, (state, action) => {
            state.loading = false;
            state.orderDetail = action.payload;
        })
        .addCase(getAllAdminOrders.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(updateOrder.pending, (state) => {
            state.loading = true;
            state.isUpdated = false;
        })
        .addCase(updateOrder.fulfilled, (state, action) => {
            state.loading = false;
            state.isUpdated = action.payload;
        })
        .addCase(updateOrder.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(deleteOrder.pending, (state) => {
            state.loading = true;
            state.isDeleted = false;
        })
        .addCase(deleteOrder.fulfilled, (state, action) => {
            state.loading = false;
            state.isDeleted = action.payload;
        })
        .addCase(deleteOrder.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
});
export const {populateOrder} = orderSlice.actions;
export default orderSlice.reducer;