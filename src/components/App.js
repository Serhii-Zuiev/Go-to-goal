import React from "react";
import {useDispatch} from 'react-redux'
import styles from "./app.module.css";
import AuthPage from "./pages/auth-page/AuthPage";
import TasksPage from "./pages/tasks-page/TasksPage";
import { router } from "../routes/router";
import {registerUser} from '../redux/operations'
import {loginUser} from '../redux/operations'

function App() {
  const dispatch=useDispatch()
  // const token = useSelector((state) => state.user.userToken);
  const testUserRegister={
    name: "ffffaaassssa",
    age: 33,
    email: "OldaOne@gmail.com",
    password:"qwerty",
    isChild: true,
    scores: 0,
    avatar:"https://s1.1zoom.ru/prev/581/Love_Heart_Two_580916_600x400.jpg"

  }
  const testUserLogin={
    email:"OldOne@gmail.com",
    password:'qwerty'
  }
   async function testRegisterUser(){
    const data= dispatch(registerUser(testUserRegister));
    console.log('dataFromAPPPP', data)
   
  }
  async function testLoginUser(){
    const data=dispatch(loginUser(testUserLogin))
    console.log('dataLOGINUSER', data)
  }

  const routing = router(false);
  return (
    <>
      <div className={styles.appContainer}>
        <AuthPage />
        <button onClick={testRegisterUser}>TEST REGISTER</button>
        <button onClick={testLoginUser}>Login user</button>
      </div>
      <TasksPage />
    
      {routing}
    </>
  );
}

export default App;
