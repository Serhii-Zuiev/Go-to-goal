import React from "react";
import css from "./ModalDeleteTask.module.css";
import ModalBackDrop from "../../../modalBackDrop/ModalBackDrop";

const ModalDeleteTask = ({ handleModalWindow, handleDeleteTask }) => {
  return (
    <div className={css.basicLightbox}>
      <div className={css.modalContent}>
        <h2 className={css.h2}>Дійсно бажаєте видалити завдання?</h2>

        <div className={css.btnConteiner}>
          <button
            className={css.btn}
            type="button"
            onClick={() => handleDeleteTask()}
          >
            ТАК
          </button>
          <button
            className={css.btn + " " + css.btnNo}
            type="button"
            onClick={() => handleModalWindow()}
          >
            НІ
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalBackDrop(ModalDeleteTask);
