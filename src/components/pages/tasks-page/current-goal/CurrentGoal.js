import React from "react";
import s from "./current-goal.module.css";
import { useSelector, useDispatch } from "react-redux";
import { newScoreCreater } from "../../../../redux/operations";
const CurrentGoal = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.userAuthReducer.token);
  const myGoalState = useSelector((state) => state.goalAndTaskReducer.goals[0]); //вместо  индекса может быть id goal
  const myGoal = myGoalState.title;
  const goalPoints = myGoalState.points;
  const donePointsStateInfo = useSelector(
    (state) => state.goalAndTaskReducer.score
  );
  const userValuePoints = donePointsStateInfo;
  const newScore = userValuePoints - goalPoints;

  async function createNewScore() {
    if (token) {
      const data = await dispatch(newScoreCreater(newScore));
    }
  }
  const getPrize = () => {
    if (userValuePoints < goalPoints) {
      alert("need more points");
    } else {
      createNewScore();
    }
  };
  return (
    <>
      <p>
        Моя мета:
        <button className={s.buttonCurrent} onClick={getPrize}>
          {myGoal}
        </button>
      </p>
    </>
  );
};

export default CurrentGoal;
