import React from "react";
import { Route, withRouter } from "react-router-dom";
import Header from "../../header/Header";
import RegisterForm from "./AuthModal/RegisterForm/RegisterForm";
// import AvatarPicker from "./AuthModal/AvatarPicker/AvatarPicker";
import Greeting from "./Greeting/Greeting";
import Banner from "./Banner/Banner";


const AuthPage = () => {
  return (
    <>
    <Route path="/auth/register" component={RegisterForm} />
      <Header pageOfHeader={'auth'}/>
      <Banner/>
      <Greeting />
     
    </>
  );
};

export default withRouter(AuthPage);
