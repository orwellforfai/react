import React from 'react';
import item from "../Item/item";

const CartItem = ({item}) => {
    return (
        <div>
            <img src={item.img} alt={"Character"} width={150}/>
            <h1> {item.name}</h1>
        </div>
    );
};

export default CartItem;
