import React, { useState, useContext } from "react";
import Post from './post';
import SearchBar from '../componentsCommon/searchbar'
import { ListingsContext } from "../ListingsContext";
import {selectedPostContext, MapCoordContext} from '../selectedContext';
const PostListing = () => {

  const {listings, setListings} = useContext(ListingsContext);
  const {mapCoord, setMapCoord} = useContext(MapCoordContext);
  const [searchTerm, setSearchTerm] = React.useState("");
  
  const handleSearch = () => {

    fetch('https://us-central1-covid-hack-c6549.cloudfunctions.net/api/v1/posts?city='+searchTerm)
            .then(res => {
            if(res.status != 200){
              alert("sorry, no listings for this city yet");
              return;
            }
            return res.json().then((data) =>{
                console.log("DATA",data);
                if (res.status == 200){
                    setListings(data);
                } else{
                  alert("sorry, no listings for this city yet");
                }
            }).catch((e)=>{
                console.log(e);
            });
      });

      fetch("https://us-central1-covid-hack-c6549.cloudfunctions.net/api/v1/azdc-city/"+searchTerm)
      .then(res => {
        return res.json().then((data) =>{
          if(res.status== 200){
            setMapCoord({lat: data.lat, long: data.long});
          } else {
            alert("invalid location input");
          }
        })
      })
      .catch((e)=>{
        alert("invalid location input");
        console.log(e);
      });
      

    }
  
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

    let posts=[];
    for(let i = 0; i< listings.length; i++){
      posts.push( 
      <Post key={i} post={listings[i]}/>
      );
    }

    const handleClickOpen = () => {
        document.getElementById("overlay-add-listing").style.display = "block";
    }
    return (
        <div>
          <div className = "text-center">
         <input
           className="search-input"
           type="text"
           placeholder="Enter your city"
           value={searchTerm}
           onChange={handleChange}
         />
         <button className="search-btn" onClick={() => handleSearch()}>Enter</button>
       </div>
      
        <div className="new-post-btn-custom-div">
          <button className="new-post-btn-custom" onClick={() => handleClickOpen()}>Add Listing</button>
          </div>
      {posts}
      </div>
    )
  }

  export default PostListing;