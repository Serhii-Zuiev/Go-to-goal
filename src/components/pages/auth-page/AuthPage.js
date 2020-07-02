import React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import Header from "../../header/Header";
import RegisterForm from "./AuthModal/RegisterForm/RegisterForm";
import Greeting from "./Greeting/Greeting";
import Banner from "./Banner/Banner";
import Footer from "../../footer/Footer";
import Alerts from '../../alert/Alerts'

const AuthPage = () => {
  const isAlertSown = useSelector((state) => state.flag.isAlert);
  // console.log('isAlertSown', isAlertSown)
  return (
    <>
      <Route path="/auth/register" component={RegisterForm} />
      {isAlertSown && <Alerts/>}
      <Header pageOfHeader={"auth"} />
      <Banner />
      <Greeting />
      <Footer />
    </>
  );
};

export default AuthPage;
