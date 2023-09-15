import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllOrders = createAsyncThunk("getAllOrders",async() => {
   const {data} = await axios.get("/api/v1/orders/me");
   return data.orders
});

export const getOrderDetails = createAsyncThunk("getOrderDetails",async(id) => {
   const {data} = await axios.get(`/api/v1/order/${id}`);
   return data.order;
});

export const getAllAdminOrders = createAsyncThunk("getAllAdminOrders",async(id) => {
   console.log("getALlOrders");
  const {data} = await axios.get("/api/v1/admin/orders");
  return data.orders;
});

export const updateOrder = createAsyncThunk("updateOrder",async(data) => {
   const id = data.id;
   const order = data.myForm;
   console.log(id, order);
   const config = {
      headers: {
         "Content-Type": "application/json"
      }
   };
  const {response} = await axios.put(`/api/v1/admin/order/${id}`, order, config);
  return response.success;
});

export const deleteOrder = createAsyncThunk("deleteOrder",async(id) => {
  const {data} = await axios.delete(`/api/v1/admin/order/${id}`);
  return data.success;
});