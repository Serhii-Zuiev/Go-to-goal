import React, { Component } from "react";
import moment from "moment";
import { connect } from "react-redux";
import AddTaskBtn from "./add-button/AddTaskBtn";
import TaskModal from "./task-modal/TaskModal";
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
    tasks: [],
    taskIdForDelete: null,
    loadMoreCompletedTasks: false,
    isOpenModalDeleteTask: false,
    isDoneToggle: false,
  };

  componentDidMount() {
    this.props.getTasks(this.props.token);
    this.setState({ tasks: this.props.tasksFromRedux });
    this.completingTasksAt0000();
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
    this.setState({ taskIdForDelete: 1 });
    const { token } = this.props;
    const { deleteTaskInner } = this.props;
    const taskId = this.state.taskIdForDelete;
    deleteTaskInner(token, taskId);
    this.handleModalDeleteTask();
  };
  handleTaskDone = (id, isDone, points) => {
    const { token } = this.props;
    const { modifyTaskInner } = this.props;
    const payload = { isDone: !isDone, points: points };
    modifyTaskInner(token, id, payload);
  };
  handleIsDoneToggle = () => {
    this.setState((prevState) => ({
      isDoneToggle: !prevState.isDoneToggle,
    }));
  };

  completingTasksAt0000 = () => {
    const tasks = this.props.tasksFromRedux;
    const DATE_NOW = moment().format().slice(0, 10);
    const completedTasks = tasks.filter(
      (t) => t.isDone === true && t.createdAt.slice(0, 10) !== DATE_NOW
    );
    if (completedTasks.length > 0) {
      const { token } = this.props;
      const { modifyTaskInner } = this.props;
      const payload = { isComplete: true };

      completedTasks.forEach((task) =>
        modifyTaskInner(token, task._id, payload)
      );
    }
  };

  render() {
    const { isOpenModalWindow, isOpenModalDeleteTask } = this.state;
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
          isDoneToggle={this.state.isDoneToggle}
          handleIsDoneToggle={this.handleIsDoneToggle}
        />

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
