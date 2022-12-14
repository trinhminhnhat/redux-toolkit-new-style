import { configureStore } from '@reduxjs/toolkit';

import todoReducer from './reducers/todoSlice';

// Store
const store = configureStore({
    reducer: {
        todoReducerZ: todoReducer,
    },
});

export default store;
