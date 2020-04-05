import Part from './part';

import React, { useState, useEffect } from "react";

const PartListing = () => {
  
    const [partDetails, setPartDetails] = useState([{
      title:"",
      description:"",
      img:""
    }]);
    
    useEffect(() => {
      // code to run on component mount
      // make ajax request
      let partArr = [];
      for (let i = 0; i <11 ; i++) {
        partArr.push({
        title:"Valves_"+i,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ......",
        img:"https://www.medicaldevice-network.com/wp-content/uploads/sites/11/2020/03/89996384_10222328772156304_3292612436959428608_o.jpg"
      });
      }
      setPartDetails(partArr);
    }, [])
    
    let partListing = [];
    for (var i = 0; i < partDetails.length; i++) {
        partListing.push(
          <div class="col-6">
          <Part title={partDetails[i].title} description={partDetails[i].description} img={partDetails[i].img}/> 
            </div>
        );
    }
    
    return (
      <div class="row part-listing">
        {partListing}
      </div>
    )
  }

  export default PartListing;