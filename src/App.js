import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import PageHeader from "./PageHeader";
import Home from "./Home";
import NavBar from "./NavBar";
import Reviews from "./Reviews"
import { Divider } from 'semantic-ui-react';


function App() {
    const [page, setPage] = useState("/")
    return (
        <div>
            <Divider></Divider>
            <PageHeader />
            <NavBar onChangePage={setPage} />
            <Routes>
				<Route exact path="/" element={ <Home /> }/>
				<Route path="/reviews" element={ <Reviews />} />
			</Routes>
        </div>
    )
}
export default App

/* <div>
<Divider></Divider>
<PageHeader />
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
</div> */

/* <main>
<Nav />
<Home />
<About />
<Contact />
</main> */

/* <div>
<Nav />
<Routes>
    <Route path="/" element={ <Home /> }/>
    <Route path="/about" element={ <About /> }/>
    <Route path="contact" element={ <Contact /> }/>
</Routes>
</div> */