import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    error: null
};

const decorSlice = createSlice({
    name: 'decorate',
    initialState: initialState,
    reducers:{}
});

export const decorReducer = decorSlice.reducer;