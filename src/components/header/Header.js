import React from "react";
import {NavLink} from  'react-router-dom'
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
          <NavLink to='/auth/login'>
          <button className={styles.logInBtn}>Логін</button>
          </NavLink>
          <NavLink to='/auth/register'>
          <button className={styles.registerBtn}>Реєстрація</button>
          </NavLink>
        </div>
      </>
    );
  }

  return <header className={styles.header}>{content}</header>;
};
// hello
export default Header;
