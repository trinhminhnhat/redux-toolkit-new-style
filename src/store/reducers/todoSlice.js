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
    reducers: {
        // method 1
        addTodo: (state, action) => {
            console.log('payload: ', action);
            state.todos.unshift(action.payload);
        },
        // recommend: method 2
        addTodo2: {
            reducer(state, action) {
                state.todos.unshift(action.payload);
            },
            prepare(data) {
                return {
                    payload: { ...data },
                };
            },
        },
        markComplete: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    todo.completed = !todo.completed;
                }

                return todo;
            });
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
    },
});

// Reducer use to change state or get state
const todoReducer = todoSlice.reducer;

// Selector: use to get state
export const todoSelector = (state) => state.todoReducerZ.todos;

// Actions
export const { addTodo, addTodo2, markComplete, deleteTodo } = todoSlice.actions;

export default todoReducer;
