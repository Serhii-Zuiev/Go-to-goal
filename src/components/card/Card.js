import React, { useState } from "react";
import css from "../card/Card.module.css";
import gift from "../../assets/images/icons/present box/gift-box.svg";
import more from "../../assets/images/icons/more/black-18dp/2x/baseline_more_horiz_black_18dp.png";

function Card() {
  return (
    <li className={css.listItem}>
      <div className={css.container}>
        <div className={css.checkBoxContainer}>
          <div>
            <img className={css.giftBox} alt="sdgsgsg" src={gift} />
            <p className={css.points}>
              <span className={css.numberPoints}>500</span> балів
            </p>
            <div className={css.label}>
              <label className={css.checkbox}>
                <input type="checkbox" /><span className={css.span}>Виконано</span>
              </label>
            </div>
          </div>
        </div>
        <div className={css.description}>
          <div>
            <p className={css.title}>прибрати у кімнаті</p>
            <p className={css.time}>17:00 - 18:00</p>
          </div>
          <div>
            <img className={css.more} alt="some_image" src={more} />
          </div>
        </div>
      </div>
    </li>
  );
}

export default Card;
