import { createSlice } from "@reduxjs/toolkit";

const FavouriteSlice = createSlice({
    name: "favourite",
    initialState: {
        count: 0,
        favourites: [],
    },
    reducers: {
        addFavourite: (state, action) => {
            state.count += 1
            state.favourites.push(action.payload)
        },
        clearFavourite: (state, action) => {
            state.favourites = []
            state.count = 0
        }
    }
})

export const { addFavourite, clearFavourite } = FavouriteSlice.actions
export default FavouriteSlice