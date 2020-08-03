import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



export const globalSlice: any = createSlice({
    name: "global",
    initialState: {
        isLoggedIn: true
    },
    reducers: {
        login: state => {
            state.isLoggedIn = true;
        },
        logout: state => {
            state.isLoggedIn = false;
        },
    },
});

export const { login, logout } = globalSlice.actions;

export default globalSlice.reducer;