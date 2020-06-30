import React, { Suspense, lazy } from "react";
import {

  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { LoaderUi } from "./loader/Loader";
import  HandleLogOut  from './handleLogOut/HandleLogOut'

const AuthPage = lazy(() =>
  import(
    "../components/pages/auth-page/AuthPage" /* webpackChunkName: 'AuthPage'*/
  )
);
const TasksPage = lazy(() =>
  import(
    "../components/pages/tasks-page/TasksPage" /* webpackChunkNAme: "TasksPage"*/
  )
);
const GoalPage = lazy(() =>
  import(
  "../components/pages/goal-page/NewGoal/NewGoal.js" /* webpackChunkName: 'GoalPage'*/
  )
);
export const router = (token) => {
  if (token) {
    return (
      
      <Suspense fallback={<LoaderUi />}>
        <Switch>
          <Route path="/goals" component={GoalPage} />
          <Route path="/tasks" component={TasksPage} />
          <Route path="/auth/logout" component={HandleLogOut} />
          <Redirect to="/tasks" />
        </Switch>
      </Suspense>
    );
  }
  
    return (
      <>
      
          <Suspense fallback={<LoaderUi />}>
            <Route path="/" component={AuthPage} />
            <Redirect to="/" />
          </Suspense>
   
      </>
    );
  
};
