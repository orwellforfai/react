import React from 'react'
import "./itemDetail.css"
import ItemCount from "../ItemCount/itemCount";

const ItemDetail = ({character}) => {

    const confirmPurchase = (quantity) => {
        console.log(quantity)
    }

    return (
        <div className='item-detail'>
            <img src={character.img} width={450}/>
            <h1>{character.name}</h1>
            <button className='btn btn-danger sm-3'>Comprar Poster</button>
            <ItemCount
                onAdd={confirmPurchase}
                initial={1}
                stock={100}
                />


        </div>
    )
}

export default ItemDetail