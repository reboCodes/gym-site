import { configureStore } from "@reduxjs/toolkit";
import exerciseReducer from '../slices/exerciseSlice'

export const store = configureStore({
    reducer: {
        exercise: exerciseReducer,
    }
})