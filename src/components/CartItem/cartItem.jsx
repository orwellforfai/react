import React, {useContext} from 'react';
import TrashCanIcon from "../TrashCan/trashCanIcon";
import {Shop} from "../../contexts/shop";
import {Link} from "react-router-dom";

const CartItem = ({item}) => {
    const {removeProducts} = useContext(Shop);


    return (
        <>
            <div>
                <img src={item.img} alt={"Character"} width={150}/>
                <h1>"Articulo: " {item.name}</h1>
                <p> "Cantidad a Comprar: " {item.quantity}</p>
                <p> "Precio: "{item.price}</p>

                <TrashCanIcon onClick={() => removeProducts(item.id)}/>

            </div>
            <Link to={'/form'}>Confirma Compra</Link>
        </>
)
    ;
};

export default CartItem;
