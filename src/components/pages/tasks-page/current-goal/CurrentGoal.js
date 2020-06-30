import React, {useState} from 'react';
import s from './current-goal.module.css';
import {useSelector} from "react-redux";

import Congratulation from './../congratulation/Congratulation';

const CurrentGoal = ({tasks="Ckju"}) => {

    const myGoalState=useSelector(state=>state.goalAndTaskReducer.goals[0]) //вместо  индекса может быть id goal
    const myGoal=myGoalState.title
    const goalPoints=myGoalState.points
    const userValuePoints=useSelector(state=>state.userAuthReducer.userData.userData.scores) //вместо  индекса может быть id goal
    // const donePointsStateInfo=useSelector(state=>state.goalAndTaskReducer.tasks)
    // const donePoints=donePointsStateInfo.filter(status=>status.isDone).reduce((acc,user)=>acc+user.points,0)

console.log('myGoalState',myGoalState)
 console.log('goalPoints', goalPoints)
 console.log('userValuePoints', userValuePoints)
 
     let buttonOff;
     let percent = userValuePoints/goalPoints *100
     if(percent>100){
        buttonOff='disabled'
     }
     const [isMenuOpen, setMenuState] = useState(false);
     const openModal = () => {
       setMenuState(!isMenuOpen);
     };

//      if(userValuePoints<goalPoints){
//          alert('Недостатня кількість балів')
//      }
//      else{
         
//          alert('you win')
//      }

//  }
    return(
      <>
        {/* <Congratulation/> */}
    <div className={s.goal}>
      <div className={s.goalLogo}>
        <p className={s.goalName}> Mоя ціль:</p>
        <button
          type="button"
          className={percent<100 ? s.goalBtn : s.goalBtnActive}
          onClick={openModal()}
          disabled={buttonOff}
        > 
          {tasks}
        </button>
        {/* {isMenuOpen && (<Congratulation target={"hello"}/>)} */}
      </div>
    </div>
    </>
  );
};

        // <>
        // <p >Моя мета:<button className={s.buttonCurrent} onClick={getPrize}>{myGoal}</button></p>
        // </>
    // )
export default CurrentGoal;
