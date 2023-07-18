import React, { useState, useEffect } from "react";
import Map from "./Map";
import ParkList from "./ParkList"
import Search from "./Search"

function Body() {
    const [parks, setParks] = useState([])
    const [searchInput, setSearchInput] = useState("");
    
    useEffect(() => {
        fetch('http://localhost:3000/parks')
        .then(res => res.json())
        .then((parks) => setParks(parks))
    }, []);

    const parksToDisplay = parks.filter(park => park.name?.toLowerCase().includes
    (searchInput.toLowerCase()))

    return (
        <div>
            <Map />
            <Search 
                searchInput={searchInput}
                onSearchChange={setSearchInput}
            />
            <ParkList parks={parksToDisplay}/>
        </div>
    )
}

export default Body