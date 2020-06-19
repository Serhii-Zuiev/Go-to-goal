import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./header.module.css";
import logo from "../../assets/images/logo.png";

const Header = () => {
  let content = (
    <>
      <img src={logo} alt="Лого" />
    </>
  );

  if (window.innerWidth > 767) {
    content = (
      <>
        <img src={logo} alt="Лого" />
        <div>
          <NavLink to="/auth/login">
            <span className={styles.logInBtn}>Логін</span>
          </NavLink>
          <NavLink to="/auth/register">
            <span className={styles.registerBtn}>Реєстрація</span>
          </NavLink>
        </div>
      </>
    );
  }

  return <header className={styles.header}>{content}</header>;
};

export default Header;
