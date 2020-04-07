
import React, { useState } from "react";

const Part = (props) => {
  
    const handleSupplierClick = () =>{
      document.getElementById("overlay-part").style.display = "block";  
    }
    
    return (
      <div className="part-post">
        <div className="row">
        <div className= "col-8 part-content">
        <h1 className="part-title">{props.title}</h1>
        <p className="part-description">{props.description}</p>
        <button className="part-need-btn part-btn-custom">
          I need this part
        </button>
        <button className="part-supply-btn part-btn-custom" onClick={handleSupplierClick}>
         I can make this part
        </button>
        </div>
        <div className="col-4 right-div">
          <img src={props.img} alt = "valves" className="part-img"/>
        </div>
        </div>
      </div>
    )
  }

  export default Part;