import React, { useState, useEffect, useContext } from "react";
import validateEmail from "../utils/utils";
import usePasswordValidator from "../utils/passwordValidator";
import { UserContext } from "../UserContext";
import {Link} from "react-router-dom";


const SignUp = () => {
  const {currentUser, setCurrentUser} = useContext(UserContext);
  
  const [username, setUsername] = useState("");
  const [isSupplier, setIsSupplier] = useState(true);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [password, setPassword, passwordError] = usePasswordValidator({
    min: 8,
    max: 15
  });
 
  const handleTypeBtn=(e, value)=>{
    e.preventDefault();
    setIsSupplier(value);
  }

  const handleSubmitBtn=(e) => {
    e.preventDefault();

    if (emailError !== "" || confirmPasswordError !== "" || passwordError !== "") {
      alert("Invalid fields! Please view errors");
      return;
    }

    if(email === "" || password=== "" || confirmPassword === "" || username === "") {
      alert("Fields can not be empty!");
      return;
    }
    let sendData = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        { 
          "handle": username.toString(),	
          "email": email.toString(),
          "password": password.toString(),
          "isSupplier": isSupplier,
          "signUpMethod": "Email"
      })
    };

    console.log("body",sendData.body);

    fetch('https://us-central1-covid-hack-c6549.cloudfunctions.net/api/v1/signup', sendData)
    .then(res => {
      return res.json().then((data) => {
        console.log("DATA",data);
        if (res.status == 201){
          setCurrentUser(data);
        }else{
          let err =JSON.stringify(data).replace("{", "");
          err = err.replace("}", "");
          err = err.replace(/['"]+/g, "");
          alert(err);
        }
      })
    });

  }

  useEffect(
    () => {
      if (!email) {
        setEmailError("");
      } else {
        if (validateEmail(email)) {
          setEmailError("");
        } else {
          setEmailError("Please enter a valid email.");
        }
      }
    },
    [email]
  );

  useEffect(
    () => {
      if (!confirmPassword || !password) {
        setConfirmPasswordError("");
      } else {
        if (password !== confirmPassword) {
          setConfirmPasswordError("The passwords must match.");
        } else {
          setConfirmPasswordError("");
        }
      }
    },
    [password, confirmPassword]
  );

    return (
    <div className="signup-pg">
        <h1 className="login-title">Sign-up</h1>
        <form>
            <div className="login-form-content">
          <button className={(isSupplier)?"signup-type":"signup-type-chosen"} onClick={(e)=>{handleTypeBtn(e, false)}}>I am a buyer</button> 
          <button className={(!isSupplier)?"signup-type":"signup-type-chosen"} onClick={(e)=>{handleTypeBtn(e, true)}}>I am a supplier</button>
            <input placeholder="email"
            onChange={e => setEmail(e.target.value)}
            className="login-input" />
              <div className="error">{emailError}</div>
            <input placeholder="username"
            onChange={e => setUsername(e.target.value)}
            className="login-input"/>
          <input placeholder="password"
          onChange={e => setPassword(e.target.value)} className="login-input" group type="password"/>
          <div className="error">{passwordError}</div>
          <input placeholder="confirm password" 
          onChange={e => setConfirmPassword(e.target.value)}
          className="login-input" group type="password"/>
          <div className="error">{confirmPasswordError}</div>
            <button className="login-btn" onClick={(e)=>handleSubmitBtn(e)}>Sign Up</button>
         
          <p className="signup-link">Have an account? <Link to="/login">Log in here</Link></p>
          </div>
        </form>
      </div>);
  }

  export default SignUp;