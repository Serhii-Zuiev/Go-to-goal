import axios from "axios";
import { isAlert } from '../redux/actions'
import {store} from '../redux/store'


const BASE_URL = "https://go-to-goal.goit.co.ua/api";

// AUTH --------
// const user={
//   email: "sdaa@gmail.com",
//   password: "password",
//   name: "fifi",
//   age: 26,
//   avatar: "https://gravatar.com/asgklasgw",
//   isChild: true
// }
async function registerUser(user) {
  try {
    const response = await axios({
      url: `${BASE_URL}/auth/register`,
      method: "post",
      headers: { "content-type": "application/json" },
      data: user,
    });
    return response.data;
  } catch (error) {
    console.warn(error);
  }
}

// const user = {
//   email: "sdaa@gmail.com",
//   password: "password"
// }
async function loginUser(user) {
  try {
    const response = await axios({
        url: `${BASE_URL}/auth/login`,
        method: "post",
        headers: { "content-type": "application/json" },
        data: user,
      });
      return response.data;
  } catch (error) {
    console.warn(error);
    setTimeout(() => {
      store.dispatch(isAlert(false))
    }, 3000);
  }
}

async function logoutUser(token) {
   try {
    const response = await axios({
        url: `${BASE_URL}/auth/logout`,
        method: "post",
        headers: { 
          "content-type": "application/json",
          "Authorization" : `Bearer ${token}` },
      });
   
      return response.data;
   } catch (error) {
    console.warn(error);
   } 
}
// AUTH --------



// TASKS ========
async function getTasks(token) {
try {
    const response = await axios({
        url: `${BASE_URL}/tasks`,
        method: "get",
        headers: { 
          "content-type": "application/json",
          "Authorization" : `Bearer ${token}`
         },
      });
   
      return response.data;
   } catch (error) {
    console.warn(error);
   } 
}

// const task ={
//     title: "string",
//     points: number,
//     deadline: 'string, must be one of [8.00-10.00, 10.00-12.00, 12.00-14.00, 14.00-16.00, 16.00-18.00, 18.00-20.00, 20.00-22.00, No time]'
//   }
async function CreateTask(token, task) {
 try {
    const response = await axios({
        url: `${BASE_URL}/tasks`,
        method: "post",
        headers: { 
          "content-type": "application/json",
          "Authorization" : `Bearer ${token}`
         },
        data: task,
      });
      return response.data;
   } catch (error) {
    console.warn(error);
   }    
}

async function deleteTask(token, taskId) {
 try {
    const response = await axios({
        url: `${BASE_URL}/tasks/${taskId}`,
        method: "delete",
        headers: { 
          "content-type": "application/json",
          "Authorization" : `Bearer ${token}`
         },
      });
      return response.data;
   } catch (error) {
    console.warn(error);
   }    
}
// TASKS ========




// GOALS ********
async function getGoals(token) {

   try {
    const response = await axios({
        url: `${BASE_URL}/goals`,
        method: "get",
        headers: { 
          "content-type": "application/json",
          "Authorization" : `Bearer ${token}`
         },
      });
      return response.data;
   } catch (error) {
    console.warn(error);
   }    
}

// const goal ={
//     title: "string",
//     points: number,
//   }
async function CreateGoal(token, goal) {
  try {
    const response = await axios({
        url: `${BASE_URL}/goals`,
        method: "post",
        headers: { 
          "content-type": "application/json",
          "Authorization" :  `Bearer ${token}`
         },
        data: goal,
      });
  
      return response.data;
   } catch (error) {
    console.warn(error);
   }  
}

async function getGoalById(token, goalId) {
    try {
    const response = await axios({
        url: `${BASE_URL}/goals/${goalId}`,
        method: "get",
        headers: { 
          "content-type": "application/json",
          "Authorization" : `Bearer ${token}`
         },
      });
      return response.data;
   } catch (error) {
    console.warn(error);
   }
}

// const goal={
//     title: "fghfffffff",
//     points: 556,
//     isDone: false,
// }

async function isDoneGoal(token,goalId,isDone){
  try {

    const response = await axios({
        url: `${BASE_URL}/goals/${goalId}`,
        method: "patch",
        headers: { 
          "content-type": "application/json",
          Authorization : `Bearer ${token}`
         },

        data: isDone,
      }
      );
      return response.data;
   } catch (error) {
    console.warn(error);
   }  
}
   
async function updateGoal(token, goalId, goal) {

   try {
    const response = await axios({
        url: `${BASE_URL}/goals/${goalId}`,
        method: "patch",
        headers: { 
          "content-type": "application/json",
          "Authorization" : `Bearer ${token}`
         },
        data: goal,
      });
      
      return response.data;
   } catch (error) {
    console.warn(error);
   }  
}

async function deleteGoal(token, goalId) {
 try {
    const response = await axios({
        url: `${BASE_URL}/goals/${goalId}`,
        method: "delete",
        headers: { 
          "content-type": "application/json",
          "Authorization" : ` Bearer ${token}`
         },
      });
      return response.data;
   } catch (error) {
    console.warn(error);
   }     
}
// GOALS ********
async function updateTask(token, taskid, task) {
  try {
    const response = await axios({
      url: `${BASE_URL}/tasks/${taskid}`,
      method: 'patch',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: task,
    });
  
    return response.data;
  } catch (error) {
    console.warn(error);
  }
}

export const services = {
  registerUser,
  loginUser,
  logoutUser,
  getTasks,
  CreateTask,
  deleteTask,
  getGoals,
  CreateGoal,
  getGoalById,
  updateGoal,
  deleteGoal,
  updateTask,
  isDoneGoal
};
