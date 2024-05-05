import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: [{ id: 1, item: "Nagendra" }],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    removeTodo: (state, action) => {
      return (state = state.filter((todo) => todo.id !== action.payload));
    },
  },
});

// this is for dispatch
export const { addTodo, removeTodo } = todoSlice.actions;

// this is for configureStore
export default todoSlice.reducer;
