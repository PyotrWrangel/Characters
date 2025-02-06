import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
    name: "list",
    initialState: [],
});

export const { add, toggle, remove } = listSlice.actions;

export const listReducer = listSlice.reducer;