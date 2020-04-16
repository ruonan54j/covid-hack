import React, { useState } from "react";
import {Link} from "react-router-dom";

export const NavigationbarLogin = (props) => {
  const [currentPage, setcurrentPage] = useState(1);
  const [toggle, setToggle] = useState(1);

  const handleToggle = () =>{
    if(toggle === 1){
      document.getElementById("nav-expand").style.display = "block";  
      setToggle(2);
    } else {
      document.getElementById("nav-expand").style.display = "none";  
      setToggle(1);
    } 
  }
    return (
      <div>
         <nav className="navbar navbar-custom row navbar-expand-lg">
         <button class="navbar-toggle" type="button" 
         onClick={()=>handleToggle()}>
            <div class="icon-toggle"></div>
          </button>
          
          <div className="left-nav-login">  
          <Link to="/">
              <div className="nav-logo" onClick={() => setcurrentPage(1)}><img className="logo-img" src="./supplyway-logo.png"></img></div>
            </Link>
          </div>
          <div id="nav-expand">
          <Link to={"/"} onClick={() => setcurrentPage(1)} className={currentPage==1?"nav-page nav-page-active": "nav-page"} href="#">
              <p>Home</p>
            </Link>
          <Link to={"/Login"} onClick={() => setcurrentPage(2)} className={currentPage==2?"nav-page nav-page-active": "nav-page"} href="#">
              <p>Login</p>
            </Link>
            </div>
          </nav>
        </div>
        
      )
    }

  export default NavigationbarLogin;