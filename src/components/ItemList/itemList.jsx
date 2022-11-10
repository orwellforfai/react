import React from 'react'
import Item from "../Item/item";

//Se encarga de hacer el map con los productos y se lo pasa a ITEM
const ItemList = ({products}) => {
    return (
        products.map(products => {
            return <Item key={products.char_id} product={products}  />
        }
        )
    )
}

export default ItemList