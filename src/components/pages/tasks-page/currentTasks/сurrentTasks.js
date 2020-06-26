import React from "react";
import css from "./currentTasks.module.css";
import CardList from "../cardList/CardList";
import StartTaskMessage from "./startTaskMessage";

const currentTasks = (props) => {
  console.log('props', props)
  return (
    <>
      {props.cardlist ? (
        <StartTaskMessage />
      ) : (
        <div className={css.myTaskWrapper}>
          <h3 className={css.myTasksTittle}>Мої завдання:</h3>
          <p className={css.dailyTaskListTittle}>СЬОГОДНІ</p>
        </div>
      )}
      <CardList />
    </>
  );
};

export default currentTasks;
