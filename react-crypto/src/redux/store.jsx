import { configureStore } from "@reduxjs/toolkit";
import FavouriteSlice from "./Slices/FavouriteSlice"
import TableSlice from "./Slices/TableSlice";

export const store = configureStore({
    reducer: {
        favourite: FavouriteSlice.reducer,
        table: TableSlice.reducer
    }
})