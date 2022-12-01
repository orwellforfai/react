import React, {useContext, useState} from 'react'
import "./itemDetail.css"
import ItemCount from "../ItemCount/itemCount";
import {Shop} from "../../contexts/shop";
import {useNavigate} from "react-router-dom";

const ItemDetail = ({character}) => {

    const {addProduct} = useContext(Shop)
    const [quantityItemDetal, setQuantityItemDetail] = useState(0)

    const navigate = useNavigate()

    const confirmPurchase = (quantity) => {
        console.log(quantity)
        addProduct({...character, quantity})
        setQuantityItemDetail(quantity)
    }

    const handleNavigate = () => {
        navigate('/cart')
    }
    return (
        <div className='item-detail'>
            <img src={character.img} alt={"Character"} width={450}/>
            <h1>{character.name}</h1>
            {quantityItemDetal ?
                <button className='btn btn-danger sm-3' onClick={handleNavigate}> Go to CART </button>
                :
                <ItemCount
                    onAdd={confirmPurchase}
                    initial={1}
                    stock={100}
                />
            }
        </div>
    )
}

export default ItemDetail