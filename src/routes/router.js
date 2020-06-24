import React, { Suspense, lazy } from "react";
import {

  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { LoaderUi } from "./loader/Loader";

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
export const router = (token) => {
  if (token) {
    return (
      
      <Suspense fallback={<LoaderUi />}>
        <Switch>
          <Route exact path="/goals" component={"goals"} />
          <Route exact path="/tasks" component={TasksPage} />
          <Route path="/auth/logout" component={AuthPage} />
          <Redirect to="/goals" />
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
