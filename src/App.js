import React from "react";
import PageHeader from "./PageHeader";
import Body from "./Body"
import Profile from "./Profile"
import { Grid } from 'semantic-ui-react'


function App() {

    return (
        <div>
            <PageHeader />
            <Grid>
                <Grid.Column width={1}>
                </Grid.Column>
                <Grid.Column width={3}>
                    <Profile /> 
                </Grid.Column>
                <Grid.Column width={11}>
                    <Body /> 
                </Grid.Column>
                <Grid.Column width={1}>
                </Grid.Column>
            </Grid>
        </div>
    )
}
export default App