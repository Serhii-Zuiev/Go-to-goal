import React from "react";
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
