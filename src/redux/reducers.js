import { createReducer } from "@reduxjs/toolkit";
import * as action from "./actions";
const initialState = {
 
};

export const userAuthReducer = createReducer(initialState, {
    [action.registerUser]: (state, { payload }) => {
      return { ...state, userData: payload };
    },


})