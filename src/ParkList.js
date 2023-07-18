import React from "react";
import ParkCard from "./ParkCard"


function ParkList({parks}) {
    const parkCards = parks.map(park => {
    return <ParkCard key={park["Location Number"]} {...park}/>
})
    return (
        <ul className="cards">{parkCards}</ul>
    )
}

export default ParkList