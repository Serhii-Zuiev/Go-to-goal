import React, { Component } from "react";
import { connect } from "react-redux";
import AddTaskBtn from "./add-button/AddTaskBtn";
import TaskModal from "./task-modal/TaskModal";
import Congratulation from "./congratulation/Congratulation";
import CurrentTasks from "./currentTasks/сurrentTasks";
import CompletedTasks from "./completedTasks/CompletedTasks";
import ModalDeleteTask from "./ModalDeleteTask/ModalDeleteTask";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import {
  newTask,
  getTasks,
  deleteTaskInner,
  modifyTaskInner,
} from "./../../../redux/operations";

class TasksPage extends Component {
  state = {
    isOpenModalWindow: false,
    addTasks: [],
    isTake: false,
    tasks: [],
    taskIdForDelete: null,
    loadMoreCompletedTasks: false,
    isOpenModalDeleteTask: false,
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
    console.log((token, tasks));
    newTask(token, tasks);
  };

  currentTasksFilter() {
    const tasks = this.props.tasksFromRedux;
    if (tasks.length > 0) {
      const currentTasks = tasks.filter((task) => task.isComplete === false);
      return currentTasks;
    }
    return [];
  }

  completeTasksFilter() {
    const tasks = this.props.tasksFromRedux;
    if (tasks.length > 0) {
      const completeTasks = tasks.filter((task) => task.isComplete === true);
      return completeTasks;
    }
    return [];
  }

  handleModalDeleteTask = (id) => {
    id && this.setState({ taskIdForDelete: id });
    this.setState((prevState) => ({
      isOpenModalDeleteTask: !prevState.isOpenModalDeleteTask,
    }));
  };

  handleDeleteTask = () => {
    const { token } = this.props;
    const { deleteTaskInner } = this.props;
    const taskId = this.state.taskIdForDelete;
    deleteTaskInner(token, taskId);
    this.handleModalDeleteTask();
  };
  handleTaskDone = (id, isDone, points) => {
    console.log(id, isDone);
    // let togglePoints = -100;
    // if (isDone) {
    //   togglePoints = -points;
    // }
    // console.log(togglePoints);
    const { token } = this.props;
    const { modifyTaskInner } = this.props;
    const payload = { isDone: !isDone, points: points, isComplete: true };
    modifyTaskInner(token, id, payload);
  };

  render() {
    const { isOpenModalWindow, isTake, isOpenModalDeleteTask } = this.state;
    return (
      <>
        <Header pageOfHeader={"tasks"} />
        {isOpenModalWindow && (
          <TaskModal
            handleFormforUsers={this.handleFormforUsers}
            handleCloseModalWindow={this.handleCloseModalWindow}
          />
        )}
        <AddTaskBtn handleOpenModalWindow={this.handleOpenModalWindow} />
        <CurrentTasks
          cardlist={this.currentTasksFilter()}
          handleModalWindow={this.handleModalDeleteTask}
          handleTaskDone={this.handleTaskDone}
        />
        {isTake && <Congratulation target={"ckjy"} />}
        <CompletedTasks
          cardlist={this.completeTasksFilter()}
          loadMore={this.loadMoreCompleteTasks}
          handleModalWindow={this.handleModalDeleteTask}
          loadMoreFlag={this.state.loadMoreCompletedTasks}
        />
        {isOpenModalDeleteTask && (
          <ModalDeleteTask
            handleModalWindow={this.handleModalDeleteTask}
            handleDeleteTask={this.handleDeleteTask}
          />
        )}
        <Footer />
      </>
    );
  }
}

const mapsStateToProps = (state) => ({
  token: state.userAuthReducer.token,
  tasksFromRedux: state.goalAndTaskReducer.tasks,
});
const tasksNew = { newTask, getTasks, deleteTaskInner, modifyTaskInner };
export default connect(mapsStateToProps, tasksNew)(TasksPage);
