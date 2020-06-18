import { createReducer } from "@reduxjs/toolkit";
import * as action from "./actions";
import  * as operations from './operations'

const initialState = {
    name:'hello'
 
};

export const userAuthReducer = createReducer(initialState, {
    
    [action.registerUser]: (state, { payload }) => {
      return { ...state, userData: payload };
    },
    [action.loginUser]: (state, { payload }) => {
        console.log('payload', payload)
      return { ...state, userData: payload.user,status:payload.status };
    },


})