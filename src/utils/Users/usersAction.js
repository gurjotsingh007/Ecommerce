import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const login = createAsyncThunk('login', async (email, password) => {
    console.log("this is password"+ password);
    try {
        const config = { headers: { "Content-Type": "application/json" } };

        const { data } = await axios.post(
            `/api/v1/login`, { email, password }, config
        );
        return data.users;
    } catch (error) {
        return error.message;
    }
});
