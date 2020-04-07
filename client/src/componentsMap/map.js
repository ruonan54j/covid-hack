import React, {useState} from "react";
import {
    GoogleMap, 
    withScriptjs, 
    withGoogleMap, 
    Marker,
    InfoWindow
} from 'react-google-maps';

const Map = () => {
    const [listings, setListings] = React.useState([{id:1,title: "cheap face masks", lat:44,lng:-76},{id: 2, title: "cheap face masks2",lat:46,lng:-76},{id: 3, title: "cheap face masks3",lat:45.5,lng:-74}]);
    const [selectedListing, setSelectedListing] = useState(null);

    return (
        <GoogleMap 
        defaultZoom={8}
        defaultCenter={{lat: 45, lng: -75}}
        >
        {
            listings.map( listing => (
                <Marker 
                key={listing.id} 
                position={{lat: listing.lat, lng: listing.lng}}
                onClick={()=>{
                    setSelectedListing(listing);
                }}/>
            ))

        }
        {
            selectedListing && (
                <InfoWindow 
                position={{
                    lat: selectedListing.lat, 
                    lng: selectedListing.lng
                    }}
                onCloseClick={() => {
                    setSelectedListing(null);
                }}>
                    <div>
                    Listing Details
                        <p>{selectedListing.title}</p>
            <p>Lat: {selectedListing.lat} Lon: {selectedListing.lng}</p>
                    </div>

                </InfoWindow>
            )
        }
        </GoogleMap>
    )
}
 
const WrappedMap = withScriptjs(withGoogleMap(Map));
export default WrappedMap;
