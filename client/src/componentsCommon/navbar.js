import React, { useState } from "react";

export const Navigationbar = (props) => {
    return (
      <div>
        <nav class="navbar navbar-custom row">
          <div class="left-nav">  
          <a href="#">
              <h1 class="nav-logo">Logo/Name</h1>
            </a>
          </div>
          <a class="nav-page" href="#">
              <p>All Listings</p>
            </a>
          <a class="nav-page nav-page-active" href="#">
              <p>Maker's Database</p>
            </a>
          
          <a class="nav-profile row" href="#">
            <img class="nav-profile-pic" src="https://cdn3.f-cdn.com/contestentries/1376995/30494909/5b566bc71d308_thumb900.jpg"></img>
              <p>{props.name}</p>
            </a>
          </nav>
        </div>
      )
    }

  export default Navigationbar;