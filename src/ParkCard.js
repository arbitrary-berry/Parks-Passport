import React from "react";


function ParkCard({Photo, LocationName}) {
    return (
        <div className="card">
            <img src={Photo} alt={LocationName}/>
            <h2>{LocationName}</h2>
        </div>
    )
}

export default ParkCard