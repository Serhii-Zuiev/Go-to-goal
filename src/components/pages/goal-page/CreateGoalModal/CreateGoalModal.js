import React, { useEffect, useState, useRef } from "react";
import styles from "./CreateGoalModal.module.css";

const initialState = {
  goal: "",
  goalPoints: ""
};

export const CreateGoalModal = ({ closeModal }) => {
  const backdropRef = useRef(null);
  const [state, setState] = useState(initialState);

  const keyDownHandler = e => {
    if (e.code === "Escape") {
      closeModal();
    }

    if (e.target !== e.currentTarget) {
      return;
    }
    closeModal();
  };

  useEffect(() => {
    window.addEventListener("keydown", keyDownHandler);

    return () => {
      window.removeEventListener("keydown", keyDownHandler);
    };
  });

  const handleSubmit = e => {
    e.preventDefault();
    onHandleNewGoal(state)
    closeModal();
  };

  return (
    <div ref={backdropRef} className={styles.backdrop} onClick={keyDownHandler}>
      <div className={styles.modal}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.label}>
               Що я хочу
            <input
              className={styles.input}
              onChange={e => setState({ ...state, goal: e.target.value })}
              type="text"
              required
              pattern="^[A-Za-zА-Яа-яЁё\s]+$"
              name="goal"
              placeholder="Дай своїй цілі назву"
              value={state.goal}
              minLength="3"
              maxLength="20"
            />
            </label>
            <label className={styles.label}>
               Скільки балів треба набрати
            <input
              className={styles.input}
              onChange={e =>
                setState({ ...state, goalPoints: Number(e.target.value) })
              }
              type="number"
              min="1"
              max="9999"
              name="goalPoints"
              placeholder="Наприклад: 1000"
              required
              value={state.goalPoints}
            />
            </label>
            <p className={styles.text}>
            Дай цілі назву та вибери при якій кількості балів ціль буде
            вважатися досягнутою
            </p>
            <button className={styles.button} type="submit">
              Ок
            </button>
          </form>
    
      </div>
    </div>
  );
};