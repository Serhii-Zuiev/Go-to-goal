import React from 'react'
import style from "./progressBar.module.css"

const ProgressBarRender = ({fact, planing}) => {
    return(
        <>
        <div >
            <span className={style.progressNumber}>{fact || 0}</span>
            <span className={style.progressNumber}>/</span>
            <span className={style.progressNumber}>{planing || 0}</span>
            <progress max={planing} value={fact}/>
        </div>
        </>
    )
};

export default ProgressBarRender;