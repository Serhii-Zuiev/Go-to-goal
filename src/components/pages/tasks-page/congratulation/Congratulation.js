import React from 'react';
// eslint-disable-next-line
import {conect} from "react-redux";
import s from "./congratulation.module.css"
const Congratulation = ({target}) => {
    // console.log(target)
    return(
        <div className={s.container}>
            <div className={s.modal}>
                <h1 className={s.congrats}>Вітаємо</h1>
    <p className={s.textInform}>Ти отримуєш  {target}</p>
                <div className={s.flagContainer}>
                    <p className={s.textPrise}>Ckjy</p>
                    <p className={s.textNewTask}>Час обрати нову ціль</p>
                </div>
                <button type="button" className={s.button}>ЄЄє-Є-Є!</button>
            </div>
        </div>
    )
};

export default Congratulation;