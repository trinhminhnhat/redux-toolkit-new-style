import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todo-list',
    initialState: {
        todos: [
            {
                id: 1,
                title: 'Work 1',
                completed: false,
            },
            {
                id: 2,
                title: 'Work 2',
                completed: false,
            },
            {
                id: 3,
                title: 'Work 3',
                completed: false,
            },
        ],
    },
});

// Reducer use to change state or get state
const todoReducer = todoSlice.reducer;

// Selector: use to get state
export const todoSelector = (state) => state.todoReducerZ.todos;

export default todoReducer
