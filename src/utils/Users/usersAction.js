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

export const logout = createAsyncThunk('logout', async () => {
    try {
        let response = await fetch('/api/v1/logout');
        if (!response.ok) {
            response = null;
        }

        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
});

export const updateProfile = createAsyncThunk('updateProfile', async (formData) => {
    try {
      const dataToSend = {
          name: formData.get("name"),
          email: formData.get("email"),
          avatar: formData.get("avatar"),
        };
    
        // Send the data as JSON
        const config = {
          headers: { "Content-Type": "application/json" },
        };
    
        const url = '/api/v1/me/update';
        const response = await axios.put(url, JSON.stringify(dataToSend), config);
        return response;
    } catch (error) {
        throw error;
    }
  });

  export const updatePassword = createAsyncThunk('updatePassword', async (formData) => {
    try {
      const dataToSend = {
            oldPassword: formData.get("oldPassword"),
            newPassword: formData.get("newPassword"),
            confirmPassword: formData.get("confirmPassword"),
        };
    
        // Send the data as JSON
        const config = {
          headers: { "Content-Type": "application/json" },
        };
    
        const url = '/api/v1/password/update';
        const response = await axios.put(url, JSON.stringify(dataToSend), config);
        return response;
    } catch (error) {
        throw error;
    }
  });

  export const forgotPassword = createAsyncThunk('forgotPassword', async (myForm) => {
    const email = myForm.get("email");
    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
    };
    
    let response = await fetch('/api/v1/password/forgot', config);
    // if (!response.ok) {
    //     response = null;
    // }

    const message = await response.json();
    return message;

});

export const resetPassword = createAsyncThunk('resetPassword', async (myForm) => {

    const password = myForm.get("password");
    const confirmPassword = myForm.get("confirmPassword");
    const token = myForm.get("token")


    const newPassword = new FormData();

    newPassword.set("password", password);
    newPassword.set("confirmPassword", confirmPassword);
    const config = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password, confirmPassword }),
    };
    
    const response = await fetch(`/api/v1/password/reset/${token}`, config);
    // if (!response.ok) {
    //     response = null;
    // }

    const message = await response.json();
    return message.success;

});

// export const clearErrors = () => async() => {
//     dispatchEvent.clearErrors
// }