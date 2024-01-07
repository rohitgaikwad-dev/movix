import { configureStore, combineReducers } from "@reduxjs/toolkit";
import homeSlice from "./homeSlice";

const rootReducer = combineReducers({
  home: homeSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
