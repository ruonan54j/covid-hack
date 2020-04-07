import React, { useState } from "react";
import Post from './post';
import SearchBar from '../componentsCommon/searchbar'
const PostListing = () => {
    let posts=[];
    for(let i = 0; i< 6; i++){
      posts.push(
      
      <Post author="username123" title="title" capacity="100" cost="0.50" distance="3.5" img="https://www.medicaldevice-network.com/wp-content/uploads/sites/11/2020/03/89996384_10222328772156304_3292612436959428608_o.jpg"/>
      );
    }
    return (
        <div>
         
        <SearchBar placeholder="Search for a listing"/>
      {posts}
      </div>
    )
  }

  export default PostListing;