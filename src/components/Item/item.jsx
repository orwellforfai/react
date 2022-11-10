import React from 'react'
import {useNavigate} from "react-router-dom";

//Card - HAce el renderizado con la CARD

const Item = ({product}) => {
    const navigate = useNavigate()

    const navigateDetail = () => {
        // link al detalle del producto
        navigate('/detail/${product.char_id}')
    }
        return (
    <div onClick={navigateDetail}>
        <img src={product.img} alt={"Character Name"}/>
        <p> {product.name}</p>
    </div>

)
}
export default Item