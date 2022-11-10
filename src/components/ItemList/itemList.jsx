import React from 'react'
import Item from "../Item/item";

//Se encarga de hacer el map con los productos y se lo pasa a ITEM
const ItemList = ({products}) => {
    return (
        products.map(products => {
            return <Item product={products}  />
        }
        )
    )
}

export default ItemList