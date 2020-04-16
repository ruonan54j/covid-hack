import React, { useState, useContext } from "react";
import {Link} from "react-router-dom";
import {UserContext} from '../UserContext';

export const Navigationbar = (props) => {
  const [currentPage, setcurrentPage] = useState(2);
  const [profileOpen, setProfileOpen] = useState(false); 
  
  const {currentUser, setCurrentUser} = useContext(UserContext);
  const [toggle, setToggle] = useState(1);

  const handleToggle = () =>{
    if(toggle === 1){
      document.getElementById("nav-expand-reg").style.display = "block";  
      setToggle(2);
    } else {
      document.getElementById("nav-expand-reg").style.display = "none";  
      setToggle(1);
    } 
  }
  
  const handleLogoutBtn=()=>{
    setCurrentUser(null);
  }
  const openProfile=()=>{
    if (!profileOpen){
      document.getElementById("clicked-profile").style.display = "block";
      setProfileOpen(true);
    }
    else {
      document.getElementById("clicked-profile").style.display = "none";
      setProfileOpen(false);
    }
  }
    return (
      <div>
        <nav className="navbar navbar-custom row">
         <button class="navbar-toggle" type="button" 
         onClick={()=>handleToggle()}>
            <div class="icon-toggle"></div>
          </button>
          <div className="left-nav">  
          <Link to="/">
              <h1 className="nav-logo" onClick={() => setcurrentPage(2)}><img className="logo-img" src="./supplyway-logo.png"></img></h1>
            </Link>
          </div>
          <div id="nav-expand-reg">
          <Link to={"/all-listings"} onClick={() => setcurrentPage(1)} className={currentPage==1?"nav-page nav-page-active": "nav-page"} href="#">
              <p>All Listings</p>
            </Link>
          <Link to={"/"} onClick={() => setcurrentPage(2)} className={currentPage==2?"nav-page nav-page-active": "nav-page"} href="#">
              <p>Maker's Database</p>
            </Link>
            <a onClick={() => openProfile()} className="nav-page" href="#">
              <p>Profile</p>
            </a>
            </div>
          </nav>
          <div className="profile-popup" id="clicked-profile">
            <div className="col">
            <p>{(currentUser === null)? "": currentUser.handle}</p>
            <p>{(currentUser === null)? "": currentUser.email}</p>
            <button className="logout-btn" onClick={()=>handleLogoutBtn()}>Log out</button>
            </div>
          </div>
        </div>
      )
    }

  export default Navigationbar;