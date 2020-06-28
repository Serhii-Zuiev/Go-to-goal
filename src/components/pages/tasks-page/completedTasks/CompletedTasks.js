import React from "react";
import CardList from "../cardList/CardList";
import css from "./completedTasks.module.css";
import Card from "../card/Card";
const CompletedTasks = ({ cardlist }) => {
  return (
    <>
      <div className={css.btnContainer}>
        <hr></hr>
      </div>
      <h2 className={css.CompletedTasksTittle}>Виконано</h2>
      <ul>
        {cardlist.map(({ title, points, isDone, createdAt, _id }) => (
          <Card
            key={_id}
            title={title}
            points={points}
            createdAt={createdAt}
            isDone={isDone}
            id={_id}
          />
        ))}
      </ul>
      <div className={css.btnContainer}>
        <button className={css.btn + " " + css.btnRotate}></button>
        <hr></hr>
      </div>
    </>
  );
};

export default CompletedTasks;
