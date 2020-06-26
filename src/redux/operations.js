import { Type } from "./types";
import { services } from "../services/services";

export const registerUser = (param) => async (dispatch) => {
  const data = await services.registerUser(param);
  if (!data) {
    dispatch({ type: Type.LOGOUT_USER, payload: {} });
  } else {
    dispatch({ type: Type.REGISTER_USER, payload: data.user });
  }
  return data;
};
export const loginUser = (param) => async (dispatch) => {
  console.log("param", param);

  const data = await services.loginUser(param);
  if (!data) {
    dispatch({ type: Type.LOGOUT_USER, payload: {} });
  } else {
    dispatch({ type: Type.LOGIN_USER, payload: data });
  }
};
export const logoutUser = (token) => async (dispatch) => {
  const data = await services.logoutUser(token);
  dispatch({ type: Type.LOGOUT_USER,payload:{token:''} });
};

export const newGoal=(token,goal)=>async(dispatch)=>{
const data=await services.CreateGoal(token,goal);
dispatch({type:Type.CREATE_GOAL,payload:data})

}
export const newTask=(token,task)=>async (dispatch)=>{
  const data=await services.CreateTask(token,task)
  dispatch({type:Type.CREATE_TASK,payload:data})
}
export const getTasks=(token)=>async(dispatch)=>{
  const data=await services.getTasks(token)
  dispatch({type:Type.GET_ALL_TASKS,payload:data})
}


export const getGoals=(token)=>async(dispatch)=>{
  const data=await services.getGoals(token)
  dispatch({type:Type.GET_ALL_GOALS,payload:data})

}
export const modifyTaskInner=(token,taskId,task)=>async(dispatch)=>{
  const data=await services.updateTask(token,taskId,task)
  dispatch({type:Type. MODIFY_TASK,payload:data})
}