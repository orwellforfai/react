import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ShopProvider from "./contexts/shop";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ShopProvider>
        <App/>
    </ShopProvider>
);
