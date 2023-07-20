import React from "react";
import { Link } from "react-router-dom"

function NavBar() {
    return(
        <nav>
            <Link to="/">Parks</Link>
            <Link to="/reviews">Reviews</Link>
        </nav>
    )

}

export default NavBar