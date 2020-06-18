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
export const loginUser = (param) => async (dispatch, getState) => {
  console.log("param", param);

  const data = await services.loginUser(param);
  if (!data) {
    dispatch({ type: Type.LOGOUT_USER, payload: {} });
  } else {
    dispatch({ type: Type.LOGIN_USER, payload: data });
  }
};
export const logoutUser = (token) => async (dispatch, getState) => {
  const data = await services.logoutUser(token);
  dispatch({ type: Type.LOGOUT_USER,payload:{token:''} });
};
