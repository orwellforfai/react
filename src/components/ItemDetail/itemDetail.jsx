import React, {useState} from 'react'
import "./itemDetail.css"
import ItemCount from "../ItemCount/itemCount";

const ItemDetail = ({character}) => {

    const [quantityItemDetal, setQuantityItemDetail] = useState(0)

    const confirmPurchase = (quantity) => {
        console.log(quantity)
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