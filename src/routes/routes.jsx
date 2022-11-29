import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../components/Root/root"
import ItemDetailContainer from "../containers/ItemDetailContainer/itemDetailContainer";
import ItemListContainer from "../containers/ItemListContainer/itemListContainer";
import CartContainer from "../containers/CartContainer/cartContainer";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <h1>No encontrado</h1>,
        children: [
            {
                // Puede ser una landing de acceso a la aplicacion ( esta dos veces itemlistcontainer ) --> ppodria ser home la primera ruta y luego itemlistocontainer
                path: "/",
                element: <ItemListContainer />,
            },
            {
                path: "/category/:categoryId",
                element: <ItemListContainer />,
            },
            {
                path: "/detail/:id",
                element: <ItemDetailContainer/>,
            },
            {
                path: "/cart",
                element: <CartContainer/>,
            },
        ],
    },
]);

const Router = () => {
    return <RouterProvider router={router} />;
};

export default Router;

