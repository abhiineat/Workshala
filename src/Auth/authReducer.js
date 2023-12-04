import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const cookie = document.cookie
const initialState = {
    isAuthenticated: cookie==""?false:true,
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
const persistConfig = {
    key: "root",
    storage: storage,
    whitelist: ["auth"], // only "auth" will be persisted
  };


const persistedReducer = persistReducer(persistConfig, authSlice.reducer);

export const { login, logout } = authSlice.actions;

export default persistedReducer;