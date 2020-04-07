
import React, { useState } from "react";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = React.useState("");
     const handleChange = event => {
       setSearchTerm(event.target.value);
     };
     return (
       <div className = "text-center">
         <div className="container container-search">
         <input
           className="search-input"
           type="text"
           placeholder="Search for a part"
           value={searchTerm}
           onChange={handleChange}
         />
         <button className="search-btn">Add Filter</button>
         <div className="search-desc">
         <p className="search-sort">sorted by Date</p>
         </div>
         </div>
       </div>
   
     );
   }
   
   export default SearchBar;