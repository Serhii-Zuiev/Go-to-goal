import React from "react";
import { useSelector } from "react-redux";
import { router } from "../routes/router";

function App() {
  const token = useSelector((state) => state.userAuthReducer.token);
  const routing = router(token);
  return <>{routing}</>;
}

export default App;
