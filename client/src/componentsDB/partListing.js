import Part from './part';

import React, { useState, useEffect } from "react";

const PartListing = () => {
  
    const [partDetails, setPartDetails] = useState([{
      title:"",
      description:"",
      img:""
    }]);
    
    useEffect(() => {
      fetch('https://us-central1-covid-hack-c6549.cloudfunctions.net/api/v1/parts')
          .then(res => {
          console.log("res", res);
          return res.json().then((data) =>{
              console.log("DATA",data);
              if (res.status == 200){
              setPartDetails(data);
              }
          })
  });
  }, []);
/*
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
    */
    let partListing = [];
    for (var i = 0; i < partDetails.length; i++) {
        partListing.push(
          <div key={i} className="col-6">
          <Part part={partDetails[i]}/> 
            </div>
        );
    }
    
    return (
      <div className="row part-listing">
        {partListing}
      </div>
    )
  }

  export default PartListing;