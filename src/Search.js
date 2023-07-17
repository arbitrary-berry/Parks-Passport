import React from "react";




function Search({ searchInput, onSearchChange }) {
    return (
        <div>
            <label htmlFor="search">Search Parks</label>
            <input
                value={searchInput}
                type="text"
                id="search"
                placeholder="Enter Park Name..."
                onChange={(e) => onSearchChange(e.target.value)}
            />
        </div>
    )
}

export default Search