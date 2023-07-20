import React from "react";
import Body from "./Body";
import Profile from "./Profile"
import { Grid, Divider } from 'semantic-ui-react';


function Home() {
    return (
        <div>
            <Divider></Divider>
            <Grid>
                <Grid.Column width={1}>
                </Grid.Column>
                <Grid.Column width={4}>
                    <Profile /> 
                </Grid.Column>
                <Divider vertical />
                <Grid.Column width={10}>
                    <Body /> 
                </Grid.Column>
            </Grid>
        </div>
    )
}
export default Home