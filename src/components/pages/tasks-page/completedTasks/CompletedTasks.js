import React from "react";
import css from "./completedTasks.module.css";
import Card from "../card/Card";
const CompletedTasks = ({
  cardlist,
  loadMore,
  loadMoreFlag,
  handleModalWindow,
}) => {
  cardlist.sort((a, b) => {
    let dateA = new Date(a.createdAt),
      dateB = new Date(b.createdAt);
    return dateB - dateA;
  });
  const cardlistPreview = [...cardlist].slice(0, 8);

  return (
    <>
      <div className={css.container}>
        <div className={css.btnContainer}>
          <hr></hr>
        </div>

        <h2 className={css.completedTasksTittle}>Виконано</h2>
        {!cardlist.length ? (
          <div className={css.emptyTaskWrapper}>
            <div className={css.empty_task}></div>
          </div>
        ) : null}
        <ul className={css.cardList}>
          {loadMoreFlag
            ? cardlist.map(
                ({ title, points, isDone, createdAt, _id, isComplete }) => (
                  <Card
                    key={_id}
                    title={title}
                    points={points}
                    createdAt={createdAt}
                    isDone={isDone}
                    id={_id}
                    isComplete={isComplete}
                  />
                )
              )
            : cardlistPreview.map(
                ({ title, points, isDone, createdAt, _id, isComplete }) => (
                  <Card
                    key={_id}
                    title={title}
                    points={points}
                    createdAt={createdAt}
                    isDone={isDone}
                    id={_id}
                    isComplete={isComplete}
                    handleModalWindow={() => handleModalWindow(_id)}
                  />
                )
              )}
        </ul>
        <div className={css.btnContainer}>
          {cardlist.length > 8 ? (
            <button
              className={loadMoreFlag ? css.btn + " " + css.btnRotate : css.btn}
              onClick={() => loadMore()}
            ></button>
          ) : null}
          <hr></hr>
        </div>
      </div>
    </>
  );
};

export default CompletedTasks;
