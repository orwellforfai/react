import React, {useContext} from 'react';
import {Shop} from "../../contexts/shop";
import CartItem from "../../components/CartItem/cartItem";
import Form from "../../components/Form/form";
import {useNavigate} from "react-router-dom";


const CartContainer = () => {
    const {products} = useContext(Shop)

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/form')
    }

    return (
        <div>
            {products.map(product => {
                return <CartItem key={product.id} item={product}/>
            })}
            <button className='btn btn-danger sm-3' onClick={handleNavigate}> Confirma Compra?</button>
        </div>
    );
};

export default CartContainer;
