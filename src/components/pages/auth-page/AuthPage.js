import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Header from "../../header/Header";
import RegisterForm from "./AuthModal/RegisterForm/RegisterForm";
import AvatarPicker from "./AuthModal/AvatarPicker/AvatarPicker";
const AuthPage = () => {
  return (
    <>
      <Header />

      <Switch>
        <Route path="/auth/register" component={RegisterForm} />
        <Route path="/auth/login" component={AvatarPicker} />
      </Switch>
    </>
  );
};

export default withRouter(AuthPage);
