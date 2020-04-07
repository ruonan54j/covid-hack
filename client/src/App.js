import React from 'react';
import logo from './logo.svg';
import './App.css';

import MakersDatabase from './componentsDB/makerDB';
import Navigationbar from './componentsCommon/navbar';
import MapPage from './componentsMap/mapPage';

function App() {
  let apiKey = process.env.REACT_APP_GOOGLE_KEY;
  console.log("Fi");
  console.log(apiKey);
  return (
    <div className="App">
      <Navigationbar name="Bob Y"/>
      {/*<MakersDatabase/>*/}
      <MapPage apiKey={apiKey}/>
    </div>
  );
}

export default App;
