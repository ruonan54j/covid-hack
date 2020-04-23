import React, {useState, useContext} from "react";
import {
    GoogleMap, 
    withScriptjs, 
    withGoogleMap, 
    Marker,
    InfoWindow
} from 'react-google-maps';
import {selectedPostContext, MapCoordContext} from '../selectedContext';
import { ListingsContext } from "../ListingsContext";

const Map = (props) => {
    const {mapCoord, setMapCoord} = useContext(MapCoordContext);
    const {listings, setListings} = useContext(ListingsContext);
    //const [listings, setListings] = React.useState([{id:1,title: "cheap face masks", lat:44,lng:-76},{id: 2, title: "cheap face masks2",lat:46,lng:-76},{id: 3, title: "cheap face masks3",lat:45.5,lng:-74}]);
    const [selectedListing, setSelectedListing] = useState((listings.length!==0)?listings[0]:"");
    let i = 0;
    return (
        <GoogleMap 
        defaultZoom={4}
        center={{lat: (mapCoord===null)?56: mapCoord.lat, lng:  (mapCoord===null)?-106: mapCoord.long}}
        >
        {
            listings.map( listing => (
                <Marker 
                key={i++} 
                position={{lat: parseFloat(listing.lat), lng: parseFloat(listing.long)}}
                onClick={()=>{
                    setSelectedListing(listing);
                }}/>
            ))

        }
        {
            selectedListing && (
                <InfoWindow 
                position={{
                    lat: (selectedListing.lat!== NaN)?parseFloat(selectedListing.lat): 0, 
                    lng: (selectedListing.long !== NaN)?parseFloat(selectedListing.long): 0
                    }}
                onCloseClick={() => {
                    setSelectedListing(null);
                }}>
                    <div>
                    Listing Details
                        <p>{selectedListing.title}</p>
            <p>{selectedListing.description}</p>
                    </div>

                </InfoWindow>
            )
        }
        </GoogleMap>
    )
}
 
const WrappedMap = withScriptjs(withGoogleMap(Map));
export default WrappedMap;
