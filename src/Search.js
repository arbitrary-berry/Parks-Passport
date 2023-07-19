import React from "react";
import { Search, Divider } from 'semantic-ui-react'


function ParkSearch({ searchTerm, onSearchChange }) {

    const handleResultSelect = (e, { result }) => this.setState({ value: result.LocationName })//this we can change to be the nav
    
    return (
        <div>
            <label htmlFor="search">Search Parks:</label>
            <Search 
                value={searchTerm}
                onResultSelect={handleResultSelect}
                placeholder='Search...'
                onSearchChange={(e) => onSearchChange(e.target.value)}
          />
            <Divider />
        </div>
    );
}

export default ParkSearch



// import React from "react";


// function Search({ searchTerm, onSearchChange }) {
//     return (
//         <div className="searchBar">
//             <label htmlFor="search">Search Parks:</label>
//             <input
//                 value={searchTerm}
//                 type="text"
//                 id="search"
//                 placeholder="Enter Park Name..."
//                 onChange={(e) => onSearchChange(e.target.value)}
//             />
//         </div>
//     );
// }

// export default Search