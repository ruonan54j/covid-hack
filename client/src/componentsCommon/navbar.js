import React, { useState, useContext } from "react";
import {Link} from "react-router-dom";
import {UserContext} from '../UserContext';

export const Navigationbar = (props) => {
  const [currentPage, setcurrentPage] = useState(2);
  const [profileOpen, setProfileOpen] = useState(false); 
  
  const {currentUser, setCurrentUser} = useContext(UserContext);
  
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
            <a onClick={() => openProfile()} className="nav-page" href="#">
              <p>Profile</p>
            </a>
          
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