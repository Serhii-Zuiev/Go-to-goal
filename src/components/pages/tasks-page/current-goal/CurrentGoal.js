import React, { useState } from 'react';
import s from "./current-goal.module.css";
import { useSelector,useDispatch } from "react-redux";
import {deleteGoal} from '../../../../redux/operations';
import Congratulation from "./../congratulation/Congratulation";

const CurrentGoal = ({ tasks = "Ckju" }) => {
  const  dispatch = useDispatch()
    const [isMenuOpen, setMenuState] = useState(false);
    const token = useSelector((state) => state.userAuthReducer.token);
  const myGoalState = useSelector((state) => state.goalAndTaskReducer.goals[0]);
  const myGoal = myGoalState.title;
  const goalPoints = myGoalState.points;
  const goalId=myGoalState._id
  const userValuePoints = useSelector(
    (state) => state.userAuthReducer.userData.userData.scores
  );
  const donePointsStateInfo = useSelector(
    (state) => state.goalAndTaskReducer.tasks
  );
  const donePoints = donePointsStateInfo
    .filter((status) => status.isDone)
    .reduce((acc, user) => acc + user.points, 0);

  let buttonOff;
  let percent = (userValuePoints / goalPoints) * 100;
  if (percent > 100) {
    buttonOff = "disabled";
  }
  console.log("isMenuOpen", isMenuOpen);
  if (userValuePoints < goalPoints) {
    //  alert('Недостатня кількість балів')
  } else {
    //  alert('you win')
  }
  const openModal = () => {
    setMenuState(!isMenuOpen);
  };
  const  goalOperation =async()=>{
    if(token){
      const data=await dispatch(deleteGoal(token,goalId))
      console.log('dataDELETEGOAL TESTREDUX', data)
    }
  }
  return (
    <>
      {isMenuOpen && <Congratulation target={"писюн и чипсы"} goalOperation={goalOperation} />}
      <div className={s.goal}>
        <div className={s.goalLogo}>
        <p className={s.goalName}> Mоя ціль: </p>
          <button
            type="button"
            // className={percent < 100 ? s.goalBtn : s.goalBtnActive}
            onClick={(openModal)}
            disabled={buttonOff}
          >
            {tasks}
          </button>
        </div>
      </div>
    </>
  );

  // <>
  // <p >Моя мета:<button className={s.buttonCurrent} onClick={getPrize}>{myGoal}</button></p>
  // </>
  // )
};

export default CurrentGoal;
