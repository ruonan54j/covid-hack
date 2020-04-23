
import React, { useState } from "react";

const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = React.useState("");
     const handleChange = event => {
       setSearchTerm(event.target.value);
     };
     return (
       <div className = "text-center">
         <input
           className="search-input"
           type="text"
           placeholder={props.placeholder}
           value={searchTerm}
           onChange={handleChange}
         />
         <button className="search-btn">Enter</button>
       </div>
     );
   }
   
   export default SearchBar;