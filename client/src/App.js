import React from 'react';
import logo from './logo.svg';
import './App.css';

import MakersDatabase from './componentsDB/makerDB';
import Navigationbar from './componentsCommon/navbar';
import WrappedMap from './componentsMap/map';

function App() {
  let apiKey = process.env.REACT_APP_GOOGLE_KEY;
  console.log("Fi");
  console.log(apiKey);
  return (
    <div className="App">
      <Navigationbar name="Bob Y"/>
      {/*<MakersDatabase/>*/}
      <div style={{width: "100vw", height: "100vh"}}>
      <WrappedMap googleMaps
      googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key="+apiKey}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100%` }} />}
      mapElement={<div style={{ height: `100%` }} />}
      />
      </div>
    </div>
  );
}

export default App;
