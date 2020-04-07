import React, { useState } from "react";

const Post = (props) => {
  
  return (
    <div class="post">
      <div class="row">
      <div class= "col-8">
        <p class="post-author">Listed by {props.author}</p>
      <h1 class="post-title">{props.title}</h1>
      <p class="post-distance">{props.distance} kilometers away</p>
        <div class="row">
          <div class="col">
            <p class="post-grey-text">PRODUCTION CAPACITY</p>
            <p>{props.capacity} / week</p>
          </div>
          <div class="col">
          <p class="post-grey-text">COST PER PIECE</p>
            <p> ${props.cost} </p></div>
        </div>
      
      </div>
      <div class="col-4 right-div">
        <img src={props.img} alt = "valves" class="post-img"/>
      </div>
      </div>
    </div>
  )
}

export default Post;