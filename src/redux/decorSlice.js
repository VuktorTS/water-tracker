import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const decorSlice = createSlice({
    name: 'decorate',
    initialState: initialState,
    reducers:{}
});

export const decorReducer = decorSlice.reducer;