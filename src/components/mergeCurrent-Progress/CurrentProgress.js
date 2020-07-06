import React from "react";
import CurrentGoal from "../pages/tasks-page/current-goal/CurrentGoal";
import ProgressBar from "../pages/tasks-page/progress-bar/ProgressBar";
import s from "./merge-two-page.module.css";
const CurrentProgress = () => {
  return (
    <div className={s.fon}>
      <ProgressBar />
      <CurrentGoal />
    </div>
  );
};

export default CurrentProgress;
