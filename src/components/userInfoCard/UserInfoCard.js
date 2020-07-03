import React from "react";
import styles from "./userInfoCard.module.css";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const UserInfoCard = () => {
  const avatarURL = useSelector(
    (state) => state.userAuthReducer.userData.userData.avatar
  );
  const userName = useSelector(
    (state) => state.userAuthReducer.userData.userData.name
  );
  const userAge = useSelector(
    (state) => state.userAuthReducer.userData.userData.age
  );

  let content = (
    <>
      <span className={styles.userInfo}>{userName}</span>
      <img className={styles.userAvatar} src={avatarURL} alt="аватар" />
    </>
  );

  if (window.innerWidth > 767) {
    content = (
      <>
        <img className={styles.userAvatar} src={avatarURL} alt="аватар" />
        <div className={styles.userInfo}>
          {userName},{userAge} років
        </div>
        <NavLink
          to="/auth/logout"
          className={styles.logOutBtn}
          title="Вийти з акаунту"
        >
          <span hidden>натисність для виходу з акаунту</span>
        </NavLink>
      </>
    );
  }

  return <div className={styles.UserInfoCard_container}>{content}</div>;
};

export default UserInfoCard;
