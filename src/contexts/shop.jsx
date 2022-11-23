import {createContext, useState} from "react";
import React from 'react';

export const Shop = createContext({})


const ShopProvider = ({children}) => {

    const [products, setProducts] =useState([]);

    const addProduct =(productToAdd) => {
        console.log(productToAdd)
        setProducts([...products,productToAdd])

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
