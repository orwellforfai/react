import React, {useContext} from 'react';
import item from "../Item/item";
import TrashCanIcon from "../TrashCan/trashCanIcon";
import {Shop} from "../../contexts/shop";

const CartItem = ({item}) => {
    const {removeProducts} = useContext(Shop);



    return (
        <div>
            <img src={item.img} alt={"Character"} width={150}/>
            <h1>"Articulo: " {item.name}</h1>
            <p> "Cantidad a Comprar: " {item.quantity}</p>
            <p> "Precio: "{item.price}</p>

                <TrashCanIcon onClick={()=>removeProducts(item.id)}/>

        </div>
    );
};

export default CartItem;
