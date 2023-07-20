import React from "react";
import { Card } from 'semantic-ui-react';
import { AiFillHeart } from 'react-icons/ai'



function WishList() {
    return (
        <Card>
        <Card.Content>
          <h3>WishList</h3>
          <Card.Description>
            <AiFillHeart></AiFillHeart> <span>Name of National Park</span>
          </Card.Description>
        </Card.Content>
      </Card>
    )
}

export default WishList
//<Card.Header>WishList</Card.Header>