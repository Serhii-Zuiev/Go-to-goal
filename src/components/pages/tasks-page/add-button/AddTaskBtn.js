import React from 'react'
import s from "./style.module.css"

export const AddTaskBtn = ({ handleOpenModalWindow }) => {

    return (
    <>
        <button onClick={handleOpenModalWindow} className={s.addTaskBtn}>
            +
        </button>
    </>)
  };

  export default AddTaskBtn;