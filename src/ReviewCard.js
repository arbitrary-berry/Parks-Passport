import React from 'react';
import { Card, Comment } from 'semantic-ui-react';
import { AiFillHeart } from 'react-icons/ai'


function ReviewCard( reviewArr ) {
    return(
        <Card>
            <Card.Content>
                <h5>{reviewArr.name}</h5>
            <Card.Description>
                <p>{reviewArr.review}</p>
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