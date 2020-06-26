import React from "react";
import CardList from "../cardList/CardList";
import css from "./completedTasks.module.css";
const CompletedTasks = (props) => {
  console.log('props', props)
  return (
    <>
      <div className={css.btnContainer}>
        <hr></hr>
      </div>
      <h2 className={css.CompletedTasksTittle}>Виконано</h2>
      {props ? <CardList /> : null}
      <div className={css.btnContainer}>
        <button className={css.btn + " " + css.btnRotate}></button>
        <hr></hr>
      </div>
    </>
  );
};

export default CompletedTasks;
