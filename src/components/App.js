import React from "react";
import styles from "./app.module.css";
import { router } from "../routes/router";
import{TestRedux} from '../redux/textRedux'
import AuthPage from './pages/auth-page/AuthPage'
import TasksPage from './pages/tasks-page/TasksPage'

function App() {

  const routing = router(false);
  return (
    <>
      <div className={styles.appContainer}>
        <AuthPage />
       <TestRedux/>
      </div>
      <TasksPage />
    
      {routing}
      <div className={styles.appContainer}>{routing}</div>
    </>
  );
}

export default App;
