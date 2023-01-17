import { configureStore } from "@reduxjs/toolkit";
import { type } from "os";
import todoSlice from "./Slices/todoSlice";

export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
