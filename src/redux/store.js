import { combineReducers } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { userAuthReducer } from "./reducers";
// import { flagReducer } from "./reducer";
import {goalAndTaskReducer } from "./reducers";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
  userAuthReducer,
//   flagReducer,
goalAndTaskReducer
});
export const store = configureStore({
  reducer: rootReducer,
},getDefaultMiddleware(thunk));
