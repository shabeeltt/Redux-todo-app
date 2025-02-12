import { todoReducer } from "./reducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  devTools: false,
});

export default store;
