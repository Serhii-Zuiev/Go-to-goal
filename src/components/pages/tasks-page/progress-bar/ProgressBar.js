import React from 'react'
import style from "./progressBar.module.css"

const ProgressBar = ({fact, planing}) => {
    return(
        <>
        <div >
            <span className={style.progressNumber}>Фактично набраних балів: {fact}</span>
            <span className={style.progressNumber}>/</span>
            <span className={style.progressNumber}>Заплановано балів: {planing}</span>
            <progress max={planing} value={fact}/>

        </div>
        </>
    )
};

export default ProgressBar;