import React, { useState } from 'react';
import s from "./current-goal.module.css";
import { useSelector,useDispatch } from "react-redux";
<<<<<<< HEAD
import {deleteGoal} from '../../../../redux/operations'

import { newScoreCreater } from "../../../../redux/operations";

=======
import {deleteGoal} from '../../../../redux/operations';
>>>>>>> 39ba47d33dcf05221a0b0dba7434e3a7f44fc3b8
import Congratulation from "./../congratulation/Congratulation";

const CurrentGoal = ({ tasks = "Ckju" }) => {
  const  dispatch = useDispatch()
    const [isMenuOpen, setMenuState] = useState(false);
    const token = useSelector((state) => state.userAuthReducer.token);


  const myGoalState = useSelector((state) => state.goalAndTaskReducer.goals[0]);
  const myGoal = myGoalState.title;
  const goalPoints = myGoalState.points;
  const goalId=myGoalState._id
  const donePointsStateInfo = useSelector(
    (state) => state.goalAndTaskReducer.score
  );
  const userValuePoints = donePointsStateInfo;
  const newScore = userValuePoints - goalPoints;

  async function createNewScore() {
    if (token) {
      const data = await dispatch(newScoreCreater(newScore));
    }
  }
  const openModal = () => {
    setMenuState(!isMenuOpen);
  };

  let buttonOff;
  let percent = (userValuePoints / goalPoints) * 100;
<<<<<<< HEAD
  // if (percent > 100) {
  //   buttonOff = "disabled";
  // }


  const getPrize = () => {
    if (userValuePoints < goalPoints) {
      alert("need more points");
    } else {
      createNewScore();
      openModal()
   
 
    }
  };



=======
  if (percent > 100) {
    buttonOff = "disabled";
  }
>>>>>>> 39ba47d33dcf05221a0b0dba7434e3a7f44fc3b8
  console.log("isMenuOpen", isMenuOpen);
  if (userValuePoints < goalPoints) {
    //  alert('Недостатня кількість балів')
  } else {
    //  alert('you win')
  }

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
            className={percent < 100 ? s.goalBtn : s.goalBtnActive}
            onClick={( getPrize)}
            disabled={buttonOff}
          >
           {myGoal}
          </button>
        </div>
      </div>
    </>
  );
  }
  export default CurrentGoal
  // <>
  // <p >Моя мета:<button className={s.buttonCurrent} onClick={getPrize}>{myGoal}</button></p>
  // </>
  // )




 






 
