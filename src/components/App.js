import React from "react";
import styles from "./app.module.css";
import AuthPage from "./pages/auth-page/AuthPage";
import TasksPage from "./pages/tasks-page/TasksPage";

function App() {
  return (
    <>
      <div className={styles.appContainer}>
        <AuthPage />
      </div>
      <TasksPage />
    </>
  );
}

export default App;
