import React from "react";
import "./navBar.css"
import CartWidget from "../CartWidget/cartWidget";

const NavBar = () => {
    return (
        <div className="position-relative">
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#news">Noticias</a></li>
            <li><a href="#contact">Contactenos</a></li>
            <li><a href="#about">Nosotros</a></li>
            <CartWidget/>
        </ul>
        </div>
    )


}
export default NavBar