import React, {useContext} from 'react';
import {Shop} from "../../contexts/shop";
import CartItem from "../../components/CartItem/cartItem";
import Form from "../../components/Form/form";




const CartContainer = () => {
    const {products} = useContext(Shop)

    const confirmPurchase = () => {
        <Form/>
    }


    return (
        <div>
            {products.map(product => {
                return <CartItem key={product.id} item={product} />
            })}
            <button className='btn btn-danger sm-3' Link={confirmPurchase()} > Confirma Compra? </button>
            <Form/>
        </div>
    );
};

export default CartContainer;
