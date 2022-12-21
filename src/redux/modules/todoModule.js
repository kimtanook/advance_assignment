// src/redux/modules/todosSlice.js

import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todos: [],
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
export const updateTodo = createAsyncThunk(
  "updateTodo",
  async ({todoId, title, body}) => {
    await axios.patch(`http://localhost:3001/todos/${todoId}`, {
      title: title,
      body: body,
    });
    return {todoId, title, body};
  }
);

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
    builder.addCase(updateTodo.fulfilled, (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.todoId) {
          return {
            ...todo,
            title: action.payload.title,
            body: action.payload.body,
          };
        } else {
          return todo;
        }
      });
      state.status = "complete";
    });
  },
});

export default todosSlice.reducer;
