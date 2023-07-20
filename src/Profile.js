import React, { useState, useEffect } from "react";
import ReviewForm from "./ReviewForm"
import WishList from "./WishList"
import Reviews from "./Reviews"


function Profile() {
    const [parks, setParks] = useState([])
    const [reviewArr, setReviews] = useState([])

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
        setReviews([...reviewArr, newReview])
    }


    return (
        <div>
            <ReviewForm parks={parks} addNewReview={addNewReview}/>
            <Reviews reviews={reviewArr} />
            <WishList />
        </div>

)
}

export default Profile