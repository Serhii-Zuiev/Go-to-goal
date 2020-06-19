import React from "react";
import styles from "./app.module.css";
import { router } from "../routes/router";

function App() {
  // const token = useSelector((state) => state.user.userToken);
  const routing = router(false);
  return (
    <>
      <div className={styles.appContainer}>{routing}</div>
    </>
  );
}

export default App;
