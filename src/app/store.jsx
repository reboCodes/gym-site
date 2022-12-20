import { configureStore } from "@reduxjs/toolkit";
import workoutReducer from '../features/workout/workoutSlice'

export const store = configureStore({
    reducer: {
        workout: workoutReducer,
    }
})