import React from 'react'
import ProgressBarRender from './ProgressBarRender'
import { useSelector } from 'react-redux';


const ProgressBar = () => {
    const pointsOfGoal=useSelector(state=>state.goalAndTaskReducer?.goals[0]?.points) //вместо  индекса может быть id goal
    const donePointsStateInfo=useSelector(state=>state.goalAndTaskReducer.score)
    return(
        <>
     <ProgressBarRender fact={ donePointsStateInfo} planing={pointsOfGoal}/>
        </>
    )
};

export default ProgressBar;