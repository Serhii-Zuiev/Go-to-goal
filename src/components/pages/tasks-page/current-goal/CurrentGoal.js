import React, { useState } from "react";
import s from "./current-goal.module.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteGoal } from "../../../../redux/operations";
import CustomizedMenus from "./CustomizedMenus";
import { doneGoal, progressPoints } from "../../../../redux/operations";

import Congratulation from "./../congratulation/Congratulation";

const CurrentGoal = () => {
  const dispatch = useDispatch();
  const [isMenuOpen, setMenuState] = useState(false);
  const [goalNumber, setGoalNumber] = useState();
  const token = useSelector((state) => state.userAuthReducer.token);
  const donePointsStateInfo = useSelector(
    (state) => state.goalAndTaskReducer.score
  );
  const donePointsOfAuth = useSelector(
    (state) => state.userAuthReducer?.userData?.userData?.scores
  );
  const allGoalsState = useSelector((state) => state.goalAndTaskReducer.goals);
  const goalToggle = useSelector((state) => state.goalAndTaskReducer.saveGoal);

  const getGoal = async (id) => {
    const targetGoal = allGoalsState.find((goal) => goal._id === id);

    await setGoalNumber(targetGoal);
    await dispatch(progressPoints(targetGoal));
  };
  let buttonOff;

  const myGoalState = goalNumber;

  if (myGoalState) {
    const myGoal = myGoalState.title;
    const goalPoints = myGoalState.points;
    const goalId = myGoalState._id;
    const userValuePoints = donePointsStateInfo
      ? donePointsStateInfo
      : donePointsOfAuth;
    const openModal = () => {
      setMenuState(!isMenuOpen);
    };

    let percent = (userValuePoints / goalPoints) * 100;
    const getPrize = async () => {
      openModal();
      await dispatch(doneGoal(token, goalId, { isDone: true }));
    };
    const goalOperation = async () => {
      if (token) {
        await dispatch(deleteGoal(token, goalId));
      }
    };

    return (
      <>
        {isMenuOpen && (
          <Congratulation target={myGoal} goalOperation={goalOperation} />
        )}

        <div className={s.goal}>
          <div className={s.goalLogo}>
            <p className={s.goalName}> Mоя ціль: </p>
            <button
              type="button"
              className={percent < 100 ? s.goalBtn : s.goalBtnActive}
              onClick={getPrize}
              disabled={buttonOff}
            >
              {myGoal}
            </button>
            <CustomizedMenus goalsList={allGoalsState} getGoal={getGoal} />
          </div>
        </div>
      </>
    );
  } else if (goalToggle) {
    const myGoal = goalToggle.title;
    const goalPoints = goalToggle.points;
    const goalId = goalToggle._id;
    const userValuePoints = donePointsStateInfo;
    const openModal = () => {
      setMenuState(!isMenuOpen);
    };

    let percent = (userValuePoints / goalPoints) * 100;
    const getPrize = async () => {
      await openModal();
      await dispatch(doneGoal(token, goalId, { isDone: true }));
    };
    const goalOperation = async () => {
      if (token) {
        await dispatch(deleteGoal(token, goalId));
      }
    };

    return (
      <>
        {isMenuOpen && (
          <Congratulation target={myGoal} goalOperation={goalOperation} />
        )}

        <div className={s.goal}>
          <div className={s.goalLogo}>
            <p className={s.goalName}>Mоя ціль: </p>
            <button
              type="button"
              className={percent < 100 ? s.goalBtn : s.goalBtnActive}
              onClick={getPrize}
              disabled={buttonOff}
            >
              {myGoal}
            </button>
            <CustomizedMenus goalsList={allGoalsState} getGoal={getGoal} />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className={s.fon}>
        <div className={s.goal}>
          <div className={s.goalLogo}>
            <p className={s.goalName}>Обери ціль: </p>
            <button
              type="button"
              className={s.goalBtn}
              disabled={buttonOff}
            ></button>
            <CustomizedMenus goalsList={allGoalsState} getGoal={getGoal} />
          </div>
        </div>
      </div>
    );
  }
};
export default CurrentGoal;
