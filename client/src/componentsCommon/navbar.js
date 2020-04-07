import React, { useState } from "react";

export const Navigationbar = (props) => {
    return (
      <div>
        <nav className="navbar navbar-custom row">
          <div className="left-nav">  
          <a href="#">
              <h1 className="nav-logo">Logo/Name</h1>
            </a>
          </div>
          <a className="nav-page" href="#">
              <p>All Listings</p>
            </a>
          <a className="nav-page nav-page-active" href="#">
              <p>Maker's Database</p>
            </a>
          
          <a className="nav-profile row" href="#">
            <img className="nav-profile-pic" src="https://cdn3.f-cdn.com/contestentries/1376995/30494909/5b566bc71d308_thumb900.jpg"></img>
              <p>{props.name}</p>
            </a>
          </nav>
        </div>
      )
    }

  export default Navigationbar;