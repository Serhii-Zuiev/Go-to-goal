import React from "react";
import css from "../card/Card.module.css";
import gift from "../../../../assets/images/icons/present-box/gift-box.svg";

const Card = ({
  title,
  points,
  createdAt,
  isDone,
  isComplete,
  id,
  deadline,
  handleModalWindow,
  handleTaskDone,
  isDoneToggle,
  handleIsDoneToggle,
}) => {
  return (
    <li className={css.listItem}>
      <div className={css.container}>
        <div
          className={
            isComplete ? css.checkBoxContainerGreen : css.checkBoxContainerGray
          }
        >
          {isDone ? null : (
            <button
              id={id}
              className={css.deleteCard}
              type="button"
              onClick={handleModalWindow}
            ></button>
          )}
          <div>
            <div className={css.giftWrapper}>
              <img className={css.giftBox} alt="giftpic" src={gift} />
            </div>
            <p className={css.points}>
              <span className={css.numberPoints}>{points}</span> балів
            </p>
            {isDone ? (
              <p className={css.date}>
                {new Date(createdAt).toLocaleDateString()}
              </p>
            ) : null}
            {!isDone ? (
              <div className={css.label}>
                <label className={css.checkbox}>
                  <input
                    onClick={handleTaskDone}
                    name="isDone"
                    type="checkbox"
                    defaultChecked={isComplete}
                  />
                  <span className={css.span}>Виконано</span>
                </label>
              </div>
            ) : null}
          </div>
        </div>
        <div className={css.description}>
          <div>
            <p className={css.title}>{title}</p>

            <p className={css.time}>{!isDone ? deadline : null}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Card;
