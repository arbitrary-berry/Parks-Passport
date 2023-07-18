import React from "react";
import { Card } from 'semantic-ui-react';
import { AiOutlineHeart } from 'react-icons/ai';

const extra = (
    <a>
      <AiOutlineHeart />
    </a>
  )
  
  const ParkCard = ({ Photo, LocationName, Tagline}) => (
    <Card
      image={Photo}
      extra={extra}
      header={LocationName}
      description={Tagline}
    />
  )

export default ParkCard