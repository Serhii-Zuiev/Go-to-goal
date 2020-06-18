import React from "react";
import styles from "./app.module.css";
import AuthPage from "./pages/auth-page/AuthPage";
import TasksPage from "./pages/tasks-page/TasksPage";
import { router } from "../routes/router";
import{TestRedux} from '../redux/textRedux'


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
    </>
  );
}

export default App;
