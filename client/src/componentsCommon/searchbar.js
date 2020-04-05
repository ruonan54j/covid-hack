
import React, { useState } from "react";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = React.useState("");
     const handleChange = event => {
       setSearchTerm(event.target.value);
     };
     return (
       <div class = "text-center">
         <div class="container container-search">
         <input
           class="search-input"
           type="text"
           placeholder="Search for a part"
           value={searchTerm}
           onChange={handleChange}
         />
         <button class="search-btn">Add Filter</button>
         <div class="search-desc">
         <p class="search-sort">sorted by Date</p>
         </div>
         </div>
       </div>
   
     );
   }
   
   export default SearchBar;