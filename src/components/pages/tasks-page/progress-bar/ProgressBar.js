import React from "react";
import ProgressBarRender from "./ProgressBarRender";
import { useSelector } from "react-redux";

const ProgressBar = () => {
  const pointsOfGoal = useSelector(
    (state) => state.goalAndTaskReducer.progressPoints
  );
  const donePointsStateInfo = useSelector(
    (state) => state.userAuthReducer?.userData?.userData?.scores
  );
  const donePoints = useSelector((state) => state.goalAndTaskReducer.score);

  const donePointsWithSelectedGoalToRender = donePoints
    ? donePoints
    : donePointsStateInfo;

  return (
    <>
      <ProgressBarRender
        fact={donePointsWithSelectedGoalToRender}
        planing={pointsOfGoal}
      />
    </>
  );
};

export default ProgressBar;
