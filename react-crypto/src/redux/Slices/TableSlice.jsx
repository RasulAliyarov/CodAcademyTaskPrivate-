import { createSlice } from "@reduxjs/toolkit";

const TableSlice = createSlice({
    name: "table",
    initialState: {
        page: 1,
        search: ""
    },
    reducers: {
        paginationPlus: (state, action) => {
            state.page += 1
        },
        paginationMinus: (state, action) => {
            state.page -= 1
            if (state.page <= 1) {
                state.page = 1
            }
        },
        search: (state, action) => {
            state.search = action.payload
        }
    }
})

export const { paginationMinus, paginationPlus, search } = TableSlice.actions
export default TableSlice