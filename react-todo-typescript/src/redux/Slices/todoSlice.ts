
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import ToDo from '../../pages/ToDo'


const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: [
            {
                id: "1",
                value: "Learn JavaScript"
            },
            {
                id: "2",
                value: "Learn React"
            },
            {
                id: "3",
                value: "Have a life!"
            },
        ],
        completed: [{}]
    },
    reducers: {
        writeTodo: (state, action: PayloadAction<{ id: string, value: string }>) => {
            state.todos.push(action.payload)
        },
        completedTodo: (state, action: PayloadAction<string>) => {
            state.completed.push(action.payload)
            const id = action.payload

            const target = state.todos.find((item) => item.id === id)
            let index
            if (target) {
                index = state.todos.indexOf(target)
            }

            // if (index) {
            //     state.todos.splice(index, 1)
            // }

        },
        deleteTodo: (state, action: PayloadAction<string>) => {
            const id = action.payload
            const target = state.todos.find((item) => item.id === id)
            let index
            if (target) {
                index = state.todos.indexOf(target)
            }
            if (index) {
                state.todos.splice(index, 1)
            }
        },
        clearCompleted: (state, action: PayloadAction<string>) => {
            state.completed = []
            console.log("message")
        }
    }
})

export const { writeTodo, completedTodo, deleteTodo, clearCompleted } = todoSlice.actions
export default todoSlice