import React from "react";
import ProgressBarRender from "./ProgressBarRender";
import { useSelector } from "react-redux";

const ProgressBar = () => {
  const pointsOfGoal = useSelector(
    (state) => state.goalAndTaskReducer.progressPoints
  );
  const donePointsStateInfo = useSelector(
    (state) => state.userAuthReducer.userData.scores
  );
  const donePoints = useSelector((state) => state.goalAndTaskReducer.score);
  const pointFlag = useSelector((state) => state.goalAndTaskReducer.flag);
  return (
    <>
      {pointFlag ? (
        <ProgressBarRender fact={donePoints} planing={pointsOfGoal} />
      ) : (
        <ProgressBarRender fact={donePointsStateInfo} planing={pointsOfGoal} />
      )}
    </>
  );
};

export default ProgressBar;
