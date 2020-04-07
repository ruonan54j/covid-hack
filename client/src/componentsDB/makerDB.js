import Navigationbar from "../componentsCommon/navbar";
import PartFilesPopup from "./partPopup";
import SearchBar from "../componentsCommon/searchbar";
import PartListing from "./partListing";

import React, { useState, useEffect } from "react";

const MakersDatabase = () => {
    return (
        <div className="makers-db">
        <PartFilesPopup />
         <SearchBar className="search-position"/>
         <PartListing/>
        </div>
    ) 
  }
  export default MakersDatabase;