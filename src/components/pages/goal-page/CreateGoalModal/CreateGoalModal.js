import React, { useState } from "react";
import styles from "./CreateGoalModal.module.css";
import { useSelector, useDispatch } from "react-redux";
import { newGoal } from "../../../../redux/operations";
import ModalBackDrop from "../../../modalBackDrop/ModalBackDrop";

const initialState = {
  title: "",
  points: "",
};

const CreateGoalModal = ({ handleCloseModal }) => {
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.userAuthReducer.token);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(newGoal(token, state));
    handleCloseModal();
  };

  return (
    <div className={styles.modal}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          Що я хочу
          <input
            className={styles.input}
            onChange={(e) => setState({ ...state, title: e.target.value })}
            type="text"
            required
            // pattern="^[A-Za-zА-Яа-яЁё\s]+$"
            name="goal"
            placeholder="Дай своїй цілі назву"
            value={state.title}
            minLength="3"
            maxLength="20"
          />
        </label>
        <label className={styles.label}>
          Скільки балів треба набрати
          <input
            className={styles.input}
            onChange={(e) =>
              setState({ ...state, points: Number(e.target.value) })
            }
            type="number"
            min="1"
            max="10000"
            name="goalPoints"
            placeholder="Наприклад: 1000"
            required
            value={state.points}
          />
        </label>
        <p className={styles.text}>
          Дай цілі назву та вибери при якій кількості балів ціль буде вважатися
          досягнутою
        </p>
        <button className={styles.button} type="submit">
          Ок
        </button>
      </form>
    </div>
  );
};

export default ModalBackDrop(CreateGoalModal);
