import React, { Component } from "react";
import AddTaskBtn from "./add-button/AddTaskBtn";
import ProgressBar from "./progress-bar/ProgressBar";
import CurrentGoal from "./current-goal/CurrentGoal";
import TaskModal from "./task-modal/TaskModal";
import Congratulation from "./congratulation/Congratulation";
import CurrentTasks from "./currentTasks/currentTasks";
import Header from '../../header/Header'

class TasksPage extends Component {
  state = {};
  render() {
    return (
      <>
        <Header pageOfHeader={"tasks"}/>
        <TaskModal />
        <AddTaskBtn />
        <ProgressBar planing={150} fact={15} />
        <CurrentGoal target={"Слон"} />
        <CurrentTasks
          cardlist={[{ name: "Карточка-1" }, { name: "Карточка-2" }]}
        />
        <Congratulation target={"Слон"} />
      </>
    );
  }
}

export default TasksPage;
