import { createSlice } from "@reduxjs/toolkit";
const cookie = document.cookie
const initialState = {
    isAuthenticated: localStorage.getItem('login')
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state) => {
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.isAuthenticated = false;
        },
    },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;