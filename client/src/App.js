import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';

import MakersDatabase from './componentsDB/makerDB';
import Navigationbar from './componentsCommon/navbar';
import MapPage from './componentsMap/mapPage';
import Login from './componentsLogin/login';
import SignUp from './componentsLogin/signup';
import WrapperLogin from './componentsLogin/wrapperLogin';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { UserContext } from "./UserContext";

function App() {
  const [currentUser, setCurrentUser] = useState(UserContext);
  let apiKey = process.env.REACT_APP_GOOGLE_KEY;
  useEffect(
    () => {
      console.log("current user updated",currentUser);
    },
    [currentUser]
  );
  return (
  <BrowserRouter>
  <UserContext.Provider value={{currentUser, setCurrentUser}}>
    <Navigationbar name="Bob Y"/>
      <div className="App">
        <Switch>
        <Route path="/all-listings" render={routeProps => <MapPage {...routeProps} apiKey={apiKey}/>} />
        <Route path="/login" render = {routeProps => <WrapperLogin {...routeProps}><Login/></WrapperLogin>}/>
        <Route path="/signup" render = {routeProps => <WrapperLogin {...routeProps}><SignUp/></WrapperLogin>}/>
        <Route path="/" component={MakersDatabase} />
      </Switch>
    </div>
    </UserContext.Provider>
  </BrowserRouter>
  );
}

export default App;
