import React from 'react'
import {useNavigate} from "react-router-dom";
import "./style.css"


//Card - HAce el renderizado con la CARD

const Item = ({product}) => {
    const navigate = useNavigate()

    const navigateDetail = () => {
        // link al detalle del producto
        navigate(`/detail/${product.char_id}`)
    }
        return (
    <div onClick={navigateDetail} className="item">
        <img className="imagen" src={product.img} alt={"Character Name"}/>
        <p> {product.name}</p>
    </div>

)
}
export default Item