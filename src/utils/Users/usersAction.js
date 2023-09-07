import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
export const login = createAsyncThunk('login', async ({ email, password }) => {
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        };
        
        let response = await fetch('/api/v1/login', config);
        if (!response.ok) {
            response = null;
        }

        const data = await response.json();
        ;
        return data;
    
});

export const register = createAsyncThunk('register', async (formData) => {
  try {
    const dataToSend = {
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
        avatar: formData.get("avatar"),
      };
  
      // Send the data as JSON
      const config = {
        headers: { "Content-Type": "application/json" },
      };
  
      const url = '/api/v1/register';
      const response = await axios.post(url, JSON.stringify(dataToSend), config);
      return response;
  } catch (error) {
      throw error;
  }
});

export const loadUser = createAsyncThunk('loadUser', async (_, { rejectWithValue }) => {
    try {
        let response = await fetch('/api/v1/me');
        if (!response.ok) {
            response = null;
        }

        const data = await response.json();
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const logout = createAsyncThunk('logout', async (_, { rejectWithValue }) => {
    try {
        let response = await fetch('/api/v1/logout');
        if (!response.ok) {
            response = null;
        }

        const data = await response.json();
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

// export const clearErrors = () => async() => {
//     dispatchEvent.clearErrors
// }