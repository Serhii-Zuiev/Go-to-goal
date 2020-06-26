import React, { Component } from "react";
import {connect} from "react-redux"
import AddTaskBtn from "./add-button/AddTaskBtn";
import ProgressBar from "./progress-bar/ProgressBar";
import CurrentGoal from "./current-goal/CurrentGoal";
import TaskModal from "./task-modal/TaskModal";
import Congratulation from "./congratulation/Congratulation";
import CurrentTasks from "./currentTasks/сurrentTasks";
import CardList from "./cardList/CardList";
import CompletedTasks from "./completedTasks/CompletedTasks";
import Header from "../../header/Header";
import { newTask } from './../../../redux/operations';


class TasksPage extends Component {
  state = {
    isOpenModalWindow:false,
    addTasks:[],
    isTake:false,
  };
  handleChangeModalWindow=e=>{
    const {isOpenModalWindow}=this.state
    this.setState({isOpenModalWindow:true})
  }
  handleFormforUsers = (e, tasks) => {
    e.preventDefault();
    const { newTask } = this.props;
    const{token}=this.props
    newTask(token, tasks);
  
  };
  render() {
    const {isOpenModalWindow, isTake}=this.state
    return (
      <>
        <Header pageOfHeader={"tasks"} />
        {isOpenModalWindow  && <TaskModal handleFormforUsers={this.handleFormforUsers}/>}
        <AddTaskBtn handleChangeModalWindow={this.handleChangeModalWindow}/>
        <CurrentTasks cardlist={true} />
        {isTake && <Congratulation target={"ckjy"}/>}
        <CompletedTasks/>
      </>
    );
  }
}
const mapsStateToProps=state=>({
  token:state.userAuthReducer.token
})
const tasksNew={newTask}
export default connect(mapsStateToProps, tasksNew)(TasksPage);
