
import React, { useState, useContext } from "react";
import {selectedPartContext} from '../selectedContext';

const Part = (props) => {
  const {selectedPart, setSelectedPart} = useContext(selectedPartContext);

    const handleSupplierClick = () =>{
      document.getElementById("overlay-part").style.display = "block";  
      setSelectedPart(props.part);
    }
    
    return (
      <div className="part-post">
        <div className="row">
        <div className= "part-content">
        <h1 className="part-title">{props.part.title}</h1>
        <p className="part-description">{props.part.description}</p>
  
        <button className="part-supply-btn part-btn-custom" onClick={handleSupplierClick}>
         I can make this part
        </button>
        </div>
        <div className="right-div">
          <img src={props.part.img} alt = "valves" className="part-img"/>
        </div>
        </div>
      </div>
    )
  }

  export default Part;