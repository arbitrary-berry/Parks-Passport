import React, { useState, useEffect } from "react";
import ReviewForm from "./ReviewForm";
import WishList from "./WishList";
import ReviewCollection from "./ReviewCollection";

function Profile() {
    const [parks, setParks] = useState([])
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/parks")
            .then(res => res.json())
            .then((parks) => setParks(parks))
    }, [])

    useEffect(() => {
        fetch("http://localhost:3000/reviews")
            .then(res => res.json())
            .then((reviews) => setReviews(reviews))
    }, [])

    function addNewReview(newReview) {
        setReviews([...reviews, newReview])
    }

    return (
        <div>
            <ReviewForm parks={parks} addNewReview={addNewReview}/>
            <ReviewCollection reviews={reviews} />
            <WishList />
        </div>

)
}

export default Profile