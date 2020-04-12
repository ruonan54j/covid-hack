import React, { useState } from "react";

const Login = () => {
 
    return (
    <div className="login-pg">
        <h1 className="login-title">Login</h1>
        <form>
            <div className="login-form-content">
            <input placeholder="email"
              className="login-input" />
            <input placeholder="password" className="login-input" group type="password"/>
            <button className="login-btn">Log In</button>
          <p className="signup-link">Don't have an account? <a>Sign up here</a></p>
          </div>
        </form>
      </div>);
  }

  export default Login;