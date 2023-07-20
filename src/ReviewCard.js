import React from 'react';
import { Card, Comment } from 'semantic-ui-react';

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