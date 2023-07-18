import React from "react";
import NewReviewForm from "./NewReviewForm"
import WishList from "./WishList"
import Reviews from "./Reviews"



function Profile() {
    return (
        <div>
            <NewReviewForm />
            <WishList />
            <Reviews />
        </div>
    )
}

export default Profile