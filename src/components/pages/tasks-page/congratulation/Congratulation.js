import React from 'react';
// eslint-disable-next-line
import {conect} from "react-redux";
import s from "./congratulation.module.css"
const Congratulation = ({target, token, goalOperation, tasks}) => {
    // console.log(target)
    return(
        <div className={s.container}>
            <div className={s.modal}>
                <h1 className={s.congrats}>Вітаємо</h1>
    <p className={s.textInform}>Ти отримуєш  {target}</p>
                <div className={s.flagContainer}>
                    <p className={s.textPrise}>{target}</p>
                    <p className={s.textNewTask}>Час обрати нову ціль</p>
                </div>
                <button 
                type="button" className={s.button} 
                onClick={()=>goalOperation(target._id, token, tasks)}>ЄЄє-Є-Є!</button>
            </div>
        </div>
    )
};

export default Congratulation;