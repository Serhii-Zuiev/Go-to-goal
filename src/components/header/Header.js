import React from "react";
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
          <button className={styles.logInBtn}>Логін</button>
          <button className={styles.registerBtn}>Реєстрація</button>
        </div>
      </>
    );
  }

  return <header className={styles.header}>{content}</header>;
};

export default Header;
