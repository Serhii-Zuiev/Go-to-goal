import {Type} from './types'
import {services} from '../services/services'


export const registerUser = (param) => async (dispatch, getState) => {

    // console.log("param REGISTR", param);
    const data = await services.registerUser(param);
    console.log('dataaaaaaaaa', data.user)
    if (!data) {
      dispatch({ type: Type.LOGOUT_USER, payload: {} });
    } else {
   
      
      dispatch({ type: Type.REGISTER_USER, payload: data.user });
    }
    return data
  };
  export const loginUser = (param) => async (dispatch, getState) => {
    // console.log("param LOGIN", param);
    console.log('param', param)
  
    const data = await services.loginUser(param);
    console.log('dataOPERATIONLOGIN', data)
    if (!data) {
      dispatch({ type: Type.LOGOUT_USER, payload: {} });
    } else {
      // console.log("data", data);
  
      dispatch({ type: Type.LOGIN_USER , payload: data });
    }
  };