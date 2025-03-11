import { useRef } from "react"
import axios from "../axiosConfig"

import { Link, useNavigate } from "react-router-dom"


function Login() {
  const navigate=useNavigate();
  const emailDom=useRef();
  const passwordDom=useRef();

  async function handleSubmit(e){
    e.preventDefault();


   const emailValue=emailDom.current.value;
   const passwordValue=passwordDom.current.value;

    if (
      !emailValue || !passwordValue)
      {
alert("please provide all required information")
      }
 try{
  const {data} = await axios.post('/users/login',{

    email:emailValue,
    password:passwordValue
  });
  alert("login successfull")
  navigate("/")
  localStorage.setItem('token',data.token)
  console.log((data))

 }catch(error){
  alert('something went wrong')
  console.log(error.response.data)

 }
  }
  return (
 <section>
   <form onSubmit={handleSubmit}>




<div>

  <span>email:---</span>
  <input ref={emailDom} type="email" placeholder="email" />
</div>
<br/>

<div>

  <span>Password:---</span>
  <input ref={passwordDom} type="password" placeholder="Password" />
</div>

<button type="submit">Login</button>




    </form>
    <Link to={'/register'}/>
 </section>
  )
}

export default Login