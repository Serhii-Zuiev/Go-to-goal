import React from "react";
import { useSelector } from "react-redux";
import { router } from "../routes/router";
// eslint-disable-next-line
import { TestRedux } from "../redux/textRedux";

function App() {
  const token = useSelector((state) => state.userAuthReducer.token);
  const routing = router(token);
  return (
    <>
      {/* <TestRedux></TestRedux> */}
      {routing}
    </>
  );
}

export default App;
