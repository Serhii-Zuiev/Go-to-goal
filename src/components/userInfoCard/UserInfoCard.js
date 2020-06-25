import React from "react";
import styles from "./userInfoCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/operations";

const UserInfoCard = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.userAuthReducer.userData.token);
  const avatarURL = useSelector(
    (state) => state.userAuthReducer.userData.userData.avatar
  );
  const userName = useSelector(
    (state) => state.userAuthReducer.userData.userData.name
  );
  const userAge = useSelector(
    (state) => state.userAuthReducer.userData.userData.age
  );

  function handleLogOut() {
    dispatch(logoutUser(token));
  }

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
        <button
          onClick={handleLogOut}
          type="button"
          className={styles.logOutBtn}
          title="Вийти з акаунту"
        >
          <span hidden>натисність для виходу з акаунту</span>
        </button>
      </>
    );
  }

  return <div className={styles.UserInfoCard_container}>{content}</div>;
};

export default UserInfoCard;
