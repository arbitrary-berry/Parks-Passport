import React, { useState, useEffect } from "react";
import Map from "./Map";
import ParkList from "./ParkList"
import Search from "./Search"

function Body() {
    const [parks, setParks] = useState([])
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch("http://localhost:3000/parks")
            .then(res => res.json())
            .then((parks) => setParks(parks))
    }, [])

    const parksToDisplay = parks.filter(park => park.LocationNumber.toLowerCase().includes
    (searchTerm.toLowerCase()))

    return (
        <div>
            <Map />
            <Search 
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
            />
            <ParkList parks={parksToDisplay}/>
        </div>
    )
}

export default Body