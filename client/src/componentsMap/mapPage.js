import React, { useState } from "react";
import WrappedMap from './map';
import PostListing from "./postListing";
import PostPopup from "./postPopup";
const MapPage = (props) => {

    return (
        <div className="row">
                 <PostPopup />
        <div className="post-Listing-container">
            <PostListing/>
        </div>
        <div className="google-map">
      <WrappedMap googleMaps
      googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=" + props.apiKey}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100%` }} />}
      mapElement={<div style={{ height: `100%` }} />}
      />
      </div>
      </div>
    )
}

export default MapPage;