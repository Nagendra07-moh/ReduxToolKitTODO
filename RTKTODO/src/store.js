import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../src/todoSlice";
export default configureStore({
  reducer: {
    todos: todoReducer,
  },
});
