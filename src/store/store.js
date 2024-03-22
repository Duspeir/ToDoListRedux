import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../reducer/TodoSlice'
export default configureStore({
    reducer: {
        todos: todoReducer
    }
});