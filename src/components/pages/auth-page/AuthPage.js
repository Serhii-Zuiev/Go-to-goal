import React from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../../header/Header";
import RegisterForm from "./AuthModal/RegisterForm/RegisterForm";
import Greeting from "./Greeting/Greeting";
import Banner from "./Banner/Banner";
import Footer from "../../footer/Footer";
import Alerts from "./Alert/Alerts";

const AuthPage = () => {
  const isAlertSown = useSelector((state) => state.flag.isAlert);

  return (
    <>
      <div style={{ minHeight: "calc(100vh - 50px)" }}>
        <Route path="/auth/register" component={RegisterForm} />
        {isAlertSown && <Alerts />}
        <Header pageOfHeader={"auth"} />
        <Banner />
        <Greeting />
      </div>
      <Footer />
    </>
  );
};

export default AuthPage;
