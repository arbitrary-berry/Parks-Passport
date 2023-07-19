import React, { useState } from "react";
import Reviews from "./Reviews"
import { Button, Form, Select, TextArea, Divider } from 'semantic-ui-react'

function NewReviewForm({ parks, onNewReview }) {
    const [form, setForm] = useState ({
        name: "",
        review: "",
    })

    const options = parks ? parks.map((park) => (
        { key: park.LocationNumber, text: park.LocationName }
      )) : [];
    
  
    function handleForm(e) {
        setForm({...form, review: e.target.value })
    }

        function handleSubmit(e){
        e.preventDefault()
        fetch('http://localhost:3000/parks', {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify(form)
        })
        .then(res =>res.json())
        .then(newReview => {onNewReview(newReview)})
    }
  
      return (
        <div>
        <Form onSubmit={handleSubmit}>
            <h3>My Park Reviews</h3>
          <Form.Group widths='equal'>
            <Form.Field
              control={Select}
              label='National Park'
              options={options}
              placeholder='National Park'
            />
          </Form.Group>
          <Form.Field
            control={TextArea}
            label='Review'
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


export default NewReviewForm
// {parks?.map((park) => <option key={park.LocationNumber} value={park.value}>{park.LocationName}</option>)}