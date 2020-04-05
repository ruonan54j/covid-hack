import React from 'react';
import logo from './logo.svg';
import './App.css';

import MakersDatabase from './componentsDB/makerDB';
import Navigationbar from './componentsCommon/navbar';
function App() {
  return (
    <div className="App">
      <Navigationbar name="Bob Y"/>
      <MakersDatabase/>
    </div>
  );
}

export default App;
