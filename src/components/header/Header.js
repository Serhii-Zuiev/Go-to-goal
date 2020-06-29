import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./header.module.css";
import logo from "../../assets/images/logo.png";
import LoginForm from "../LoginForm/LoginForm";
import CurrentGoal from "../pages/tasks-page/current-goal/CurrentGoal";
import ProgressBar from "../pages/tasks-page/progress-bar/ProgressBar";
import UserInfoCard from "../userInfoCard/UserInfoCard";

const Header = ({ pageOfHeader }) => {
  const AUTH_PAGE = "auth";
  const GOALS_PAGE = "goals";
  const TSASKS_PAGE = "tasks";
  const IS_BIG_VERSION = window.innerWidth > 767;

  let content = (
    <>
      <img src={logo} alt="Лого" />
    </>
  );

  if ((pageOfHeader === AUTH_PAGE) && IS_BIG_VERSION) {
    content = (
      <>
        <img src={logo} alt="Лого" />
        <div className={styles.authContainer}>
          <LoginForm />
          <NavLink to="/auth/register">
            <span className={styles.registerBtn}>Реєстрація</span>
          </NavLink>
        </div>
      </>
    );
  }

  if ((pageOfHeader === GOALS_PAGE) && IS_BIG_VERSION) {
    content = (
      <>
        <img src={logo} alt="Лого" />
        <UserInfoCard />
      </>
    );
  }

  if ((pageOfHeader === TSASKS_PAGE) && IS_BIG_VERSION) {
    // console.log((pageOfHeader === TSASKS_PAGE) && IS_BIG_VERSION)
    content = (
      <>
        <img src={logo} alt="Лого" />
        <CurrentGoal />
        <ProgressBar />
        <UserInfoCard />
      </>
    );
  }

  if ((pageOfHeader === TSASKS_PAGE || pageOfHeader === GOALS_PAGE) && !IS_BIG_VERSION) {
    content = (
      <>
        <img src={logo} alt="Лого" />
        <UserInfoCard />
      </>
    );
  }

  return <header className={styles.header}>{content}</header>;
};

export default Header;
