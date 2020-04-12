import React, { useState } from "react";
const SignUp = () => {
    return (
    <div className="signup-pg">
        <h1 className="login-title">Sign-up</h1>
        <form>
            <div className="login-form-content">
          <button className="signup-type">I am a buyer</button> 
          <button className="signup-type">I am a supplier</button>
            <input placeholder="email"
              className="login-input" />
            <input placeholder="username" className="login-input"/>
          <input placeholder="password" className="login-input" group type="password"/>
          
          <input placeholder="confirm password" className="login-input" group type="password"/>
           <p className="password-check">password must include at least 6 letters and 1 number</p>
            <button className="login-btn">Log In</button>
         
          <p className="signup-link">Have an account? <a>Log in here</a></p>
          </div>
        </form>
      </div>);
  }

  export default SignUp;