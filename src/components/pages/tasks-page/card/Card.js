import React, { useState } from "react";
import css from "../card/Card.module.css";
import gift from "../../../../assets/images/icons/present box/gift-box.svg";

function Card() {
  const [checked, setChecked] = useState(true);

  const onClick = () => {
    if (checked === true) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  };

  return (
    <li className={css.listItem}>
      <div className={css.container}>
        <div
          className={
            checked ? css.checkBoxContainerGray : css.checkBoxContainerGreen
          }
        >
          <button className={css.deleteCard} type="button"></button>
          <div>
            <img className={css.giftBox} alt="sdgsgsg" src={gift} />
            <p className={css.points}>
              <span className={css.numberPoints}>500</span> балів
            </p>
            <div className={css.label}>
              <label className={css.checkbox}>
                <input onClick={onClick} id="checkbox" type="checkbox" />
                <span className={css.span}>Виконано</span>
              </label>
            </div>
          </div>
        </div>
        <div className={css.description}>
          <div>
            <p className={css.title}>прибрати у кімнаті</p>
            <p className={css.time}>17:00 - 18:00</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Card;
