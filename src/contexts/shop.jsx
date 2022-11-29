import {createContext, useState} from "react";
import React from 'react';

export const Shop = createContext(undefined)


const ShopProvider = ({children}) => {

    const [products, setProducts] = useState([]);

    const addProduct = (productToAdd) => {
        console.log(productToAdd)

        const flagRepeated = isInCart(productToAdd.id)

        if (flagRepeated) {
            // logica para agregar la cantidad al item
        } else {
            setProducts([...products, productToAdd])

        }

    }

    const isInCart = (id) => {
        return products.some(product => product.id === id)
    }

    return (
        <div>
            <Shop.Provider value={{products, addProduct}}>
                {children}
            </Shop.Provider>
        </div>
    );
};

export default ShopProvider;
