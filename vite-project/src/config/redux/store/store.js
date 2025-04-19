import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../reducers/cartslice"

export const store = configureStore({
    reducer: cartReducer
})