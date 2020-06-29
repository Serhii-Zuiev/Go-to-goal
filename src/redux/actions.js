import { createAction } from '@reduxjs/toolkit';
import { Type } from "./types";
export const registerUser = createAction(`${Type.REGISTER_USER}`);
export const  loginUser = createAction(`${Type.LOGIN_USER}`);
export const logoutUser = createAction(`${Type.LOGOUT_USER}`);
export const createTask = createAction(`${Type.CREATE_TASK}`);
export const deleteTask = createAction(`${Type.DELETE_TASK}`);
export const createGoal = createAction(`${Type.CREATE_GOAL}`);
export const updateGoal = createAction(`${Type.UPDATE_GOAL}`);
export const deleteGoal = createAction(`${Type.DELETE_GOAL}`);
export const getAllTasks=createAction(`${Type.GET_ALL_TASKS}`)
export const getAllGoals=createAction(`${Type.GET_ALL_GOALS}`)
export const isLoading=createAction(`${Type.LOADING_FLAG}`)
export const isAlert=createAction(`${Type.ALERT_FLAG}`)
export const modifyTask=createAction(`${Type.MODIFY_TASK}`)
export const doneGoal=createAction(`${Type.IS_DONE_GOAL}`)
