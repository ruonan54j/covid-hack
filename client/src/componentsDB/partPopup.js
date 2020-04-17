import React, { useState, useContext } from "react";
import {selectedPartContext} from '../selectedContext';

const PartFilesPopup = () => {
  const {selectedPart, setSelectedPart} = useContext(selectedPartContext);

    const handleClickClose = () => {
          document.getElementById("overlay-part").style.display = "none";
      }
      let printFiles = [];
      if(selectedPart.hasOwnProperty("printFile")){
      
      for(let i=0; i< selectedPart.printFile.length; i++){
  
        printFiles.push(
          <li key={i}>
            <a href={selectedPart.printFile[i].file} className="printfile" download>{selectedPart.printFile[i].name}</a>
          <br/>
          </li>
        );
      }

    }
    return (
      <div id="overlay-part">
        
        <div className="part-popup">
        <div className="row">
        <p className="close-btn-part" onClick={handleClickClose}>X close</p>
        </div>
          <div className="row">
          <div className="popup-col popup-desc">
          <div className="popup-title">{selectedPart.title}</div> 
          <p className="popup-grey-text">DESCRIPTION</p>
          <p>{selectedPart.description}</p>
            <p className="popup-grey-text">PRINT FILES: click to download</p>
            <ul>
              {printFiles}
              </ul>

        </div>
        
          <div className="popup-col">
            <div className="popup-img-div">
            <img className="popup-img" src={selectedPart.img}></img>
            </div>
        </div>
         </div>
          <div className="row">
        
          </div>
        </div>
        </div>
           )
  }

  export default PartFilesPopup;