import React, { Component } from "react";
import { connect } from "react-redux";
import AddTaskBtn from "./add-button/AddTaskBtn";
import TaskModal from "./task-modal/TaskModal";
import Congratulation from "./congratulation/Congratulation";
import CurrentTasks from "./currentTasks/сurrentTasks";
import CompletedTasks from "./completedTasks/CompletedTasks";
import Header from "../../header/Header";
import { newTask, getTasks } from "./../../../redux/operations";

class TasksPage extends Component {
  state = {
    isOpenModalWindow: false,
    addTasks: [],
    isTake: false,
    tasks: [],
    loadMoreCompletedTasks: false,
  };

  componentDidMount() {
    this.props.getTasks(this.props.token);
    this.setState({ tasks: this.props.tasksFromRedux });
  }

  handleOpenModalWindow = (e) => {
    this.setState({ isOpenModalWindow: true });
  };
  handleCloseModalWindow = (e) => {
    this.setState({ isOpenModalWindow: false });
  };
  loadMoreCompleteTasks = () => {
    this.setState((prevState) => ({
      loadMoreCompletedTasks: !prevState.loadMoreCompletedTasks,
    }));
  };
  handleFormforUsers = (tasks) => {
    const { newTask } = this.props;
    const { token } = this.props; 
    newTask(token, tasks);
  };

  currentTasksFilter() {
    const tasks = this.state.tasks || []
    if(tasks.length > 0){
      const currentTasks = tasks.filter((task) => task.isComplete === false);
      return currentTasks;
    }
    return []
  }

  completeTasksFilter() {
    const tasks = this.state.tasks || []
    if(tasks.length > 0){
      const completeTasks = tasks.filter((task) => task.isComplete === true);
      return completeTasks;
    }
    return []
  }

  render() {
    const { isOpenModalWindow, isTake } = this.state;
    return (
      <>
        <Header pageOfHeader={"tasks"} />
        {isOpenModalWindow && (
          <TaskModal handleFormforUsers={this.handleFormforUsers} handleCloseModalWindow={this.handleCloseModalWindow}/>
        )}
        <AddTaskBtn handleOpenModalWindow={this.handleOpenModalWindow} />
        <CurrentTasks cardlist={this.currentTasksFilter()} />
        {isTake && <Congratulation target={"ckjy"} />}
        <CompletedTasks
          cardlist={this.completeTasksFilter()}
          loadMore={this.loadMoreCompleteTasks}
          loadMoreFlag={this.state.loadMoreCompletedTasks}
        />
      </>
    );
  }
}

const mapsStateToProps = (state) => ({
  token: state.userAuthReducer.token,
  tasksFromRedux: state.goalAndTaskReducer.tasks,
});
const tasksNew = { newTask, getTasks };
export default connect(mapsStateToProps, tasksNew)(TasksPage);
