
import React, { useState } from "react";

const Part = (props) => {
  
    const handleSupplierClick = () =>{
      document.getElementById("overlay-part").style.display = "block";  
    }
    
    return (
      <div class="part-post">
        <div class="row">
        <div class= "col-8 part-content">
        <h1 class="part-title">{props.title}</h1>
        <p class="part-description">{props.description}</p>
        <button class="part-need-btn part-btn-custom">
          I need this part
        </button>
        <button class="part-supply-btn part-btn-custom" onClick={handleSupplierClick}>
         I can make this part
        </button>
        </div>
        <div class="col-4 right-div">
          <img src={props.img} alt = "valves" class="part-img"/>
        </div>
        </div>
      </div>
    )
  }

  export default Part;