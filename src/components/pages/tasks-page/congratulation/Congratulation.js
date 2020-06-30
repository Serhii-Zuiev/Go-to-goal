import React from 'react';
// eslint-disable-next-line
import {conect} from "react-redux";
import s from "./congratulation.module.css"
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
const Congratulation = ({target, token, goalOperation, tasks}) => {
    return(
        <div className={s.container}>
            <div className={s.modal}>
                <h1 className={s.congrats}>Вітаємо</h1>
    <p className={s.textInform}>Ти отримуєш  {target}</p>
                <div className={s.flagContainer}>
                    <p className={s.textPrise}>{target}</p>
                    <p className={s.textNewTask}>Час обрати нову ціль</p>
                </div>
                <NavLink to ='/goals'>
                <button 
                type="button" className={s.button} 
                onClick={goalOperation}>ЄЄє-Є-Є!</button>
               </NavLink> 
               
            </div>
        </div>
    )
};

export default Congratulation;