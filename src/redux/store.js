import { combineReducers } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { userAuthReducer } from "./reducer";
import { flagReducer } from "./reducer";
import { goalAndTasksReducer } from "./reducer";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
  userAuthReducer,
  flagReducer,
  goalAndTasksReducer,
});
export const store = configureStore({
  reducer: rootReducer,
},getDefaultMiddleware(thunk));
