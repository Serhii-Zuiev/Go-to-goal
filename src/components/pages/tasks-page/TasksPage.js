import React, { Component } from 'react';
import AddTaskBtn from './add-button/AddTaskBtn';
import ProgressBar from './progress-bar/ProgressBar';
import CurrentGoal from './current-goal/CurrentGoal';
import TaskModal from './task-modal/TaskModal';
import Congratulation from './congratulation/Congratulation';


class TasksPage extends Component {
    state = {  }
    render() {
        return <>
            <TaskModal/>
            <AddTaskBtn/>
            <ProgressBar planing={150} fact={15}/>
            <CurrentGoal target={'Слон'}/>
            <Congratulation target={'Слон'}/>
            </>
            
    }
}

export default TasksPage;