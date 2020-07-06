import React from "react";
import s from "./goalCard.module.css";
import CloseIcon from "@material-ui/icons/Close";
import { useSelector, useDispatch } from "react-redux";
import { deleteGoal } from "../../../../redux/operations";

const GoalCard = ({ title, points, goalId }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.userAuthReducer.token);

  const handleDeleteGoal = () => {
    dispatch(deleteGoal(token, goalId));
  };

  return (
    <div className={s.card}>
      <button className={s.button} onClick={handleDeleteGoal}>
        <CloseIcon fontSize="small" />
      </button>
      <p className={s.goal_text}>Мета: {title} </p>
      <p className={s.points}> Треба Набрати: {points} </p>
    </div>
  );
};

export default GoalCard;
