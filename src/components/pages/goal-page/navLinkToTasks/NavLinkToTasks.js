import React from "react";
import { NavLink } from "react-router-dom";
import styles from './styles.module.css'

const navLinkToTasks = ({ pageOfHeader }) => {
  const TSASKS_PAGE = "tasks";

  let content = <NavLink to="/tasks" className={styles.navLink} title='Перейти до виконання завдань'>До завдань</NavLink>;

  if (pageOfHeader === TSASKS_PAGE) {
    content = <NavLink to="/goals" className={styles.navLink} title='Перейти до планування цілей'>До цілей</NavLink>;
  }

  return <>{content}</>;
};

export default navLinkToTasks;
