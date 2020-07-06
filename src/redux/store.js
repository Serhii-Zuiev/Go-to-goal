import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { userAuthReducer, goalAndTaskReducer, flag } from "./reducers";
import thunk from "redux-thunk";

const appReducer = combineReducers({
  userAuthReducer,
  flag,
  goalAndTaskReducer,
  /* your app’s top-level reducers */
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT_USER") {
    state = undefined;
  }

  return appReducer(state, action);
};

const persistConfig = {
  key: "root",
  storage,
  // whitelist:['user'],
  blacklist: ["_persist"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
    thunk,
  }),
});

export const persistor = persistStore(store);
