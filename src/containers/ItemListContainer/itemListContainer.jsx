import React, {useEffect, useState} from 'react';
import "./itemListContainer.css"
import ItemList from "../../components/ItemList/itemList";

const ItemListContainer = ({greeting}) => {
// NOTA: Los containers son los componentes que tienen la logica de negocio.
// Se encarga de la logica del fetching

    const [products, setProducts] = useState([])                            // Se inicializa con el contenido probable que puede tener la variable

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch("https://www.breakingbadapi.com/api/characters")
                const data = await response.json()
                console.log(data)
                setProducts(data)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [])


    return (
        // pasa el fetch a ItemList
        <ItemList products={products}/>
    )

}
export default ItemListContainer;
