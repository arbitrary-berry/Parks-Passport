import React from "react";
import ShowDetails from "./ShowDetails"



function ParkCard({ image, name, emojis }) {
    return (
        <div>
            <img scr={image} alt={name}/>
            <h3>{emojis} {name}</h3>
            <ShowDetails />
        </div>
    )
}

export default ParkCard