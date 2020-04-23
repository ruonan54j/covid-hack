import Part from './part';

import React, { useState, useEffect } from "react";

const PartListing = () => {
  
    const [partDetails, setPartDetails] = useState([]);
    const [loading, setLoading] = useState("");
    
    useEffect(() => {
      setLoading("Fetching data...");
      fetch('https://us-central1-covid-hack-c6549.cloudfunctions.net/api/v1/parts')
          .then(res => {
          return res.json().then((data) =>{
              if (res.status == 200){
              setPartDetails(data);
              setLoading("");
              }
          })
  });
  }, []);

    let partListing = [];
    for (var i = 0; i < partDetails.length; i++) {
        partListing.push(
          <div key={i} className="part-col">
          <Part part={partDetails[i]}/> 
            </div>
        );
    }
    
    return (
      <div>
      <h1 className="h1-part-listings">Maker's Database</h1>
      <div className="row part-listing">
    <p className="part-loading-msg">{loading}</p>
        {partListing}
      </div>
      </div>
    )
  }

  export default PartListing;