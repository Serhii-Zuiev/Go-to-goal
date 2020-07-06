import React from "react";
import style from "./progressBar.module.css";

const ProgressBarRender = ({ fact, planing }) => {
  return (
    <>
      <div className={style.progress}>
        <span className={style.progressScore}>{fact || 0}</span>
        <span className={style.progressScore}>/</span>
        <span className={style.progressScore}>{planing || 0}</span>
        <progress max={planing} value={fact} className={style.progresBar} />
      </div>
    </>
  );
};

export default ProgressBarRender;
