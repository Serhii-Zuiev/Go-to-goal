import React, { Component } from 'react';
import AddTaskBtn from './add-button/AddTaskBtn';
import ProgressBar from './progress-bar/ProgressBar';
import CurrentGoal from './current-goal/CurrentGoal';


class TasksPage extends Component {
    state = {  }
    render() {
        return <>
            <AddTaskBtn/>
            <ProgressBar planing={150} fact={15}/>
            <CurrentGoal target={'Слон'}/>
            </>
            
    }
}

export default TasksPage;