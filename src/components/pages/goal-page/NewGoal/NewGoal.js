import React from 'react';
import styles from './NewGoal.module.css';
import { ReactComponent as AddPlusButton } from '../../../../assets/images/icons/plus/add-plus-button.svg';


const NewGoal = ({ openModal }) => {
  return (
    <div className={styles.new_goal_section}>
      <h2 className={styles.new_goal_title}>Моя ціль</h2>
      <div className={styles.container}>
        <button type="button" className={styles.button} onClick={openModal}>
          <div className={styles.button_overlay}>
            <div className={styles.button_icon}>
              <AddPlusButton className={styles.icon} />
            </div>
          </div>
          <p className={styles.button_text}> Додай мету</p>
        </button>
        <div className={styles.new_goal_info}>
          <p className={styles.p}>
            Cпочатку вам треба узгодити ціль, після чого можна буде слідкувати
            за прогресом виконання.
          </p>
          <p className={styles.p}>Подобається ідея?</p>
          <p className={styles.arrow_icon}>
            Тоді не барись, а натискай на кнопку!
          </p>
        </div>
      </div>
    </div>
  );
};



export default NewGoal;
