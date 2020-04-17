import React, { useState, useContext, useEffect } from "react";
import {Link} from "react-router-dom";
import {UserContext} from '../UserContext';
import {selectedPostContext} from '../selectedContext';

export const Navigationbar = (props) => {
  const [currentPage, setcurrentPage] = useState(2);
  const [profileOpen, setProfileOpen] = useState(false); 
  const {selectedPost, setSelectedPost} = useContext(selectedPostContext);
  
  const {currentUser, setCurrentUser} = useContext(UserContext);
  const [toggle, setToggle] = useState(1);
  const [userListings, setUserListings] = useState([]);

  const [userPosts, setUserPosts]=useState([]);
  useEffect(() => {
    let handleQ = "";
    if (currentUser != null){
      handleQ = currentUser.handle;
    }
    fetch('https://us-central1-covid-hack-c6549.cloudfunctions.net/api/v1/posts?handle='+handleQ)
        .then(res => {
        console.log("res here", res);
        return res.text().then((data) =>{
            console.log("DATA here",data, data.length, data[0]);
            if (res.status == 200){
            setUserListings(data);
            let postu =[];
            for(let i = 0; i < userListings.length; i++){
            //  console.log(userListings[i]);
              postu.push(<div className="row">
                <div className="delete-post" onClick={()=>deletePost(userListings[i].id)}>delete</div>
               <div className="user-posts" onClick={()=>openPostPopUp(userListings[i])}>{userListings[i].title}</div>
                </div>);
            }
            setUserPosts(postu);
            }
        })
    });
    }, [profileOpen]);
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

  const openPostPopUp=(post)=>{
    console.log("post selected = ", post);
    setSelectedPost(post);
    document.getElementById("overlay-post").style.display = "block";  
  }

  const deletePost=(postID)=>{
    console.log(postID);
    fetch('https://us-central1-covid-hack-c6549.cloudfunctions.net/api/v1/posts/' + postID, {
  method: 'DELETE',
})
.then(res => {
  console.log(res.text());
  alert("delete successful");
  openProfile();
}) // or res.json()
.catch(err=>alert(err));
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
            <a onClick={() => openProfile()} className={(!profileOpen)?"nav-page":"nav-page nav-page-active"} href="#">
              <p>Profile</p>
            </a>
            </div>
          </nav>
          <div className="profile-popup" id="clicked-profile">
            <div className="col profile-content">
            <p>username: {(currentUser === null)? "": currentUser.handle}</p>
            <div><strong>My Posts</strong></div>
              {userPosts}
              </div>
              <div className="logout-div">
            <button className="logout-btn" onClick={()=>handleLogoutBtn()}>Log out</button>
            </div>
          </div>
        </div>
      )
    }

  export default Navigationbar;