import React, { useState, useContext } from "react";
import Post from './post';
import SearchBar from '../componentsCommon/searchbar'
import { ListingsContext } from "../ListingsContext";
const PostListing = () => {
    
  const {listings, setListings} = useContext(ListingsContext);
    let posts=[];
    for(let i = 0; i< listings.length; i++){
      posts.push( 
      <Post author="username123" key={i} title={listings[i].title} capacity={listings[i].capacity} cost={listings[i].cost} distance={listings[i].distance} img="https://www.medicaldevice-network.com/wp-content/uploads/sites/11/2020/03/89996384_10222328772156304_3292612436959428608_o.jpg"/>
      );
    }

    const handleClickOpen = () => {
        document.getElementById("overlay-add-listing").style.display = "block";
    }
    return (
        <div>
        <SearchBar placeholder="Search for a listing"/>
        <div className="new-post-btn-custom-div">
          <button className="new-post-btn-custom" onClick={() => handleClickOpen()}>Add Listing</button>
          </div>
      {posts}
      </div>
    )
  }

  export default PostListing;