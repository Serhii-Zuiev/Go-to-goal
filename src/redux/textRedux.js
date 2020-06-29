import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {registerUser, newGoal,loginUser,logoutUser,newTask,getTasks, getGoals,modifyTaskInner,doneGoal,deleteGoal,deleteTaskInner} from '../redux/operations'
import { NavLink } from 'react-router-dom'



export  const TestRedux=()=>{

 
  const taskId="5ef5f755a38c720d8b9837e3"
  const goalId="5ef5f76ea38c720d8b9837e4"
    const dispatch=useDispatch()
    const token = useSelector((state) => state.userAuthReducer.token);
    const testUserRegister={
      name: "ffffaaassssa",
      age: 33,
      email: "OneTwoThree@gmail.com",
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
    const modtask={
      title:'KERAT',
      isDone:true,
      points:7
    }
    const DONETASK={
    
      isDone:true,
      points:99
    }
 
    const task={
      title: "NEED MORE ZIGGURATES",
      description: "WTF?",
      dates: [
        "2020-06-18T19:45:34.946Z"
      ],
      points:2,
      deadline:'10.00-12.00'

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
      console.log('dataCreaterTask', data)
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
async function modifyTask(){
  if(token){

const data= await dispatch(modifyTaskInner(token,taskId,modtask))
console.log('dataMODIFYTASK', data)
  }


}
async function doneTest(){
  if(token)
  {
    const data=await dispatch(doneGoal(token,goalId,DONETASK))
     await console.log('DONETASK-----------------------------------', data)
  }
}
  async function delGoal(){
    if(token){
      const data=await dispatch(deleteGoal(token,goalId))
      console.log('dataDELETEGOAL TESTREDUX', data)
    }
  }
  async function delTask(){
    if(token){
      const data=await dispatch(deleteTaskInner(token,taskId))
   
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
    <button onClick={modifyTask}>ModifyTask </button>
    <button onClick={doneTest}>IS DONE </button>
    <button onClick={delGoal}>DELETE GOAL </button>
    <button onClick={delTask}>DELETE TASK </button>
    <NavLink to='/tasks'>TASKS</NavLink>
    <NavLink to='/auth/logout'>LogOut</NavLink>

    </>

  )

}