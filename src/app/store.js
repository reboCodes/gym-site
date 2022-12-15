import { configureStore } from "@reduxjs/toolkit";
import setListReducer from '../features/set/setListSlice'

export const store = configureStore({
    reducer: {
        setList: setListReducer,
    }
})