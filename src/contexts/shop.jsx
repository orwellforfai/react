import {createContext, useState} from "react";
import React from 'react';

export const Shop = createContext(undefined)


const ShopProvider = ({children}) => {

    const [products, setProducts] = useState([]);

    const addProduct = (productToAdd) => {
        console.log(productToAdd)

        const flagRepeated = isInCart(productToAdd.id)

        if (flagRepeated) {
            // logica para agregar la cantidad al item   - 1ero se busca el repetido y se suma la cantidad a agregar
            const productRepeated = products.find(productInCart => productInCart.id === productToAdd.id)
            productRepeated.quantity = productRepeated.quantity + productToAdd.quantity

            // Se quita el producto repetido del carrito y se coloca el modificado
            const productsCartWihoutRepetead = products.filter(productInCart => productInCart.id !== productToAdd.id)
            setProducts([...productsCartWihoutRepetead, productRepeated])
        } else {
            setProducts([...products, productToAdd])

        }

    }

    const isInCart = (id) => {
        return products.some(product => product.id === id)
    }

    // Eliminar un Carrito
    const removeProducts = (id) => {
        const productsCart = products.filter(productInCart => productInCart.id !== id)
        setProducts(productsCart)
    }
    // Vaciar el Carrito
    const emptyCart = () => {
        setProducts([])

    }
    // Calculo del total
    const totalCart = () => {
        const total = products.reduce((accumulation, currentProduct) => accumulation = accumulation + currentProduct.quantity + currentProduct.price, 0)
        return total
    }
    // Calculo del total de Items
const totalItems = () => {
let total = 0
    products.forEach(product => total = total + product.quantity)
    return total
}

    return (
        <div>
            <Shop.Provider value={{products, addProduct, removeProducts, emptyCart, totalCart,totalItems}}>
                {children}
            </Shop.Provider>
        </div>
    );
};

export default ShopProvider;
