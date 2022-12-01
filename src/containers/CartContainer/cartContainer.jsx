import React, {useContext} from 'react';
import {Shop} from "../../contexts/shop";
import CartItem from "../../components/CartItem/cartItem";

const CartContainer = () => {
    const {products} = useContext(Shop)

    return (
        <div>
            {products.map(product => {
                return <CartItem key={product.id} item={product} />
            })}
            <button className='btn btn-danger sm-3' onClick={confirmPurchase}> Confirma Compra? </button>
        </div>
    );
};

export default CartContainer;
