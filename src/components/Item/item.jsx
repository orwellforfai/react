import React from 'react'

//Card - HAce el renderizado con la CARD
const Item = ({product}) => {
    return (

        // <div className="card" style="width: 18rem;">
        //     <p key={product.id} />
        //     <img className="card-img-top" src={product.img} alt="Card image cap"/>
        //     <div className="card-body">
        //         <h5 className="card-title">{product.name}</h5>
        //
        //     </div>
        // </div>

        <div>
        <img src={product.img} alt={"Character Name"} />
        <p key={product.id}> {product.name}</p>
        </div>

    )
}
export default Item