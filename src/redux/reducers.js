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
  score:0
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
    const sum=state.score+ payload.task.points
    return {
      ...state,
      score:sum,
      tasks: state.tasks.map((task) => {
        if (task._id === payload._id) {
          task = payload;
        }
        return task;
      }),
    };
  },
  [action.doneGoal]: (state, { payload }) => {
    return {
      ...state,
      goals: state.goals.map((goal) => {
        if (goal._id === payload.goalId) {
          goal = payload.data;
        }
        return goal;
      }),
    };
  },
  [action.deleteGoal]: (state, { payload }) => {
    console.log('payload.goalId', payload.goalId)
    return {
      ...state,
      goals: state.goals.filter((goal) => goal._id !== payload.goalId),
    };
  },
  [action.deleteTask]: (state, { payload }) => {
    console.log('payload.goalId', payload.taskId)
    return {
      ...state,
      tasks: state.tasks.filter((task) => task._id !== payload.taskId),
    };
  },
  [action.score]: (state, {payload}) => {
    return {...state, score:payload };
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





