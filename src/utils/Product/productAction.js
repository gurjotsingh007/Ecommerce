import { createAsyncThunk } from '@reduxjs/toolkit';
import { useParams } from 'react-router-dom';

export const getProducts = createAsyncThunk("getProducts", async (_, { rejectWithValue }) => {
  try {
    const response = await fetch("/api/v1/products");
    const result = await response.json();
    return result;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const getSingleProduct = createAsyncThunk("getSingleProduct", async(id, {rejectWithValue}) => {
  try {
    const response = await fetch("/api/v1/product/"+{id});
    const result = await response.json();
    return result;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
