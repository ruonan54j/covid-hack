import React, { useState } from "react";
import {Link} from "react-router-dom";

export const NavigationbarLogin = (props) => {
  const [currentPage, setcurrentPage] = useState(1);

    return (
      <div>
        <nav className="navbar navbar-custom row">
          <div className="left-nav-login">  
          <Link to="/">
              <div className="nav-logo" onClick={() => setcurrentPage(1)}><img className="logo-img" src="./supplyway-logo.png"></img></div>
            </Link>
          </div>
          <Link to={"/"} onClick={() => setcurrentPage(1)} className={currentPage==1?"nav-page nav-page-active": "nav-page"} href="#">
              <p>Home</p>
            </Link>
          <Link to={"/Login"} onClick={() => setcurrentPage(2)} className={currentPage==2?"nav-page nav-page-active": "nav-page"} href="#">
              <p>Login</p>
            </Link>
          </nav>
        </div>
      )
    }

  export default NavigationbarLogin;