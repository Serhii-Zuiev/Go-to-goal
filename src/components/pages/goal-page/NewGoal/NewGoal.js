import React from "react";
import styles from "./NewGoal.module.css";
import { ReactComponent as AddPlusButton } from "../../../../assets/images/icons/plus/add-plus-button.svg";
import Header from "../../../header/Header";
import { useState, useEffect } from "react";
import CreateGoalModal from "../CreateGoalModal/CreateGoalModal";
import GoalCard from "../goalCard/GoalCard";
import { useSelector, useDispatch } from "react-redux";
import Footer from "../../../footer/Footer";
import { getGoals } from "../../../../redux/operations";

const NewGoal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.userAuthReducer.token);
  const goals = useSelector((state) => state.goalAndTaskReducer.goals);
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

useEffect(() => {
  dispatch(getGoals(token));
}, [])

  return (
    <>
      <Header pageOfHeader={"goals"} />

      {isModalOpen && <CreateGoalModal handleCloseModal={handleCloseModal} />}

      <div className={styles.new_goal_section}>
        <div className={styles.container}>
          <ul className={styles.GoalsList}>
            {goals.length > 0 &&
              goals.map((goal) => (
                <li key={goal._id} className={styles.GoalListItem}>
                  <GoalCard
                    title={goal.title}
                    points={goal.points}
                    goalId={goal._id}
                  />
                </li>
              ))}
            <li className={styles.GoalListItem}>
              <button
                type="button"
                className={styles.button}
                onClick={() => setIsModalOpen(true)}
              >
                <div className={styles.button_overlay}>
                  <div className={styles.button_icon}>
                    <AddPlusButton className={styles.icon} />
                  </div>
                </div>
                <p className={styles.button_text}> Додай мету</p>
              </button>
            </li>
          </ul>

          {goals.length === 0 && (
            <div className={styles.new_goal_info}>
              <p className={styles.p}>
                Cпочатку вам треба узгодити ціль, після чого можна буде
                слідкувати за прогресом виконання.
              </p>
              <p className={styles.p}>Подобається ідея?</p>
              <p className={styles.arrow_icon}>
                Тоді не барись, а натискай на кнопку!
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewGoal;
