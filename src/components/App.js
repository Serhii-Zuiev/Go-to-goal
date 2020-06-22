import React from "react";
import { router } from "../routes/router";
import{TestRedux} from '../redux/textRedux'


function App() {

  const routing = router(false);
  return (
    <>
<<<<<<< HEAD
    <TestRedux/>
      <div className={styles.appContainer}>{routing}</div>
=======
    {/* <TestRedux/> */}
      {routing}
>>>>>>> dev
    </>
  );
}

export default App;
