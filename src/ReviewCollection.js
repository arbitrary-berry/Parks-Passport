import React from "react";
import ReviewCard from './ReviewCard'
import { Header } from 'semantic-ui-react'



function ReviewCollection({ reviews }) {
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

export default ReviewCollection
