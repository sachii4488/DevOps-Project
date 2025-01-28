import React, { useState } from 'react';
import right_img from '../../../assets/login.jpg'
import './LoginSignup.css';
import Admin from '../Admin';

const LoginSignup = () => {
  const [state, setState] = useState("Login");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
  };

  

  return (
    <div className='both'>
      <div className='left'>
        <h1>{state === "Sign Up" ? "Welcome " : "Welcome Back"}</h1>
        <p>{state === "Sign Up" ? "Please enter your details to sign up" : "Please enter your details to login"}</p>
        {state === "Sign Up" && (
          <>
            <label htmlFor='username'>Username</label>
            <input name='username' type="text" placeholder='Your Name' />
          </>
        )}
        <label htmlFor='email'>Email <span className='sp2'>add</span></label>
        <input type="email" name='email' placeholder='Enter Your Email' />
        <label htmlFor='password'>Password</label>
        <input type="password" name='password' placeholder='Enter Your Password' />

        <div className='mid'>
          <input type="checkbox" id='remember' />
          <label htmlFor='remember'>Remember Me</label>
          <a href="#" className='forget'>Forget Password</a>
        </div>

        <button className='btn1' onClick= '/adminHome'>
          {state === "Sign Up" ? "Sign Up" : "Login"}
        </button>

        

        <p className="loginsignup-login">
          {state === "Sign Up" 
            ? "Already have an account? " 
            : "Create an account? "} 
          <span className='sp1' onClick={() => setState(state === "Sign Up" ? "Login" : "Sign Up")}>
            {state === "Sign Up" ? "Login Here" : "Click Here"}
          </span>
        </p>
      </div>

      <div className='right'>
        <img src={right_img} alt="" className='right-img' />
      </div>
    </div>
  );
};

export default LoginSignup;
