import React from 'react';
import {conect} from "react-redux";
import s from "./congratulation.module.css"
const Congratulation = ({target, }) => {
    return(
        <div className={s.container}>
            <div className={s.modal}>
                <h1 className={s.congrats}>Вытаэмо</h1>
                <p className={s.textInform}>Ти отримуєш</p>
                <div className={s.flagContainer}>
                    <p className={s.textPrise}>{target}</p>
                    <p className={s.textNewTask}>Час обрати нову ціль</p>
                </div>
                <button type="button" className={s.button}>ЄЄє-Є-Є!</button>
            </div>
        </div>
    )
};

export default Congratulation;