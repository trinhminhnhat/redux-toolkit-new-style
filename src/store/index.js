import { configureStore } from '@reduxjs/toolkit';

import todoReducer from './reducers/todoReducer';

// Store
const store = configureStore({
    reducer: {
        todoReducerZ: todoReducer,
    },
});

export default store;
