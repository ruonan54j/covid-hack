import React, { useState } from "react";

const PostPopup = () => {
    const handleClickClose = () => {
          document.getElementById("overlay-post").style.display = "none";
      }
    
    return (
      <div id="overlay-post">
        
        <div class="post-popup">
          
          <div class="row">
          <div class="popup-col popup-desc-post">
            <div class="close-btn" onClick={handleClickClose}>X close</div>
            <p class="popup-post-grey-text">listed by username</p>
          <h1 class="popup-post-h1">Ventilator Valves</h1>
          
          <p>3.5 kilometers away</p>
            <div className="row">
              <div className="col">
                <p class="popup-post-grey-text">PRODUCTION CAPACITY</p>
                <p>100pcs / week</p>
              </div>
              <div>
                <p className="popup-post-grey-text">COST PER PART</p>
                <p>$0.00</p>
              </div>
            </div>
              <div className="row">
              <div className="col">
                <p className="popup-post-grey-text">EMAIL ADDRESS</p>
                <p>abc@gmail.com</p>
              </div>
              <div className="col">
                <p className="popup-post-grey-text">PHONE-NUMBER</p>
                <p>777-777-7777</p>
              </div>
            </div>
            <p className="popup-post-grey-text">PICKUP LOCATION</p>
            <p>adress, city, postal code</p>
        </div>
        
          <div class="popup-col">
            <div class="popup-img-div">
            <img class="popup-img" src="https://www.medicaldevice-network.com/wp-content/uploads/sites/11/2020/03/89996384_10222328772156304_3292612436959428608_o.jpg"></img>
            </div>
            <div class="popup-img-div">
            <img class="popup-img-small" src="https://www.medicaldevice-network.com/wp-content/uploads/sites/11/2020/03/89996384_10222328772156304_3292612436959428608_o.jpg"></img>
  
        
            <img class="popup-img-small" src="https://www.medicaldevice-network.com/wp-content/uploads/sites/11/2020/03/89996384_10222328772156304_3292612436959428608_o.jpg"></img>
         
            <img class="popup-img-small" src="https://www.medicaldevice-network.com/wp-content/uploads/sites/11/2020/03/89996384_10222328772156304_3292612436959428608_o.jpg"></img>
            </div>
        </div>
         </div>
        </div>
        </div>
           )
  }

  export default PostPopup;