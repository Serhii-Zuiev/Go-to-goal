import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";


const AuthPage = lazy(() =>
  import(
  "../components/pages/auth-page/AuthPage" /* webpackChunkName: 'AuthPage'*/
  )
);
const TasksPage=lazy(()=>
import(
  "../components/pages/tasks-page/TasksPage" /* webpackChunkNAme: "TasksPage"*/
))
export const router = (token) => {
  if (token) {
    return (
      <Switch>
        <Suspense fallback={<div> Loading</div>}>
          <Route exact path="/goals" component={"goals"} />
          <Route path="/tasks" component={TasksPage} />
          <Route path="/auth/logout" component={AuthPage} />
          {/* <Redirect to="/goals" /> */}
        </Suspense>
      </Switch>
    );
  }
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading</div>}>
          <Switch>
            <Route path="/" component={AuthPage} />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </Router>
    </>
  );
};
