import React, { useState } from "react";


function NewReviewForm({ parks, onNewReview }) {
    const [form, setForm] = useState ({
        name: "",
        review: "",
    })

    function handleForm(e) {
        setForm({...form, [e.target.value] : e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch('http://localhost:3000/parks', {
            method: 'POST',
            headers: { 'Content-Type' : 'application.json'},
            body: JSON.stringify(form)
        })
        .then(res =>res.json())
        .then(newReview => {onNewReview(newReview)})
    }
    return (
        <div className="new-review-form">
            <h2>Parks I've Visited</h2>
            <form onSubmit={handleSubmit}>
                <select
                className="ui selection dropdown">
                    {parks?.map((park) => <option key={park["Location Number"]} value={park.value}>{park["Location Name"]}</option>)}
                </select>
                <input
                type="text"
                name="review"
                placeholder="Write your Review Here"></input>
                <button type="submit">Add Review</button>
            </form>
            <></>
        </div>
    )
}

export default NewReviewForm

