import React, { useState } from "react";
import css from "../card/Card.module.css";
import gift from "../../../../assets/images/icons/present box/gift-box.svg";

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
}) => {
  // const [checked, setChecked] = useState(true);

  // const onClick = () => {
  //   if (checked === true) {
  //     setChecked(false);
  //   } else {
  //     setChecked(true);
  //   }
  // };
  // console.log(isComplete, createdAt, isDone);
  return (
    <li className={css.listItem}>
      <div className={css.container}>
        <div
          className={
            isDone ? css.checkBoxContainerGreen : css.checkBoxContainerGray
          }
        >
          {isComplete ? null : (
            <button
              id={id}
              className={css.deleteCard}
              type="button"
              onClick={handleModalWindow}
            ></button>
          )}
          <div>
            <img className={css.giftBox} alt="giftpic" src={gift} />
            <p className={css.points}>
              <span className={css.numberPoints}>{points}</span> балів
            </p>
            {!isComplete ? (
              <div className={css.label}>
                <label className={css.checkbox}>
                  <input onClick={handleTaskDone} type="checkbox" />
                  <span className={css.span}>Виконано</span>
                </label>
              </div>
            ) : null}
          </div>
        </div>
        <div className={css.description}>
          <div>
            <p className={css.title}>{title}</p>
            <p className={css.time}>
              {isComplete ? new Date(createdAt).toLocaleDateString() : null}
            </p>
            <p>{!isComplete ? deadline : null}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Card;
