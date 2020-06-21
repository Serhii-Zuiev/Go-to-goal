import React from "react";
import styles from "./app.module.css";
import { router } from "../routes/router";
import{TestRedux} from '../redux/textRedux'


function App() {

  const routing = router(false);
  return (
    <>
    {/* <TestRedux/> */}
      {routing}
    </>
  );
}

export default App;
{/* <div className={styles.appContainer}>{routing}</div> */}