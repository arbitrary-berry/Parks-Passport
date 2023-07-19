import React from "react";
import { Card, Image, Divider } from 'semantic-ui-react';
import { AiOutlineHeart } from 'react-icons/ai';

const extra = (
    <a>
      <AiOutlineHeart />
    </a>
  )
  
  const ParkCard = ({ Photo, LocationName, Tagline}) => (
    <Card>
        <Card.Content>
            <Image
                src={Photo} 
            />
            <Divider />
            <Card.Header>{LocationName}</Card.Header>
            <Card.Description>{Tagline}</Card.Description>
            <Card.Content extra>{extra}</Card.Content>
        </Card.Content>
    </Card>
  )

export default ParkCard