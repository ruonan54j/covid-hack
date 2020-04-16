import React, { useState, useContext } from "react";
import Post from './post';
import SearchBar from '../componentsCommon/searchbar'
import { ListingsContext } from "../ListingsContext";
import {selectedPostContext} from '../selectedContext';
const PostListing = () => {

  const {listings, setListings} = useContext(ListingsContext);
  
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
        <SearchBar placeholder="Search for a listing"/>
        <div className="new-post-btn-custom-div">
          <button className="new-post-btn-custom" onClick={() => handleClickOpen()}>Add Listing</button>
          </div>
      {posts}
      </div>
    )
  }

  export default PostListing;