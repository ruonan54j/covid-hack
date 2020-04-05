import Navigationbar from "../componentsCommon/navbar";
import PartFilesPopup from "./partPopup";
import SearchBar from "../componentsCommon/searchbar";
import PartListing from "./partListing";

import React, { useState, useEffect } from "react";

const MakersDatabase = () => {
    return (
        <div class="makers-db">
        <PartFilesPopup />
         <SearchBar class="search-position"/>
         <PartListing/>
        </div>
    ) 
  }
  export default MakersDatabase;