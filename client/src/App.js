import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';

import MakersDatabase from './componentsDB/makerDB';
import Navigationbar from './componentsCommon/navbar';
import NavigationbarLogin from './componentsCommon/loginNavbar';
import MapPage from './componentsMap/mapPage';
import Login from './componentsLogin/login';
import SignUp from './componentsLogin/signup';
import WrapperLogin from './componentsLogin/wrapperLogin';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
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
    let user = localStorage.getItem('currentUser');
    if(user !== null || user !== undefined){
      setCurrentUser(user);
      setIsAuthenticated(true);
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
        localStorage.setItem("currentUser", currentUser);
        console.log("current user updated", currentUser);
        setIsAuthenticated(true);
      }
    },
    [currentUser]
  );
  return (
  <BrowserRouter>
  
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
  </BrowserRouter>
  );
}

export default App;
