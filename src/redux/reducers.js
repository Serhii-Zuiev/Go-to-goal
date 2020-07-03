import { createReducer } from "@reduxjs/toolkit";
import * as action from "./actions";

const initialState = {
  succsess: null,
  userData: {
    token: "",
  },
};
const initialGoalState = {
  goals: [],
  tasks: [],
  score: null,
  progressPoints: 0,
  flag:false,
  saveGoal:''
};
const initialFlagState = {
  isLoading: false,
  isAlert: false,
};
export const userAuthReducer = createReducer(initialState, {
  [action.registerUser]: (state, { payload }) => {
    return {
      ...state,
      userData: { ...payload },
      token: payload.token.slice(7),
    };
  },
  [action.loginUser]: (state, { payload }) => {
    console.log('payload', payload)
    return {
      ...state,
      userData: payload.user,
      token: payload.user.token.slice(7),
      status: payload.status,
    };
  },
  [action.logoutUser]: (state, { payload }) => {
    return { ...state, userData: payload, token: "" };
  },
 
});
export const goalAndTaskReducer = createReducer(initialGoalState, {
  [action.createGoal]: (state, { payload }) => {
    return { ...state, goals: [...state.goals, payload.goal] };
  },
  [action.createTask]: (state, { payload }) => {
    return { ...state, tasks: [...state.tasks, payload.task] };
  },
  [action.getAllTasks]: (state, { payload }) => {
    return { ...state, tasks: payload };
  },
  [action.getAllGoals]: (state, { payload }) => {
    return { ...state, goals: payload };
  },
  [action.modifyTask]: (state, { payload }) => {
    console.log('Task payload from back-end', payload)
    const newTasks = state.tasks.filter((t)=> t._id !== payload.task._id)
    return {
      ...state,
      score:payload.user.scores,
      flag:true,
      tasks: [...newTasks, payload.task]
    };
  },
 
  [action.doneGoal]: (state, { payload }) => {
    return {
      ...state,
      score:payload.data.user.scores,
      progressPoints:0,
      flag:true,
  
    };
  },
  [action.deleteGoal]: (state, { payload }) => {
    return {
      ...state,
      goals: state.goals.filter((goal) => goal._id !== payload.goalId),
      saveGoal:null
    };
  },
  [action.deleteTask]: (state, { payload }) => {
    return {
      ...state,
      tasks: state.tasks.filter((task) => task._id !== payload.taskId),
    };
  },
  [action.score]: (state, { payload }) => {
    return { ...state, score: payload };
  },
  [action.progressBarPoints]: (state, { payload }) => {
    return { ...state, progressPoints: payload.points, saveGoal:payload};
  },
});

export const flag = createReducer(initialFlagState, {
  [action.isLoading]: (state, payload) => {
    return { ...state, isLoading: payload };
  },

  [action.isAlert]: (state, payload) => {
    return { ...state, isAlert: payload };
  },
});
