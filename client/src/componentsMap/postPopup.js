import React, { useState , useContext} from "react";
import { selectedPostContext } from "../selectedContext";

const PostPopup = () => {
  const {selectedPost, setSelectedPost} = useContext(selectedPostContext);

    const handleClickClose = () => {
          document.getElementById("overlay-post").style.display = "none";
      }

      return (
      <div id="overlay-post">
        
        <div className="post-popup">
          
          <div className="row">
          <div className="popup-col popup-desc-post">
            <div className="close-btn" onClick={handleClickClose}>X close</div>
            <p className="popup-post-grey-text">listed by {selectedPost.handle}</p>
          <h1 className="popup-post-h1">{selectedPost.title}</h1>
          
          <p>3.5 kilometers away</p>
            <div className="row">
              <div className="col">
                <p className="popup-post-grey-text">PRODUCTION CAPACITY</p>
                <p>{selectedPost.capacity} / week</p>
              </div>
              <div>
                <p className="popup-post-grey-text">COST PER PART</p>
                <p>{selectedPost.price}</p>
              </div>
            </div>
              <div className="row">
              <div className="col">
                <p className="popup-post-grey-text">EMAIL ADDRESS</p>
                <p>{selectedPost.email}</p>
              </div>
              <div className="col">
                <p className="popup-post-grey-text">PHONE-NUMBER</p>
                <p>{selectedPost.phone}</p>
              </div>
            </div>
            <p className="popup-post-grey-text">PICKUP LOCATION</p>
            <p>{selectedPost.address}</p>
        </div>
        
          <div className="popup-col">
            <div className="popup-img-div">
      <img className="popup-img" src={selectedPost.img}></img>
            </div>
        </div>
         </div>
        </div>
        </div>
           )
  }

  export default PostPopup;