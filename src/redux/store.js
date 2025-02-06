import { configureStore } from "@reduxjs/toolkit";
import {counterReducer} from "./counterSlice";
import { listReducer } from "./listSlice";

export default configureStore({
    reducer: {
        counter: counterReducer,
        list: listReducer,
    },
});