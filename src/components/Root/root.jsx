import React from "react";
import NavBar from "../NavBar/navBar";
import {Outlet} from "react-router-dom";

const Root = () => {
    return (
        <>
            <NavBar/>
            <Outlet/>
            <h1> Breaking Bad Information</h1>
        </>
    )
}
export default Root
