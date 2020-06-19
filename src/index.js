import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/index.css";
<<<<<<< HEAD
import App from './components/App';
import {store} from './redux/store'
import { Provider } from "react-redux";
=======
import App from "./components/App";
>>>>>>> dev
import { BrowserRouter, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter>
<<<<<<< HEAD
    <Provider store={store}>
      <Route component={App} />
    </Provider>
=======
    {/* <Provider store={store}> */}
    <Route component={App} />
    {/* </Provider> */}
>>>>>>> dev
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
