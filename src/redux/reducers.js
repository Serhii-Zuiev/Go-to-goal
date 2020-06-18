import { createReducer } from "@reduxjs/toolkit";
import * as action from "./actions";


const initialState = {
succsess:null,
userData:{
token:''

}
}
;
const initialGoalState={
  goals:[],
  tasks:[]
}
export const userAuthReducer = createReducer(initialState, {
  [action.registerUser]: (state, { payload }) => {
    return { ...state, userData:{...payload,token:''} };
  },
  [action.loginUser]: (state, { payload }) => {
    return { ...state, userData: payload.user, status: payload.status };
  },
  [action.logoutUser]: (state,{payload}) => {
    return {...state,userData:payload};
  },
});
export const goalAndTaskReducer=createReducer(initialGoalState,{
  [action.createTask]:(state,{payload})=>{
    return {...state,...[state.goals,payload]}
  }

}


)