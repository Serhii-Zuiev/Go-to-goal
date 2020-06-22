import React from "react";
import css from "./currentTasks.module.css";

const currentTasks = (props) => {
  return (
    <div>
      <div className={css.startTaskWrapper}>
        <div>
          <h2 className={css.startTaskTitle}>
            Немає завдань? Тоді їх треба створити!
          </h2>
          <p className={css.startTaskQuestion}>Бачиш кнопку внизу?</p>
          <p className={css.startTaskText}>
            Натискай її, вибирай, що і коли треба зробити і&nbsp;
            <span className={css.goalLine}>вперед до мети</span>!
          </p>
          <p className={css.startTaskNotice}>
            Пам'ятай, що бали нараховуються тільки за виконані завдання!
          </p>
        </div>
      </div>
      <div>
        <h3 className={css.myTasksTittle}>Мої завдання:</h3>
        <p className={css.dailyTaskListTittle}>СЬОГОДНІ</p>
      </div>
      <div className={css.empty_task}></div>
      {props.cardlist.map((elem) => (
        <div>{elem.name}</div>
      ))}
    </div>
  );
};

export default currentTasks;
