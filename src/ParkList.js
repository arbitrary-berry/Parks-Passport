import React from "react";
import ParkCard from "./ParkCard"
import { Card } from "semantic-ui-react";


function ParkList({ parks }) {
    const parkCards = parks.map((park) => {
    return <ParkCard key={park.LocationNumber} {...park}/>
})
    return (    
    <Card.Group>
        {parkCards}
      </Card.Group>

    )
}

export default ParkList