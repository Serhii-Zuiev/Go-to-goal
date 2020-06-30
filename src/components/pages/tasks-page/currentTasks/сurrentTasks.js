import React from "react";
import css from "./currentTasks.module.css";
import StartTaskMessage from "./startTaskMessage/startTaskMessage";
import Card from "../card/Card";

const currentTasks = ({ cardlist, handleModalWindow }) => {
  return (
    <>
      {!cardlist.length ? (
        <StartTaskMessage />
      ) : (
        <div className={css.myTaskWrapper}>
          <h3 className={css.myTasksTittle}>Мої завдання:</h3>
          <p className={css.dailyTaskListTittle}>СЬОГОДНІ</p>
        </div>
      )}
      <ul className={css.cardList}>
        {cardlist.map(
          ({ title, points, isDone, createdAt, _id, isComplete, deadline }) => (
            <Card
              key={_id}
              title={title}
              points={points}
              createdAt={createdAt}
              isDone={isDone}
              id={_id}
              isComplete={isComplete}
              deadline={deadline}
              handleModalWindow={() => handleModalWindow(_id)}
            />
          )
        )}
      </ul>
    </>
  );
};
export default currentTasks;
