import React, {useEffect, useState} from 'react';
import "./itemListContainer.css"
import ItemList from "../../components/ItemList/itemList";
import {useParams} from "react-router-dom";
import {collection, query,where, getDocs} from "firebase/firestore";
import {db} from "../../firebase/config";


const ItemListContainer = () => {
// NOTA: Los containers son los componentes que tienen la logica de negocio.
// Se encarga de la logica del fetching

    const [products, setProducts] = useState([])                            // Se inicializa con el contenido probable que puede tener la variable

    const {categoryId} = useParams()
    console.log(categoryId)

    useEffect(() => {
        (async () => {
            try {
                console.log(categoryId)

                // Codigo copiado de la documentacion de firebase https://firebase.google.com/docs/firestore/query-data/get-data

                // arma la peticion ( aca iria el where...) a la base de datos - coleccion creada en firebase
                let q
                if(categoryId) {
                    q= query(collection(db,"products" ), where ("category", "==",categoryId ))
                }
                else {
                    q = query(collection(db, "products"))
                }
                // Ejecuta la query
                const querySnapshot = await getDocs(q);
                const productosFirebase = []

                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data());
                    productosFirebase.push({...doc.data(), id: doc.id})
                });

                setProducts(productosFirebase)



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
