import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/operations";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const HandleLogOut = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.userAuthReducer.token);
  function handleLogOut() {
    dispatch(logoutUser(token));
    history.push("/");
    localStorage.clear();
  }
// eslint-disable-next-line
  return handleLogOut(), (<></>);
};

export default HandleLogOut;
