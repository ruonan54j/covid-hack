import React, { useState } from "react";
const PartFilesPopup = () => {
    const handleClickClose = () => {
          document.getElementById("overlay-part").style.display = "none";
      }
    
    return (
      <div id="overlay-part">
        
        <div className="part-popup">
          <div className="popup-title row">Ventilator Valves</div>
          <div className="row">
          <div className="popup-col popup-desc">
          
          <p className="popup-grey-text">DESCRIPTION</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor lectus enim, in tristique ex varius ut. Nulla id porttitor lectus. Duis in urna vel felis hendrerit fermentum.</p>
            <p className="popup-grey-text">PRINT FILES</p>
            <ul className="parts-popup-list">
              <li>part1.stl</li>
              <li>part2.stl</li>
              <li>part3.stl</li>
            </ul>
        </div>
        
          <div className="popup-col">
            <div className="popup-img-div">
            <img className="popup-img" src="https://www.medicaldevice-network.com/wp-content/uploads/sites/11/2020/03/89996384_10222328772156304_3292612436959428608_o.jpg"></img>
            </div>
            <div className="popup-img-div">
            <img className="popup-img-small" src="https://www.medicaldevice-network.com/wp-content/uploads/sites/11/2020/03/89996384_10222328772156304_3292612436959428608_o.jpg"></img>
  
        
            <img className="popup-img-small" src="https://www.medicaldevice-network.com/wp-content/uploads/sites/11/2020/03/89996384_10222328772156304_3292612436959428608_o.jpg"></img>
         
            <img className="popup-img-small" src="https://www.medicaldevice-network.com/wp-content/uploads/sites/11/2020/03/89996384_10222328772156304_3292612436959428608_o.jpg"></img>
            </div>
        </div>
         </div>
          <div className="row">
          
            <button className="part-btn-custom-blue popup-btn">Download Files</button>
            <button className="part-btn-custom popup-btn" onClick={handleClickClose}>Close</button>
          </div>
        </div>
        </div>
           )
  }

  export default PartFilesPopup;