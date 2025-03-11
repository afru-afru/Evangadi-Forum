import { useRef } from "react"
import axios from "../axiosConfig"
import { Link, useNavigate } from "react-router-dom"

function Register() {
  const navigate=useNavigate()

  const userNameDom=useRef()
  const firstnameDom=useRef()
  const lastnameDom=useRef()
  const emailDom=useRef()
  const passwordDom=useRef()


  async function handleSubmit(e){
    e.preventDefault();

    const usernamevalue=userNameDom.current.value;
   const firstValue=firstnameDom.current.value;
   const lastValue=lastnameDom.current.value;
   const emailValue=emailDom.current.value;
   const passwordValue=passwordDom.current.value;

    if (
      !usernamevalue || !firstValue || !lastValue || !emailValue || !passwordValue)
      {
alert("please provide all required information")
      }
 try{
  await axios.post('/users/register',{
    username:usernamevalue,
    firstname:firstValue,
    lastname:lastValue,
    email:emailValue,
    password:passwordValue
  });
  alert("registered successfull.please login")
  navigate("/login")

 }catch(error){
  alert('something went wrong')
  console.log(error)

 }
  }
  return (
   <section>
    <form onSubmit={handleSubmit}>
<div>

  <span>Username:---</span>
  <input ref={userNameDom} type="text" placeholder="username" />
</div>
<br/>

<div>

  <span>First name:---</span>
  <input ref={firstnameDom} type="text" placeholder="First name" />
</div>
<br/>

<div>

  <span>Last name:---</span>
  <input ref={lastnameDom} type="text" placeholder="Last name" />
</div>

<br/>
<div>

  <span>email:---</span>
  <input ref={emailDom} type="email" placeholder="email" />
</div>
<br/>

<div>

  <span>Password:---</span>
  <input ref={passwordDom} type="password" placeholder="Password" />
</div>

<button type="submit">Register</button>




    </form>
    <Link to={'/login'}>Login</Link>
   </section>
  )
}

export default Register
