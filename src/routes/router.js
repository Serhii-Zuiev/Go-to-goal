import React, { Suspense, lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";


const AuthPage = lazy(() =>
  import("../components/pages/auth-page/AuthPage" /* webpackChunkName: 'AuthPage'*/)
);
export const router = (token) => {
  if (token) {
    return (
      <Switch>
        <Suspense fallback={<div> Loading</div>}>
          <Route exact path="/goals" component={"goals"} />
          <Route path="/tasks" component={"Tasks"} />
          <Route path="/auth/logout" component={AuthPage} />
          <Redirect to="/goals" />
        </Suspense>
      </Switch>
    );
  }
  return (
    <>
      <Suspense fallback={<div>Loading</div>}>
        <Switch>
          <Route exact path="/" component={AuthPage} />
          <Route path="/auth/login" component={"LoginPageModal"} />
          <Route path="/auth/register" component={"RegisterpageModal"} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </>
  );
};
