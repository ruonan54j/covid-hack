import React, { useState, useContext } from "react";
import {selectedPostContext} from '../selectedContext';

const Post = (props) => {
  const {selectedPost, setSelectedPost} = useContext(selectedPostContext);

  const handleBuyerClick = () =>{
    document.getElementById("overlay-post").style.display = "block"; 
    setSelectedPost(props.post);
  }
  return (
    <div className="post" onClick={()=>handleBuyerClick()}>
      <div className="row">
      <div className= "left-post-div">
        <p className="post-author">Listed by {props.post.userHandle}</p>
      <h1 className="post-title">{props.post.title}</h1>
        <div className="row">
          <div className="col">
            <p className="post-grey-text">PRODUCTION CAPACITY</p>
            <p>{props.post.capacity} / week</p>
          </div>
          <div className="col">
          <p className="post-grey-text">COST PER PIECE</p>
            <p> ${props.post.price} </p></div>
        </div>
      
      </div>
      <div className="right-post-div">
        <img src={props.post.img} alt = "valves" className="post-img"/>
      </div>
      </div>
    </div>
  )
}

export default Post;