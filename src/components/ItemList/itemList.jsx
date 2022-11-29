import React from 'react'
import Item from "../Item/item";
import "./itemlist.css"


//Se encarga de hacer el map con los productos y se lo pasa a ITEM
const ItemList = ({products}) => {
    return (
        <div className="itemlist">
            {products.map(products => {
                return <Item key={products.id} product={products}/>
            })
        }
        </div>
        )

}

export default ItemList