import React, { useState, useEffect } from "react";
import ReviewForm from "./ReviewForm"
import WishList from "./WishList"


function Profile() {
    const [parks, setParks] = useState([])
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/parks")
            .then(res => res.json())
            .then((parks) => setParks(parks))
    }, [])

    function addNewReview(newReview) {
        setParks([...parks, newReview])
    }


    return (
        <div>
            <ReviewForm parks={parks} reviews={reviews} addNewReview={addNewReview}/>
            <WishList />
        </div>

)
}

export default Profile


// used to before    
// return (
//     <div>
//         <NewReviewForm />
//         <WishList />
//         <Reviews />
//     </div>
// )