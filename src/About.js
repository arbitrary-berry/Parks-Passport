import React from "react";
import {Card, Grid, Divider, Container } from 'semantic-ui-react';
import { BsPinMapFill, BsLinkedin, BsGithub } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';
import { RiHeartsFill } from 'react-icons/ri';


function About() {

    return (
    <div>
      <Divider></Divider>
      <Grid>
        <Grid.Row>
          <Grid.Column width={2}></Grid.Column>
            <Grid.Column width={4}>
              <Card centered>
                <Card.Content>
                  <h2>Description:</h2>
                    <p>Park Passport is a demo application 
                    to keep track of all the National Parks you've visited.
                    You can search the different Parks, 
                    and click on each photo to show more details about that park.
                    On the lefthand side you can leave a review of a park.</p>
                </Card.Content>
              </Card>
          </Grid.Column>
          <Grid.Column width={4}>
            <Card centered>
              <Card.Content>
                <h2>Future Features:</h2>
                  <p>
                      <li>A login so each the user can have their own passport profile.</li>
                      <li>National Park Service colors to the theme.</li>
                      <li>A click feature on the <AiFillHeart color="red"/> in each Park and have that add to the WishList 
                      on the lefthand side.</li>
                      <li>A map at the top of US States and being able to
                      click on each state and have it show in the body of the page the parks in that state.</li>
                      <li><RiHeartsFill color="red"/> as a click feature on the park card to mark you'd like to go back to that park.</li>
                      <li><BsPinMapFill color="#070cab"/> as a click feature on the park card to mark you've visited that park.</li>
                  </p>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column width={2}>
            <h2>Collaborators</h2>
              <Card>
                <Card.Content><h3>Alyssa Essman</h3></Card.Content>
                <Card.Content>
                  <a href="https://github.com/arbitrary-berry"><BsGithub /></a> <a href="https://www.linkedin.com/in/alyssa-essman"><BsLinkedin /></a>
                </Card.Content>
              </Card>
              <Card>
                <Card.Content><h3>Austin Morse</h3></Card.Content>
                  <Card.Content>
                      <a href="https://github.com/amorse110"><BsGithub /></a> <a href="https://github.com/amorse110"><BsLinkedin /></a>
                    </Card.Content>
              </Card>
            </Grid.Column>
          <Grid.Column width={2}></Grid.Column>
        </Grid.Row>
        
        <Grid.Row>
          <Grid.Column width={4}></Grid.Column>
          <Grid.Column width={7}>
            <Container width={9}>
              <h2>Wireframe</h2>
                <iframe width="600" height="700" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FN84wxw6GRyEZzey4NLRIf7%2FWireframing-(Copy)%3Ftype%3Ddesign%26node-id%3D747069%253A448%26mode%3Ddesign%26t%3DHmdGIWXdogbauFpn-1" allowfullscreen></iframe>
            </Container>  
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </div>
    )
}
export default About