import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from "../HomePage";
import Register from "../Register";
import LogIn from "../LogIn";
import AbmProducts from "../AbmProducts"
import ShoppingCart from '../ShoppingCart';
import ProductPage from '../Product';

function RouterContainer() {
    return (
        <Routes>

            <Route exact path='/' element={<HomePage />} />

            <Route path='/register' element={<Register />} />

            <Route path='/login' element={<LogIn />} />

            <Route path='/abm' element={<AbmProducts />} />

            <Route path='/shoppingCart' element={<ShoppingCart />} />

            <Route path='/product/:idProduct' element={<ProductPage />} />

        </Routes>
    );
}

export default RouterContainer;