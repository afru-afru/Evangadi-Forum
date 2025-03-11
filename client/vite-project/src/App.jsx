

import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
// import Home from './pages/Home'
// import Login from './pages/Login'
import Register from './pages/Register'
import { createContext, useEffect, useState } from 'react'
import axios from './axiosConfig'
import LoginPage from './pages/Login/Loginpage'
import Question from './pages/QuestionAnswer/Question'

import Home from "./Components/Home/Home";
import AnswerPage from "./pages/AnswerPage/AnswerPage";
import Allanswer from "./pages/Allanswer/Allanswer";
import UserQuestion from "./pages/UserPage/UserQuestion";
import UserAnswerPage from "./pages/UserPage/UserAnswerPage";
import UserAnswerEdit from "./pages/UserPage/UserAnswerEdit";
import UserQuestionEdite from "./pages/UserPage/UserQuestionEdite";
import Four04 from "./pages/Four04";
import HowitWork from './pages/HowItWork/HowitWork'


export const AppState = createContext()
function App() {
  const  [user,setUser]=useState({})
  const token=localStorage.getItem("token")
  const navigate=useNavigate()

  async function checkUser(){
    try{
     const {data} = await axios.get("/users/check",{
      headers:{
        Authorization:"Bearer "+ token
      }
     })

     setUser(data)
    }catch(error){
      console.log(error.response)
      navigate('/login')

    }
  }
useEffect(()=>{
  checkUser();

},[]);


  return (
  <AppState.Provider value={{user,setUser}}>
   <Routes>


  {/* <Route path='/' element={<Home/>}/> */}
  <Route path='/login' element={<LoginPage/>}/>
  <Route path='/register' element={<Register/>}/>
  <Route path="/question" element={<Question />} />
  <Route path="/home" element={<Home/>} />
        <Route path="/questions/all-questions/:questionid" element={<AnswerPage/>} />
        <Route path="/answer/getanswers/:questionid" element={<Allanswer/>} />
        <Route path="/questions/my-questions/:userid" element={<UserQuestion/>} />
        <Route path="/answer/my-answer/:userid" element={<UserAnswerPage/>} />
        <Route path="/answer/getanswer/:answerid" element={<UserAnswerEdit/>} />
        <Route path="/questions/edit-question/:id" element={<UserQuestionEdite/>} />
        <Route path='*' element={<Four04/>}/>
        <Route path='/howItWork'  element={<HowitWork/>}></Route>



   </Routes>



   </AppState.Provider>
  )
}

export default App
