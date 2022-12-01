import React, {useContext} from 'react';
import {Shop} from "../../contexts/shop";
import CartItem from "../../components/CartItem/cartItem";


const CartContainer = () => {
    const {products} = useContext(Shop)



    return (
        <div>
            {products.map(product => {
                return <CartItem key={product.id} item={product}/>
            })}
        </div>
    );
};

export default CartContainer;
