import React, { useState, useEffect, Fragment } from "react";
import logo from './logo.svg';
import './App.css';

import MakersDatabase from './componentsDB/makerDB';
import Navigationbar from './componentsCommon/navbar';
import NavigationbarLogin from './componentsCommon/loginNavbar';
import MapPage from './componentsMap/mapPage';
import Login from './componentsLogin/login';
import SignUp from './componentsLogin/signup';
import WrapperLogin from './componentsLogin/wrapperLogin';
import { Switch, Route, BrowserRouter, Redirect, HashRouter } from 'react-router-dom';
import { UserContext } from "./UserContext";
import Landing from './landingPage/landing';
import { selectedPostContext } from "./selectedContext";
import PostPopup from './componentsMap/postPopup';
function App() {

  const [currentUser, setCurrentUser] = useState(UserContext);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedPost, setSelectedPost] = React.useState([]);

  let apiKey = process.env.REACT_APP_GOOGLE_KEY;
  useEffect(()=>{
    let userID = localStorage.getItem('currentUser');
    if(userID !== null || userID !== undefined) {
      fetch("https://us-central1-covid-hack-c6549.cloudfunctions.net/api/v1/users/"+userID)
      .then(res=>{
        res.json().then((data) =>{
            setCurrentUser(data);
            setIsAuthenticated(true);
        }).catch((e)=>{
          console.log(e);
        })
      })
      .catch((err)=>{
        console.log(err);
      });

    } else{
      setIsAuthenticated(false);
    }
  },[]);
  useEffect(
    () => {
      if(currentUser === null){
          localStorage.clear();
          console.log("current user updated", currentUser);
          setIsAuthenticated(false);
      }
      else if(currentUser._currentValue != false) {
        localStorage.setItem("currentUser", currentUser.userID);
        console.log("current user updated", currentUser);
        setIsAuthenticated(true);
      }
    },
    [currentUser]
  );
  return (
 
  <HashRouter>
<div className="pages">
  <UserContext.Provider value={{currentUser, setCurrentUser}}>
  <selectedPostContext.Provider value={{selectedPost, setSelectedPost}}>
  <PostPopup />
    {(!isAuthenticated)? <NavigationbarLogin/>:<Navigationbar/>}
      <div className="App">
        <Switch>
        <Route path="/all-listings" render={(props) => (
    isAuthenticated
      ? <MapPage {...props} apiKey={apiKey} />
      : <Redirect to='/login' />)}
      />
        <Route path="/login" 
        render={(props) => (
          isAuthenticated
            ? <Redirect to='/' />
            : <WrapperLogin {...props}><Login/></WrapperLogin>)}
        />
        <Route path="/signup" 
        render={(props) => (
          isAuthenticated
            ? <Redirect to='/' />
            : <WrapperLogin {...props}><SignUp/></WrapperLogin>)}/>
        <Route path="/" 
        render={(props) => (
          isAuthenticated
            ? <MakersDatabase/>
            : <Landing/>)} />
      </Switch>
    </div>
  
    </selectedPostContext.Provider>

    </UserContext.Provider>
    </div>
    <div className="footer">
      <p>All rights reserved to SupplyWay.co</p>
      <p>Please email info@supplyway.co for any questions/support</p>
    </div>
  </HashRouter>

  );
}

export default App;
