import React from "react";
import "./itemListContainer.css"

const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <h1 className="itemListContainer"> {greeting}</h1>
        </div>
    );
};

export default ItemListContainer;
