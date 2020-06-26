import React from "react";
import { useSelector } from "react-redux";
import { router } from "../routes/router";
import { TestRedux } from "../redux/textRedux";

function App() {
  const token = useSelector((state) => state.userAuthReducer.token);
  console.log('token', token)
  const routing = router(token);
  return (
    <>
    <TestRedux></TestRedux>
      {routing}
    </>
  );
}

export default App;
