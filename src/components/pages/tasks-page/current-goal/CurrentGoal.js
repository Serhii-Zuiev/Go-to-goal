import React from 'react'
import s from './current-goal.module.css'
const CurrentGoal = ({target}) => {
    return(
        <>
        <p >Моя мета:<button className={s.buttonCurrent}>{target}</button></p>
        </>
    )
    };

export default CurrentGoal;