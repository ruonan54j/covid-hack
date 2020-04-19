import React, { useState, useEffect } from "react";
import WrappedMap from './map';
import PostListing from "./postListing";
import PostPopup from "./postPopup";
import AddListing from './addPost';
import { ListingsContext } from "../ListingsContext";
import { MapCoordContext } from "../selectedContext";


const MapPage = (props) => {
    
    const [listings, setListings] = React.useState([]);
    const [mapCoord, setMapCoord] = React.useState(null);
    useEffect(() => {
        fetch('https://us-central1-covid-hack-c6549.cloudfunctions.net/api/v1/posts')
            .then(res => {
            console.log("res", res);
            return res.json().then((data) =>{
                console.log("DATA",data);
                if (res.status == 200){
                    setListings(data);
                }
            }).catch((e)=>{
                console.log(e);
            });
    });
    }, []);
     
    return (
        <ListingsContext.Provider value={{listings, setListings}}>
         <MapCoordContext.Provider value={{mapCoord, setMapCoord}}> 
        <div className="row">
                 <AddListing/>
        <div className="post-Listing-container">
            <PostListing/>
        </div>
        <div className="google-map">
      <WrappedMap 
      googleMaps
      googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=" + props.apiKey}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100%` }} />}
      mapElement={<div style={{ height: `100%` }} />}
      />
      </div>
      </div>

      </MapCoordContext.Provider>
      </ListingsContext.Provider>
    )
}

export default MapPage;