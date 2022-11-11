import React from 'react'
import "./itemDetail.css"

const ItemDetail = ({character}) => {

    console.log(character)
    return (
        // <h1>Hola</h1>
        // <img src={character.img} width={450}/>
        <div className='item-detail'>
            <img src={character.img} width={450}/>
            <h1>{character.name}</h1>
            <button className='btn btn-danger sm-3'>Bootstrap button</button>
        </div>
    )
}

export default ItemDetail