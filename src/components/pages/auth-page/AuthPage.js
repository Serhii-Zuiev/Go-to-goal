import React from "react";
import { Route } from "react-router-dom";
import Header from "../../header/Header";
import RegisterForm from "./AuthModal/RegisterForm/RegisterForm";
import Greeting from "./Greeting/Greeting";
import Banner from "./Banner/Banner";
import Footer from "../../footer/Footer";

const AuthPage = () => {
  return (
    <>
      <Route path="/auth/register" component={RegisterForm} />
      <Header pageOfHeader={"auth"} />
      <Banner />
      <Greeting />
      <Footer />
    </>
  );
};

export default AuthPage;
