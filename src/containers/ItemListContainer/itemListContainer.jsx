import React, {useEffect, useState} from 'react';
import "./itemListContainer.css"
import ItemList from "../../components/ItemList/itemList";
import {useParams} from "react-router-dom";

const ItemListContainer = ({greeting}) => {
// NOTA: Los containers son los componentes que tienen la logica de negocio.
// Se encarga de la logica del fetching

    const [products, setProducts] = useState([])                            // Se inicializa con el contenido probable que puede tener la variable

    const {categoryId} = useParams()
    console.log(categoryId)

    useEffect(() => {
        (async () => {
            try {
                console.log(categoryId)
                let response
                if (categoryId) {
                    response = await fetch("https://www.breakingbadapi.com/api/characters?category=${categoryId}")
                } else{
                    response = await fetch("https://www.breakingbadapi.com/api/characters")
            }
                console.log(response)
                const data = await response.json()
                console.log(data)
                setProducts(data)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [categoryId])


    return (
        // pasa el fetch a ItemList
        <ItemList products={products}/>
    )

}
export default ItemListContainer;
