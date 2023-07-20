import React from 'react';
import { Card, Comment } from 'semantic-ui-react';
import { AiFillHeart } from 'react-icons/ai'


function ReviewCard( reviews ) {
    return(
        <Card>
            <Card.Content>
                <h5>{reviews.name}</h5>
            <Card.Description>
                <p>{reviews.review}</p>
            </Card.Description>
            </Card.Content>
        </Card>
    )
}


export default ReviewCard

// import React from 'react'
// import { Button, Comment, Form, Header } from 'semantic-ui-react'


   

/* <Comment>
      <AiFillHeart></AiFillHeart>
      <Comment.Content>
        <Comment.Author as='h5'>{reviews.name}</Comment.Author>
        <Comment.Text>{reviews.review}</Comment.Text>
      </Comment.Content>
    </Comment> */