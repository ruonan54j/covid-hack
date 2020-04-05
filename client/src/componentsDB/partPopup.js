import React, { useState } from "react";
const PartFilesPopup = () => {
    const handleClickClose = () => {
          document.getElementById("overlay-part").style.display = "none";
      }
    
    return (
      <div id="overlay-part">
        
        <div class="part-popup">
          <div class="popup-title row">Ventilator Valves</div>
          <div class="row">
          <div class="popup-col popup-desc">
          
          <p class="popup-grey-text">DESCRIPTION</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor lectus enim, in tristique ex varius ut. Nulla id porttitor lectus. Duis in urna vel felis hendrerit fermentum.</p>
            <p class="popup-grey-text">PRINT FILES</p>
            <ul class="parts-popup-list">
              <li>part1.stl</li>
              <li>part2.stl</li>
              <li>part3.stl</li>
            </ul>
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
          <div class="row">
          
            <button class="part-btn-custom-blue popup-btn">Download Files</button>
            <button class="part-btn-custom popup-btn" onClick={handleClickClose}>Close</button>
          </div>
        </div>
        </div>
           )
  }

  export default PartFilesPopup;