import Navigationbar from "../componentsCommon/navbar";
import PartFilesPopup from "./partPopup";
import SearchBar from "../componentsCommon/searchbar";
import PartListing from "./partListing";
import {selectedPartContext} from '../selectedContext';
import React, { useState, useEffect } from "react";

const MakersDatabase = () => {
    const [selectedPart, setSelectedPart] = React.useState([]);

    return (
        
        <div className="makers-db">
        <selectedPartContext.Provider value={{selectedPart, setSelectedPart}}>
        <PartFilesPopup />
         <PartListing/>
         </selectedPartContext.Provider>
        </div>

    ) 
  }
  export default MakersDatabase;