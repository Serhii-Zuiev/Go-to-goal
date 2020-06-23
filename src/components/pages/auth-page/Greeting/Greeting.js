import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./greeting.module.css";

const Greeting = () => {
  let content = (
    <>
      <h2 className={styles.mainGreeting}>Вітаємо вас у нашій програмі!</h2>
      <div className={styles.greetingContentWrapper}>
        <span className={styles.greetingContent}>Вже є аккаунт?</span>
        <NavLink to="/auth/login">
          <span
            className={`${styles.greetingContent} ${styles.greetingLoginLink}`}
          >
            Log in
          </span>
        </NavLink>
      </div>
      <NavLink to="/auth/register">
        <button className={styles.toRegisterBtn}>Приєднатися!</button>
      </NavLink>
    </>
  );

  if (window.innerWidth > 767) {
    content = (
      <>
        <div className={styles.greetingContainer}>
          <h2 className={styles.mainGreeting}>Вітаємо вас у нашій програмі!</h2>

          <div className={styles.greetingContent}>
            <p className={styles.greetingContentText}>
              Тут ви зможете чітко сформулювати ваші бажання - чого ви хочете
              досягти чи отримати у якості винагороди. Вам потрібно поставити
              собі мету, а згодом - виконувати поставлені задачі у комфортному
              для себе ритмі та не забувати відмічати їх виконання.
            </p>
            <p className={styles.greetingContentText}>
              Будьте наполегливими, відповідальними і ви зможете досягти всього,
              чого забажаєете! Подобається ідея? Готові допомагати, розвиватися
              та йти до своєї мети?
            </p>
            <p className={styles.greetingContentText}>
              Так, так, все саме так, як у дорослому житті :&#x232A; Тоді не
              зважайте, а швидко зареєструйтеся, або заходьте на свій аккаунт.
            </p>
          </div>

          <NavLink to="/auth/register">
            <button className={styles.toRegisterBtn}>Приєднатися!</button>
          </NavLink>
        </div>
      </>
    );
  }

  return <section className={styles.greetingWrapper}>{content}</section>;
};

export default Greeting;
