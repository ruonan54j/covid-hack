import React, { useState, useContext } from "react";
import { UserContext } from "../UserContext";

const Login = () => {
  const {currentUser, setCurrentUser} = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    let sendData = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        { 
          "email": email.toString(),
          "password": password.toString(),
      })
    };

    console.log("body",sendData.body);

    fetch('https://us-central1-covid-hack-c6549.cloudfunctions.net/api/v1/login', sendData)
    .then(res => {
      console.log("res", res);
      return res.json().then((data) =>{
        console.log("DATA",data);
        if (res.status == 200){
          let user= data;
          setCurrentUser(user);
        }
      })
    });
    
  }
    return (
    <div className="login-pg">
        <h1 className="login-title">Login</h1>
        <form>
            <div className="login-form-content">
            <input placeholder="email"
            onChange={e => setEmail(e.target.value)}
              className="login-input" />
            <input placeholder="password" className="login-input" 
            onChange={e => setPassword(e.target.value)}
            group type="password"/>
            <button className="login-btn" onClick={e => handleLoginSubmit(e)}>Log In</button>
          <p className="signup-link">Don't have an account? <a>Sign up here</a></p>
          </div>
        </form>
      </div>);
  }

  export default Login;