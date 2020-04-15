import React, { useState } from "react";
import {Link} from "react-router-dom";

export const Navigationbar = (props) => {
  const [currentPage, setcurrentPage] = useState(2);

    return (
      <div>
        <nav className="navbar navbar-custom row">
          <div className="left-nav">  
          <Link to="/">
              <h1 className="nav-logo" onClick={() => setcurrentPage(2)}>Logo/Name</h1>
            </Link>
          </div>
          <Link to={"/all-listings"} onClick={() => setcurrentPage(1)} className={currentPage==1?"nav-page nav-page-active": "nav-page"} href="#">
              <p>All Listings</p>
            </Link>
          <Link to={"/"} onClick={() => setcurrentPage(2)} className={currentPage==2?"nav-page nav-page-active": "nav-page"} href="#">
              <p>Maker's Database</p>
            </Link>
          
          <Link to={"/profile"} onClick={() => setcurrentPage(3)} className={currentPage==3?"nav-profile row nav-page-active": "nav-profile row"} href="#">
            <img className="nav-profile-pic" src="https://cdn3.f-cdn.com/contestentries/1376995/30494909/5b566bc71d308_thumb900.jpg"></img>
              <p>{props.name}</p>
            </Link>
          </nav>
        </div>
      )
    }

  export default Navigationbar;