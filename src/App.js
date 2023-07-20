import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import PageHeader from "./PageHeader";
import Home from "./Home";
import NavBar from "./NavBar";
import About from "./About";
import ShowDetails from "./ShowDetails";
import { Divider } from 'semantic-ui-react';


function App() {
    const [page, setPage] = useState("/")
    return (
        <div>
            <Divider></Divider>
            <PageHeader />
            <NavBar onChangePage={setPage} />
            <Routes>
				<Route path="/" element={ <Home /> }/>
				<Route path="/about" element={ <About />} />
                <Route path="/:LocationNumber" element={ <ShowDetails /> }/>
			</Routes>
        </div>
    )
}
export default App