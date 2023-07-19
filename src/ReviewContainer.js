import React from "react";
import ReviewCard from './ReviewCard'
import { Header, Card } from 'semantic-ui-react'



//need to map over the reviews to show them and somehow tell the form to go here
function ReviewContainer({ reviews }) {
    const reviewCard = reviews.map((review) => {
    return <ReviewCard key={review.id} name={review.name} review={review.review} />
})
    return (
       <div>
        <Header>
            Reviews
        </Header>
        {reviewCard}
        </div> 
    )
}

export default ReviewContainer
