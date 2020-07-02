import React from 'react'
import ProgressBarRender from './ProgressBarRender'
import { useSelector } from 'react-redux';


const ProgressBar = () => {
    const pointsOfGoal=useSelector(state=>state.goalAndTaskReducer.progressPoints) //вместо  индекса может быть id goal
    // console.log('pointsOfGoal', pointsOfGoal)
    const donePointsStateInfo=useSelector(state=>state.goalAndTaskReducer.score)
    return(
        <>
     <ProgressBarRender fact={ donePointsStateInfo} planing={pointsOfGoal}/>
        </>
    )
};

export default ProgressBar;