import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./header.module.css";
import logo from "../../assets/images/logo.png";
import LoginForm from "../LoginForm/LoginForm";
import CurrentGoal from "../pages/tasks-page/current-goal/CurrentGoal";
import ProgressBar from "../pages/tasks-page/progress-bar/ProgressBar";
import UserInfoCard from "../userInfoCard/UserInfoCard";
import CustomizedMenus from '../pages/goal-page/navLinkToTasks/CustomizedMenus'
import NavLinkToTasks from '../pages/goal-page/navLinkToTasks/NavLinkToTasks'
import AddTaskBtn from "../pages/tasks-page/add-button/AddTaskBtn";

const Header = ({ pageOfHeader, handleOpenModalWindow }) => {
  const AUTH_PAGE = "auth";
  const GOALS_PAGE = "goals";
  const TSASKS_PAGE = "tasks";
  const IS_MOBILE_VERSION = window.innerWidth < 768;
  const IS_TABLET_VERSION = (window.innerWidth > 767) && (window.innerWidth < 1200);
  const IS_BIG_VERSION = window.innerWidth > 1199;

  let content = (
    <div className={styles.authContainer}>
      <img src={logo} alt="Лого" />
    </div>
  );

  if ((pageOfHeader === TSASKS_PAGE || pageOfHeader === GOALS_PAGE) && IS_MOBILE_VERSION) {
    content = (
      <div className={styles.goalAndTasksContainer}>
      <div className={styles.shadowContainer}>
      <div className={styles.widthContainer}>
        <img src={logo} alt="Лого" />
        <UserInfoCard />
          <div className={styles.dropDownMenu}>
            <CustomizedMenus pageOfHeader={pageOfHeader}/>
          </div>
      </div>
      </div>
      </div>
    );
  }


  if ((pageOfHeader === AUTH_PAGE) && IS_TABLET_VERSION) {
    content = (
      <div className={styles.authBackGroundContainer}>
      <div className={styles.authContainer}>
        <img src={logo} alt="Лого" />
        <div className={styles.authFormContainer}>
          <LoginForm />
          <NavLink to="/auth/register" className={styles.registerBtn}>
            Реєстрація
          </NavLink>
        </div>
      </div>
      </div>
    );
  }

  if ((pageOfHeader === GOALS_PAGE) && IS_TABLET_VERSION) {
    content = (
      <div className={styles.goalsAndTasksPageContainer}>
      <div className={styles.authContainer}>
        <img src={logo} alt="Лого" />
        <div className={styles.goalPageNavContainer}>
        <NavLinkToTasks pageOfHeader={pageOfHeader}/>
        <UserInfoCard />
        </div>
      </div>
      </div>
    );
  }
  if ((pageOfHeader === TSASKS_PAGE) && IS_TABLET_VERSION) {
    content = (
      <div className={styles.goalsAndTasksPageContainer}>
      <div className={styles.authContainer}>
        <img src={logo} alt="Лого" />
        <CurrentGoal />
        <div className={styles.goalPageNavContainer}>
        <NavLinkToTasks pageOfHeader={pageOfHeader}/>
        <UserInfoCard />
        <AddTaskBtn handleOpenModalWindow={handleOpenModalWindow}/>
        </div>
      </div>
      </div>
    );
  }

  if ((pageOfHeader === AUTH_PAGE) && IS_BIG_VERSION) {
    content = (
      <div className={styles.authBackGroundContainer}>
      <div className={styles.authContainer}>
        <img src={logo} alt="Лого" />
        <div className={styles.authFormContainer}>
          <LoginForm />
          <NavLink to="/auth/register" className={styles.registerBtn}>
            Реєстрація
          </NavLink>
        </div>
      </div>
      </div>
    );
  }

  if ((pageOfHeader === GOALS_PAGE) && IS_BIG_VERSION) {
    content = (
      <div className={styles.goalsAndTasksPageContainer}>
      <div className={styles.authContainer}>
        <img src={logo} alt="Лого" />
        <div className={styles.goalPageNavContainer}>
        <NavLinkToTasks pageOfHeader={pageOfHeader}/>
        <UserInfoCard />
        </div>
      </div>
      </div>
    );
  }

  if ((pageOfHeader === TSASKS_PAGE) && IS_BIG_VERSION) {
    content = (
      <div className={styles.goalsAndTasksPageContainer}>
      <div className={styles.authContainer}>
        <img src={logo} alt="Лого" />
        <CurrentGoal />
        <ProgressBar />
        <div className={styles.goalPageNavContainer}>
        <NavLinkToTasks pageOfHeader={pageOfHeader}/>
        <UserInfoCard />
        <AddTaskBtn handleOpenModalWindow={handleOpenModalWindow}/>
        </div>
      </div>
      </div>
    );
  }


  return <header className={styles.header}>{content}</header>;
};

export default Header;
