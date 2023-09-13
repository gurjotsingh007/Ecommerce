import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllOrders = createAsyncThunk("getAllOrders",async() => {
   const {data} = await axios.get("/api/v1/orders/me");
   return data.orders
});

export const getOrderDetails = createAsyncThunk("getOrderDetails",async(id) => {
    console.log("function called");
   const {data} = await axios.get(`/api/v1/order/${id}`);
   return data.order;
});