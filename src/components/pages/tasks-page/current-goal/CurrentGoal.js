import React, { useState } from "react";
import s from "./current-goal.module.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteGoal } from "../../../../redux/operations";

import { newScoreCreater, progressPoints } from "../../../../redux/operations";

import Congratulation from "./../congratulation/Congratulation";
// import GoalList from "./GoalList";

const CurrentGoal = () => {
  const dispatch = useDispatch();
  const [isMenuOpen, setMenuState] = useState(false);
  const [goalNumber, setGoalNumber] = useState();
  const token = useSelector((state) => state.userAuthReducer.token);
  const donePointsStateInfo = useSelector(
    (state) => state.goalAndTaskReducer.score
  );

  const myGoalState = goalNumber;
  console.log("MyGoalState", myGoalState);
  const allGoalsState = useSelector((state) => state.goalAndTaskReducer.goals);

  if (myGoalState) {
    const myGoal = myGoalState.title;
    const goalPoints = myGoalState.points;
    const goalId = myGoalState._id;
    const userValuePoints = donePointsStateInfo;
    const newScore = userValuePoints - goalPoints;
    const openModal = () => {
      setMenuState(!isMenuOpen);
    };

    let buttonOff;
    let percent = (userValuePoints / goalPoints) * 100;

    const getPrize = async () => {
      if (userValuePoints < goalPoints) {
        alert("need more points");
      } else {
        await dispatch(newScoreCreater(newScore));
        openModal();
      }
    };
    const goalOperation = async () => {
      if (token) {
        const data = await dispatch(deleteGoal(token, goalId));
      }
    };

    const getGoal = async (id) => {
      const targetGoal = allGoalsState.find((goal) => goal._id === id);
      await setGoalNumber(targetGoal);
      await dispatch(progressPoints(targetGoal.points));
    };

    return (
      <>
        {isMenuOpen && (
          <Congratulation
            target={"писюн и чипсы"}
            goalOperation={goalOperation}
          />
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
          </div>
        </div>
        {/* <GoalList goals={allGoalsState} /> */}
        {allGoalsState.map((goal) => (
          <button key={goal._id} onClick={() => getGoal(goal._id)}>
            {" "}
            {goal.title}
          </button>
        ))}
      </>
    );
  } else {
    const getGoal = (id) => {
      const targetGoal = allGoalsState.find((goal) => goal._id === id);
      setGoalNumber(targetGoal);
    };
    return (
      <>
        <div className={s.goal}>
          <div className={s.goalLogo}>
            <p className={s.goalName}> Обери ціль: </p>
          </div>
        </div>
        {allGoalsState.map((goal) => (
          <button key={goal._id} onClick={() => getGoal(goal._id)}>
            {" "}
            {goal.title}
          </button>
        ))}
      </>
    );
  }
};
export default CurrentGoal;
// <>
// <p >Моя мета:<button className={s.buttonCurrent} onClick={getPrize}>{myGoal}</button></p>
// </>
// )
