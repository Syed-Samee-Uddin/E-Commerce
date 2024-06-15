import React from 'react'
import './CSS/LoginSignup.css'


const LoginSignup = () => {
  return (
    <div className="loginsignup">
<div className="loginsignup-container">
        <h1>Sign in</h1>
        <div className="loginsignup-fields">
        <input type="email" placeholder='Enter Email'/>
        <input type="password" placeholder='Enter Password'/>

        </div>
        <button>Continue</button>
        <p className="loginsignup-login">New to EasyBuy? </p>
        <div className="c">
       <br /> Create Your EasyBuy Account 
        </div>
        
      </div>
      </div>  )
}

export default LoginSignup

