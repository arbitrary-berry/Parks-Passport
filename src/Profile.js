import React, { useState, useEffect } from "react";
import NewReviewForm from "./NewReviewForm"
import WishList from "./WishList"


function Profile() {
    const [parks, setParks] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/parks")
            .then(res => res.json())
            .then((parks) => setParks(parks))
    }, [])

    function handleNewReview(newReview) {
        setParks([...parks, newReview])
    }


    return (
        <div>
            <NewReviewForm onNewReview={handleNewReview}/>
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



{/* <Segment.Item>
<NewReviewForm onNewReview={handleNewReview}/>
</Segment.Item>
<Segment.Item>
<WishList />
</Segment.Item>
<Segment.Item>
<Reviews />
</Segment.Item>   */}