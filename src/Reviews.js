import React from "react";
import ReviewCard from './ReviewCard'
import { Header } from 'semantic-ui-react'



function Reviews({ reviewArr }) {
    const reviewCard = reviewArr.map((review) => {
    return <ReviewCard key={reviewArr.id} name={reviewArr.name} review={reviewArr.review} />
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

export default Reviews
