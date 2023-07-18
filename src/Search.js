import React from "react";


function Search({ searchTerm, onSearchChange }) {
    return (
        <div className="searchBar">
            <label htmlFor="search">Search Parks:</label>
            <input
                value={searchTerm}
                type="text"
                id="search"
                placeholder="Enter Park Name..."
                onChange={(e) => onSearchChange(e.target.value)}
            />
        </div>
    );
}

export default Search