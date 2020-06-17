import React from "react";
import styles from "./app.module.css";
import TasksPage from "./pages/tasks-page/TasksPage";

function App() {
  return(
  <>
    <div className={styles.appContainer}>Privet!!!</div>
    <TasksPage/>
  </>
  )
}

export default App;
