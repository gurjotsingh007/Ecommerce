import { createSlice } from '@reduxjs/toolkit';
import { login, register, loadUser, logout } from './usersAction';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    loading: false,
    isAuthenticated: false,
    error: null,
    user: null,
  },
  reducers: {
    errorOccured:(state, action) => {
      state.isAuthenticated = false;
      state.loading = false;
      state.error = action.payload;
      state.user = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.isAuthenticated = false;
        state.user = null;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
        state.user = null;
      })
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.isAuthenticated = false;
        state.user = null;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
        state.user = null;
      })
      .addCase(loadUser.pending, (state) => {
        state.loading = true;
        state.isAuthenticated = false;
        state.user = null;
        state.error = null;
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loadUser.rejected, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.error = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.error = action.payload;
      });;
  },
});

export const {errorOccured} = usersSlice.actions;

export default usersSlice.reducer;
