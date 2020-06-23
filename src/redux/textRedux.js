import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {registerUser, newGoal,loginUser,logoutUser,newTask,getTasks, getGoals} from '../redux/operations'



export  const TestRedux=()=>{

    const dispatch=useDispatch()
    const token = useSelector((state) => state.userAuthReducer.userData.token);
    const testUserRegister={
      name: "ffffaaassssa",
      age: 33,
      email: "OneTwo@gmail.com",
      password:"qwerty",
      isChild: true,
      scores: 0,
      avatar:"https://s1.1zoom.ru/prev/581/Love_Heart_Two_580916_600x400.jpg"
  
    }
    const testUserLogin={
      email:"One@gmail.com",
      password:'qwerty'
    }
     async function testRegisterUser(){
      const data= dispatch(registerUser(testUserRegister));
      console.log('dataFromAPPPP', data)
     
    }
    async function testLoginUser(){
      const data=dispatch(loginUser(testUserLogin))
      return data
   
    }
    async function logoutuserTest(){
        if(token){
            const modifyToken=token.slice(7)
            console.log('modifyToken', modifyToken)
        const data=dispatch(logoutUser(modifyToken))
        console.log('dataLLOGOOUT', data)
        return data
        }
    }
    const goal={
        title: "Купи слона,ну епта",
        description: "Мамке купил шубу,а мне слона?",
        dates: [
          "2020-06-18T19:45:34.946Z"
        ],
        points:99
      

    }
    const task={
      title: "Купи слона,ну епта",
      description: "Мамке купил шубу,а мне слона?",
      dates: [
        "2020-06-18T19:45:34.946Z"
      ],
      points:99,
      deadline:'8.00-10.00'

    }
    async function createNewGoal(){
        if(token){
            const modifyToken=token.slice(7)
      const data=dispatch(newGoal(modifyToken,goal))
        }

    }
    async function createNewTask(){
        if(token){
            const modifyToken=token.slice(7)
      const data=dispatch(newTask(modifyToken,task))
        }

    }
async function getAllTasks(){
  if(token){
    console.log('tokenTESXTREDUX', token)
    const modifyToken=token.slice(7)
  const data=dispatch(getTasks(modifyToken))
  }
}
  
async function getAllGoals(){
  if(token){
    console.log('tokenTESXTREDUX', token)
    const modifyToken=token.slice(7)
  const data=dispatch(getGoals(modifyToken))
  }
}
  
  return(
    <>  
    <button onClick={testRegisterUser}>TEST REGISTER</button>
    <button onClick={testLoginUser}>Login user</button>
    <button onClick={logoutuserTest}>LogOut user</button>
    <button onClick={createNewGoal}>Create Goal</button>
    <button onClick={createNewTask}>Create Task</button>
    <button onClick={getAllTasks}>Get all tasks </button>
    <button onClick={getAllGoals}>Get all goals </button>
    </>

  )

}