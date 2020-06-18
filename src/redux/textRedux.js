import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {registerUser} from '../redux/operations'
import {loginUser} from '../redux/operations' 
import {logoutUser} from '../redux/operations' 


export  const TestRedux=()=>{

    const dispatch=useDispatch()
    const token = useSelector((state) => state.userAuthReducer.userData.token);
    const testUserRegister={
      name: "ffffaaassssa",
      age: 33,
      email: "OldanewdsdsOne@gmail.com",
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
      return data
   
    }
    async function logoutuserTest(){
        if(token){
        const data=dispatch(logoutUser(token))
        return data
        }
    }
    console.log('token', token)
  
  return(
    <>  
    <button onClick={testRegisterUser}>TEST REGISTER</button>
    <button onClick={testLoginUser}>Login user</button>
    <button onClick={logoutuserTest}>LogOut user</button>
    </>

  )

}