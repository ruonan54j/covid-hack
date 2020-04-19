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
  const [agreement, setAgreement] = useState(false);
  const [agreement18, setAgreement18] = useState(false);
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

    if(!agreement || !agreement18){
      alert("Must agree to terms and conditions");
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


    fetch('https://us-central1-covid-hack-c6549.cloudfunctions.net/api/v1/signup', sendData)
    .then(res => {
      return res.json().then((data) => {
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

  const toggleCheckboxValue = () => {
    if (!agreement){
      setAgreement(true);
    }else{ 
      setAgreement(false);
    }
  }

  const toggleCheckboxValue18 = () => {
    if (!agreement18){
      setAgreement18(true);
    }else{ 
      setAgreement18(false);
    }
  }
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
          <input type="checkbox" id="tc" onChange={()=>toggleCheckboxValue()}/>
      <label for="tc"> I have read and understood the agreement <a href="https://www.termsfeed.com/privacy-policy/7c2ed99ca48554a7d7814f0d6c2d484e">view agreement</a></label><br>
      </br> 
      <input type="checkbox" id="tc2" onChange={()=>toggleCheckboxValue18()}/> <br></br>
      <label for="tc2"> I verify I'm over 18 </label><br></br>
      <button className="login-btn" onClick={(e)=>handleSubmitBtn(e)}>Sign Up</button>
         
          <p className="signup-link">Have an account? <Link to="/login">Log in here</Link></p>
          </div>
        </form>
      </div>);
  }

  export default SignUp;