import React from "react";
import {Card, Grid, Header, Divider, Container } from 'semantic-ui-react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'


function About() {

    return (
        <div>
        <Divider></Divider>
            <Container>
                <Header>Description</Header>
                    <p>
                    Park Passport is a demo application 
                    to keep track of all the National Parks you've visited.
                    You can search the different Parks, 
                    and click on each photo to show more details about that park.
                    On the lefthand side you can leave a review of a park. 
                    </p>
            </Container>
        <Divider></Divider>
        <Container>
                <Header>Future Features:</Header>
                    <p>
                    A login so each the user can have their own passport profile. Adding 
                    a click feature on the heart in each Park and have that add to the WishList 
                    on the lefthand side. Also adding a map at the top of US States and being able to
                    click on each state and have it show in the body of the page the parks in that state. 
                    </p>
                    <p><a href="https://github.com/arbitrary-berry/Parks-Project"><BsGithub /></a> github repo for Park Passport</p>
            </Container>
        <Divider></Divider>    
        <Header>Collaborators</Header>      
        <Grid>
            <Grid.Row columns={2}>
                <Grid.Column>
                <Card>
                    <Card.Content header='Alyssa Essman' />
                    <Card.Content>
                        <a href="https://github.com/arbitrary-berry"><BsGithub /></a> 
                        <a href="https://www.linkedin.com/in/alyssa-essman"><BsLinkedin /></a>
                    </Card.Content>
                </Card>
                </Grid.Column>
                <Grid.Column>
                <Card>
                    <Card.Content header='Austin Morse' />
                    <Card.Content>
                        <a href="https://github.com/amorse110"><BsGithub /></a> 
                        <a href="https://github.com/amorse110"><BsLinkedin /></a></Card.Content>
                    </Card>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        </div>
    )
}
export default About

//names- github and linkedin and github for this project, 
// description of app, current features, future features

/* <Grid divided='vertically'>
<Grid.Row columns={2}>
  <Grid.Column>
    <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
  </Grid.Column>
  <Grid.Column>
    <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
  </Grid.Column>
</Grid.Row>

<Grid.Row columns={3}>
  <Grid.Column>
    <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
  </Grid.Column>
  <Grid.Column>
    <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
  </Grid.Column>
  <Grid.Column>
    <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
  </Grid.Column>
</Grid.Row>
</Grid> */