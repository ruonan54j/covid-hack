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
function App() {

  const [currentUser, setCurrentUser] = useState(UserContext);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  let apiKey = process.env.REACT_APP_GOOGLE_KEY;
  useEffect(
    () => {
      if(currentUser === null){
        console.log("current user updated", currentUser);
        setIsAuthenticated(false);
      }
      else if(currentUser._currentValue != false){
        console.log("current user updated", currentUser);
        setIsAuthenticated(true);
      }
    },
    [currentUser]
  );
  return (
  <BrowserRouter>
  
  <UserContext.Provider value={{currentUser, setCurrentUser}}>
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
    </UserContext.Provider>
  </BrowserRouter>
  );
}

export default App;
