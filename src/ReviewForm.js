import React, { useState } from "react";
import Reviews from "./Reviews"
import { Button, Form, Select, TextArea, Divider } from 'semantic-ui-react'

function ReviewForm({ parks, reviews, addNewReview }) {
    const [form, setForm] = useState ({
        name: "",
        review: "",
    })

    const options = parks ? parks.map((park) => (
        { key: park.LocationNumber, text: park.LocationName, value: park.LocationName }
      )) : [];
    
  
    function handleForm(e) {
        setForm({...form, [e.target.name] : e.target.value })
    }

        function handleSubmit(e){
        e.preventDefault()
        fetch('http://localhost:3000/reviews', {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify({
              'name' : form.name,
              'review' : form.review
            })
        })
        .then(res =>res.json())
        .then(newReview => {addNewReview(newReview)})
    }
    //need to add clearing the form

  
      return (
        <div>
        <Form onSubmit={handleSubmit}>
            <h3>My Park Reviews</h3>
          <Form.Group widths='equal'>
            <Form.Field
              control={Select}
              label='National Park'
              options={options}
              name='name'
              placeholder='National Park'
              onChange={handleForm}
            />
          </Form.Group>
          <Form.Field
            control={TextArea}
            label='Review'
            name='review'
            placeholder='Write your review here...'
            onChange={handleForm}
          />
          <Form.Field control={Button}>Submit</Form.Field>
        </Form>
        <Divider />
        <Reviews />
        <Divider />
        </div>
      )
    }


export default ReviewForm