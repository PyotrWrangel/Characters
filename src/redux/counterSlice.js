import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        reset: (state) => {
            state.value = 0
        },
        fallenRomanEmpire: (state) => {
            state.value = 476
    },
}
});

export const { increment, decrement, reset, fallenRomanEmpire } = counterSlice.actions;

export const counterReducer = counterSlice.reducer;