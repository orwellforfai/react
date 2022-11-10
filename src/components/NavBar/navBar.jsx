import React from "react";
import "./navBar.css"
import CartWidget from "../CartWidget/cartWidget";
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div className="position-relative">
        <ul>
            <li>
            <Link to="/">Home </Link>
            </li>
            <li>
            <Link to="/category/Better+Call+Saul">Better Call Saul </Link>
                </li>
            <li>
                <Link to="/category/Breaking+Bad">Breaking Bad </Link>
            </li>

            <CartWidget/>
        </ul>
        </div>
    )


}
export default NavBar