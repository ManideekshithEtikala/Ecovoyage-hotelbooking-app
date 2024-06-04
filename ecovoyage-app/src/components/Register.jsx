import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Register = () => {
        const[email,setEmail]=useState(""); 
        const[password,setPassword]=useState("");
        const[username,setUsername]=useState("")
        const navigate=useNavigate()
        const Submit=async(e)=>{
          e.preventDefault()
          try{
          await axios.post('http://localhost:4000/register',{
            email:email,
            password:password,
            username:username
          }).then((req,res)=>{
            console.log(req.body)
            navigate("/")
          }).catch((err)=>console.log(err))
        } catch(err){
          console.log(err)
        }
      }
  return (
    <>

<div className="container">
  <div className="screen">
    <div className="screen__content">
      <form className="login">
        <div className="login__field">
          <input
            type="text"
            className="login__input"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />
        </div>
        <div className="login__field">
          <input
            type="text"
            className="login__input"
            placeholder="User name "
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            required

          />
        </div>
        <div className="login__field">
          <input
            type="password"
            className="login__input"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required

          />
        </div>
        <button className="button login__submit">
          <span className="button__text" onClick={Submit}>Sign Up</span>
        </button>
        <p className='singup'>Already have an account <Link to={'/login'} className='span'>Sign In</Link></p>

      </form>
    </div>
    <div className="screen__background">
      <span className="screen__background__shape screen__background__shape4" />
      <span className="screen__background__shape screen__background__shape3" />
      <span className="screen__background__shape screen__background__shape2" />
      <span className="screen__background__shape screen__background__shape1" />
    </div>
  </div>
</div>
</>
  )
}
export default Register