import React, {useEffect, useState} from "react";
import ItemDetail from "../../components/ItemDetail/itemDetail";
import {useParams} from "react-router-dom";


const ItemDetailContainer = () => {

    const {id} = useParams()
    const [character, setCharacter] = useState({});


    useEffect(() => {
        //hacer el fetch del detalle del producto
        const getCharacterDetail = async () => {
            const response = await fetch(`https://www.breakingbadapi.com/api/characters/${id}`)
            const data = await response.json()

            setCharacter(data[0])
        }

        getCharacterDetail()
        //hacer el fetch del detalle del producto
    }, [id])

    return ( <ItemDetail character={character}/>)
};

export default ItemDetailContainer;