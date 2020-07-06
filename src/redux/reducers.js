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
  flag: false,
  saveGoal: "",
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
    return { ...state, goals: payload.goals };
  },
  [action.modifyTask]: (state, { payload }) => {
    return {
      ...state,
      score: payload?.user ? payload.user.scores : state.score,
      tasks: state.tasks.map((t) =>
        t._id !== payload?.task?._id ? t : payload.task
      ),
    };
  },

  [action.doneGoal]: (state, { payload }) => {
    return {
      ...state,
      score: payload.data.user.scores,
      progressPoints: 0,
      flag: false,
    };
  },
  [action.deleteGoal]: (state, { payload }) => {
    const isDeletedGoalWasSaved = state?.saveGoal?._id === payload.goalId;
    return {
      ...state,
      goals: state.goals.filter((goal) => goal._id !== payload.goalId),
      saveGoal: isDeletedGoalWasSaved ? null : state.saveGoal,
      progressPoints: isDeletedGoalWasSaved ? 0 : state.progressPoints,
      flag: isDeletedGoalWasSaved ? false : state.flag,
    };
  },
  [action.deleteTask]: (state, { payload }) => {
    const scOre = payload?.data?.user;
    return {
      ...state,
      tasks: state.tasks.filter((task) => task._id !== payload.taskId),
      score: scOre ? scOre.scores : state.score,
    };
  },
  [action.score]: (state, { payload }) => {
    return { ...state, score: payload };
  },
  [action.progressBarPoints]: (state, { payload }) => {
    return {
      ...state,
      progressPoints: payload.points,
      saveGoal: payload,
      flag: true,
    };
  },
});

export const flag = createReducer(initialFlagState, {
  [action.isLoading]: (state, payload) => {
    return { ...state, isLoading: payload };
  },

  [action.isAlert]: (state, payload) => {
    const flag = payload.payload;
    return { ...state, isAlert: state.isAlert === flag ? state.isAlert : flag };
  },
});
