import React from "react";
import ReviewForm from "./ReviewForm"
import WishList from "./WishList"
import Reviews from "./Reviews"



function Profile() {
    return (
        <div>
            <ReviewForm />
            <WishList />
            <Reviews />
        </div>
    )
}

export default Profile