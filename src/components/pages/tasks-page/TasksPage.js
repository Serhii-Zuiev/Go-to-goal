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
import ProgressBar from "./progress-bar/ProgressBar";
import {
  newTask,
  getTasks,
  getGoals,
  deleteTaskInner,
  modifyTaskInner,
} from "./../../../redux/operations";
import CurrentProgress from "../../mergeCurrent-Progress/CurrentProgress";
const IS_MOBILE_VERSION = window.innerWidth < 768;
const IS_TABLET_VERSION = window.innerWidth > 767 && window.innerWidth < 1200;

class TasksPage extends Component {
  state = {
    isOpenModalWindow: false,
    addTasks: [],
    taskIdForDelete: null,
    loadMoreCompletedTasks: false,
    isOpenModalDeleteTask: false,
    isDoneToggle: false,
  };

  componentDidMount() {
    this.props.getTasks(this.props.token);
    this.props.getGoals(this.props.token);
    this.doneTasksAt0000();
    this.deleteUncompleteTasksAt0000();
  }

  doneTasksAt0000 = () => {
    const tasks = this.props.tasksFromRedux;
    const DATE_NOW = moment().format().slice(0, 10);
    const completedTasks = tasks.filter(
      (t) =>
        t.isComplete === true &&
        t.createdAt.slice(0, 10) !== DATE_NOW &&
        t.isDone === false
    );
    if (completedTasks.length > 0) {
      const { token } = this.props;
      const { modifyTaskInner } = this.props;
      completedTasks.forEach((task) =>
        modifyTaskInner(token, task._id, { isDone: true })
      );
    }
  };

  deleteUncompleteTasksAt0000 = () => {
    const tasks = this.props.tasksFromRedux;
    const DATE_NOW = moment().format().slice(0, 10);
    const taskForDelete = tasks.filter(
      (t) => t.isComplete === false && t.createdAt.slice(0, 10) !== DATE_NOW
    );
    if (taskForDelete.length > 0) {
      const { token } = this.props;
      const { deleteTaskInner } = this.props;
      taskForDelete.forEach((task) => deleteTaskInner(token, task._id));
    }
  };

  handleOpenModalWindow = () => {
    this.setState({ isOpenModalWindow: true });
  };
  handleCloseModalWindow = () => {
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
    const tasks = this.props.tasksFromRedux;
    if (tasks.length > 0) {
      const currentTasks = tasks.filter((t) => t.isDone === false);
      return currentTasks;
    }
    return [];
  }

  completeTasksFilter() {
    const tasks = this.props.tasksFromRedux;
    if (tasks.length > 0) {
      const completedTasks = tasks.filter((t) => t.isDone === true);
      return completedTasks;
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
  handleTaskDone = (id, isDone, isComplete) => {
    const { token } = this.props;
    const { modifyTaskInner } = this.props;
    const payload = { isComplete: !isComplete };
    modifyTaskInner(token, id, payload);
  };
  handleIsDoneToggle = () => {
    this.setState((prevState) => ({
      isDoneToggle: !prevState.isDoneToggle,
    }));
  };

  render() {
    const { isOpenModalWindow, isOpenModalDeleteTask } = this.state;
    return (
      <>
        <Header
          pageOfHeader={"tasks"}
          handleOpenModalWindow={this.handleOpenModalWindow}
        />
        {IS_TABLET_VERSION && <ProgressBar />}
        {isOpenModalWindow && (
          <TaskModal
            handleFormforUsers={this.handleFormforUsers}
            handleCloseModalWindow={this.handleCloseModalWindow}
          />
        )}
        {IS_MOBILE_VERSION && (
          <AddTaskBtn handleOpenModalWindow={this.handleOpenModalWindow} />
        )}
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
        {IS_MOBILE_VERSION && <CurrentProgress />}
        {IS_MOBILE_VERSION ? (
          <div style={{ paddingBottom: "106px" }}>
            <Footer />
          </div>
        ) : (
          <Footer />
        )}
      </>
    );
  }
}

const MSTP = (state) => ({
  token: state.userAuthReducer.token,
  tasksFromRedux: state.goalAndTaskReducer.tasks,
});
const MDP = { newTask, getTasks, deleteTaskInner, modifyTaskInner, getGoals };
export default connect(MSTP, MDP)(TasksPage);
