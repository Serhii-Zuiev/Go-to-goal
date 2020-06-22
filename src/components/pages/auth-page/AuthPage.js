import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Header from "../../header/Header";
import RegisterForm from "./AuthModal/RegisterForm/RegisterForm";
import AvatarPicker from "./AuthModal/AvatarPicker/AvatarPicker";
import Greeting from "./Greeting/Greeting";
import Banner from "./Banner/Banner";


const AuthPage = () => {
  return (
    <>
      <Header />
      <Banner/>
      <Greeting />
      <Switch>
        <Route path="/auth/register" component={RegisterForm} />
        <Route path="/auth/login" component={AvatarPicker} />
      </Switch>
    </>
  );
};

export default withRouter(AuthPage);
