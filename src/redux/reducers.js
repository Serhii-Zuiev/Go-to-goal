import { createReducer } from "@reduxjs/toolkit";
import * as action from "./actions";


const initialState = {
succsess:null,
userData:{
token:''

}
};

export const userAuthReducer = createReducer(initialState, {
  [action.registerUser]: (state, { payload }) => {
    return { ...state, userData: payload };
  },
  [action.loginUser]: (state, { payload }) => {
    return { ...state, userData: payload.user, status: payload.status };
  },
  [action.logoutUser]: (state,{payload}) => {
    return {...state,userData:payload};
  },
});
