import React, {useContext, useState} from 'react'
import "./itemDetail.css"
import ItemCount from "../ItemCount/itemCount";
import Shop from "../../contexts/shop";

const ItemDetail = ({character}) => {

    const {addProduct} = useContext(Shop)
    const [quantityItemDetal, setQuantityItemDetail] = useState(0)

    const confirmPurchase = (quantity) => {
        console.log(quantity)
        addProduct({...character,quantity})
        setQuantityItemDetail(quantity)

    }

    return (
        <div className='item-detail'>
            <img src={character.img} width={450}/>
            <h1>{character.name}</h1>
            <button className='btn btn-danger sm-3'>Comprar Poster</button>
            {quantityItemDetal ?
                <button> Go to CART </button>
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