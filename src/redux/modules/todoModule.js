// src/redux/modules/todosSlice.js

import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todos: [],
  isLoading: false,
  error: null,
};

export const getTodos = createAsyncThunk("getTodos", async () => {
  const data = await axios.get("http://localhost:3001/todos");
  return data.data;
});
export const addTodo = createAsyncThunk("addTodo", async (newTodo) => {
  const data = await axios.post("http://localhost:3001/todos", newTodo);
  return data.data;
});
export const deleteTodo = createAsyncThunk("deleteTodo", async (todoId) => {
  await axios.delete(`http://localhost:3001/todos/${todoId}`);
  return todoId;
});

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
      state.status = "complete";
    });
    builder.addCase(addTodo.fulfilled, (state, action) => {
      state.todos = [...state.todos, action.payload];
      state.status = "complete";
    });
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      state.status = "complete";
    });
  },
});

export default todosSlice.reducer;
