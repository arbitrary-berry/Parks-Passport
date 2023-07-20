import React, { useState, useEffect } from "react";
import { Card, Image, Divider } from 'semantic-ui-react';
import { useParams } from 'react-router-dom';


function ShowDetails() {

    const {LocationNumber} = useParams()
    const [park, setPark] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/parks?LocationNumber=${LocationNumber}`)
            .then(res => res.json())
            .then((park) => setPark(park[0]))
    }, [])

    return (
        <div>
            <Divider />
            <Card centered>
                <Card.Content>
                    <Image
                    src={park.Photo} 
                    />
                    <Divider />
                    <Card.Header>{park.LocationName}</Card.Header>
                    <Card.Description>{park.Tagline}</Card.Description>                    
                </Card.Content>
                <Card.Content>
                    <h4>{park.City}, {park.State} {park.ZipCode}</h4>
                    <p>Coordinates: {park.Location?.coordinates[0]}, {park.Location?.coordinates[1]}</p>
                    <a href={park.Website}>Website</a>
                </Card.Content>
            </Card>
        </div>
    )
}

export default ShowDetails