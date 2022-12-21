import {configureStore} from "@reduxjs/toolkit";

import todosReducer from "../modules/todoModule";

const store = configureStore({
  reducer: {todosReducer: todosReducer},
});

export default store;
