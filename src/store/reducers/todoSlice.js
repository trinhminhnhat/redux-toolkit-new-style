import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Reducer Thunk
export const getTodos = createAsyncThunk('todo-list/todosFetched', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=3');
    return response.data;
});

// name: 'todo-list' in todoSlice == todo-list 👇 unique
export const addTodo = createAsyncThunk('todo-list/addTodo', async (newTodo) => {
    await axios.post('https://jsonplaceholder.typicode.com/todos', newTodo);

    return newTodo;
});

export const deleteTodo = createAsyncThunk('todo-list/deleteTodo', async (id) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);

    return id;
});

const todoSlice = createSlice({
    name: 'todo-list',
    initialState: {
        todos: [],
    },
    reducers: {
        // method 1
        // addTodo: (state, action) => {
        //     console.log('payload: ', action);
        //     state.todos.unshift(action.payload);
        // },
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
        // deleteTodo: (state, action) => {
        //     state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        // },
        // todosFetched(state, action) {
        //     state.allTodos = action.payload;
        // },
    },
    extraReducers: {
        // Get all todos
        [getTodos.pending]: (state, action) => {
            console.log('Fetching todos from backend...');
        },
        [getTodos.fulfilled]: (state, action) => {
            console.log('Done');
            state.todos = action.payload;
        },
        [getTodos.rejected]: (state, action) => {
            console.log('Failed to get todos!!!');
        },

        // Add todo
        [addTodo.fulfilled]: (state, action) => {
            state.todos.unshift(action.payload);
        },

        // Delete todo
        [deleteTodo.fulfilled]: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
    },
});

// Async action creator, action and reducer dispatch

// export const getTodos = () => async (dispatch) => {
//     try {
//         const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=3');
//         dispatch(todosFetched(response.data));
//     } catch (error) {
//         console.log(error);
//     }
// };

// Reducer use to change state or get state
const todoReducer = todoSlice.reducer;

// Selector: use to get state
export const todoSelector = (state) => state.todoReducerZ.todos;

// Actions
export const {
    // addTodo,
    // addTodo2,
    markComplete,
    // deleteTodo,
    // todosFetched
} = todoSlice.actions;

export default todoReducer;
