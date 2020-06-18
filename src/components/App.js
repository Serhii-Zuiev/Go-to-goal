import React from "react";
import styles from "./app.module.css";
import AuthPage from "./pages/auth-page/AuthPage";
import TasksPage from "./pages/tasks-page/TasksPage";
import { router } from "../routes/router";

function App() {
  // const token = useSelector((state) => state.user.userToken);
  const routing = router(false);
  return (
    <>
      <div className={styles.appContainer}>
        <AuthPage />
      </div>
      <TasksPage />
      {routing}
    </>
  );
}

export default App;
