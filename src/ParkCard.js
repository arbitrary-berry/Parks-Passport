import React, { useState } from "react";
import { Card, Divider } from 'semantic-ui-react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';


const EmptyHeart= () => {
  const [isFilled, setIsFilled] = useState(false);

  const handleClick = () => {
    setIsFilled(!isFilled);
  };
  return (
      <a onClick={handleClick}>
        {isFilled ? <AiFillHeart color="red"/> : <AiOutlineHeart color="red"/>}
      </a>
  );
}
  
  const ParkCard = ({ Photo, LocationName, Tagline, LocationNumber }) => (
    <Card>
        <Card.Content>
            <img
                src={Photo}
                alt={LocationName}
                height={260}
                width={260} 
                overflow hidden
            />
            <Divider />
            <Card.Header>{LocationName}</Card.Header>
            <Card.Description>{Tagline}</Card.Description>
            <div className='card-footer'>
              <Link to={`/${LocationNumber}`}>View Park</Link><EmptyHeart align='right'/>
            </div>
        </Card.Content>
    </Card>
  )

export default ParkCard