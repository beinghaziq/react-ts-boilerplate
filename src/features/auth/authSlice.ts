// src/features/auth/authSlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  user: null | { id: string; name: string; email: string };
  token: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    clearCredentials: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setCredentials, clearCredentials } = authSlice.actions;
export default authSlice.reducer;
