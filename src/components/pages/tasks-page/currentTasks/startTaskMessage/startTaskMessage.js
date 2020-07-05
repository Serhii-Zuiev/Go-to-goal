import React from "react";
import css from "./startTaskMessage.module.css";

const startTaskMessage = () => {
  return (
    <div>
      <div className={css.startTaskWrapper}>
        <div>
          <h2 className={css.startTaskTitle}>
            Немає завдань? Тоді їх треба створити!
          </h2>
          <p className={css.startTaskQuestion}>
            Бачиш кнопку <span className={css.titleDown}>внизу</span>
            <span className={css.titleRight}>праворуч</span>?
          </p>
          <div className={css.arrow}></div>
          <p className={css.startTaskText}>
            Натискай її, вибирай, що і коли треба зробити і&nbsp;
            <span className={css.goalLine}>вперед до мети</span>!
          </p>
          <p className={css.startTaskNotice}>
            Пам'ятай, що бали нараховуються тільки за виконані завдання!
          </p>
        </div>

        <div className={css.myTaskWrapper}>
          <h3 className={css.myTasksTittle}>Мої завдання:</h3>
          <p className={css.dailyTaskListTittle}>СЬОГОДНІ</p>
        </div>
        <div className={css.emptyTaskWrapper}>
          <div className={css.empty_task}></div>
        </div>
      </div>
    </div>
  );
};

export default startTaskMessage;
