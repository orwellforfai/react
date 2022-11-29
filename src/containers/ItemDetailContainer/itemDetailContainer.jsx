import React, {useEffect, useState} from "react";
import ItemDetail from "../../components/ItemDetail/itemDetail";
import {useParams} from "react-router-dom";
import {doc, getDoc} from "firebase/firestore";
import {db} from "../../firebase/config";

const ItemDetailContainer = () => {

    const {id} = useParams()
    const [character, setCharacter] = useState({});


    useEffect(() => {
            //hacer el fetch del detalle del producto
            const getCharacterDetail = async () => {
                // const response = await fetch(`https://www.breakingbadapi.com/api/characters/${id}`)
                // const data = await response.json()
                //
                // setCharacter(data[0])

                // Otra vez tomamos los datos de la doc de firestore. Obtener "un" documento
                // hacemos el query de busqueda al documento   - el tercer parametro es el id a buscar
                const docRef = doc(db, "products", id);
                // ejecutamos la query
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    console.log("Document data:", docSnap.data());
                    setCharacter({...docSnap.data(), id: docSnap.id})
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No existe el producto!");
                }

            }
            getCharacterDetail()
            //hacer el fetch del detalle del producto
        },
        [id])

    return (<ItemDetail character={character}/>)
};

export default ItemDetailContainer;