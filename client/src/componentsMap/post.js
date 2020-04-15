import React, { useState } from "react";

const Post = (props) => {
  const handleBuyerClick = () =>{
    document.getElementById("overlay-post").style.display = "block";  
  }

  return (
    <div className="post" onClick={handleBuyerClick}>
      <div className="row">
      <div className= "col-8">
        <p className="post-author">Listed by {props.author}</p>
      <h1 className="post-title">{props.title}</h1>
      <p className="post-distance">{props.distance} kilometers away</p>
        <div className="row">
          <div className="col">
            <p className="post-grey-text">PRODUCTION CAPACITY</p>
            <p>{props.capacity} / week</p>
          </div>
          <div className="col">
          <p className="post-grey-text">COST PER PIECE</p>
            <p> ${props.cost} </p></div>
        </div>
      
      </div>
      <div className="col-4 right-div">
        <img src={props.img} alt = "valves" className="post-img"/>
      </div>
      </div>
    </div>
  )
}

export default Post;