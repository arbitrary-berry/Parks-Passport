import React from "react";
import ParkCard from "./ParkCard"



function ParkList({ parks }) {
    const parkCards = parks.map(park => <ParkCard  key={park["Location Number"]} {...park} />)

    return (
        <div>
            {parkCards}
        </div>
    )
}

export default ParkList