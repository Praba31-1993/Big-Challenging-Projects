import React, {useState} from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'
import AmazonLogo from "../../assets/Amazon_Logo.png"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const signIn = (e) =>{
        e.preventDefault();

    }
  return (
    <div className='Login'>
        <Link to="/">
            <img src={AmazonLogo} className="login-logo" alt="logo"/>
        </Link>
        <div className='login-container'>
            <h1>Sign IN</h1>
            <form>
                <h5>E-Mail</h5>
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button type="submit" onClick={signIn} className="login-signin">Sign In</button>
            </form>
            <p className="login_P">By Continuing, you Agree the Amazon condition and Privacy rules</p>
            <p className="login_newtoamazon">New to Amazon </p>
            <Link to="/register">
                <button className='login-register'>Create your Amazon Account</button>

            </Link>
        </div>
    </div>
  )
}
export default Login