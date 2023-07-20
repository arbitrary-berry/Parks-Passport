import React, { useState } from "react";
import { Button, Form, Select, TextArea, Divider } from 'semantic-ui-react';
 

const initialFormState = {
  name: "",
  review: "",
}

function ReviewForm({ parks, reviews, addNewReview }) {
    const [form, setForm] = useState (initialFormState)
    const options = parks ? parks.map((park) => (
        { key: park.LocationNumber, text: park.LocationName, value: park.LocationName }
      )) : [];
    
  
    function handleForm(e, data) {
      setForm({...form, [data.name] : data.value })
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
        setForm(initialFormState)
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
              value={form.name}
              name='name'
              placeholder='National Park'
              onChange={(e,data) => handleForm(e,data)}
            />
          </Form.Group>
          <Form.Field
            control={TextArea}
            label='Review'
            name='review'
            value={form.review}
            placeholder='Write your review here...'
            onChange={(e,data) => handleForm(e,data)}
          />
          <Form.Field control={Button}>Submit</Form.Field>
        </Form>
        <Divider></Divider>
        </div>
      )
    }


export default ReviewForm