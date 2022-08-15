import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from "../../views/HomePage";
import Register from "../../views/Register";
import LogIn from "../../views/LogIn";
import AbmProducts from "../../views/AbmProducts"
import ShoppingCart from '../../views/ShoppingCart';
import ProductPage from '../../views/Product';
import PrivateRoute from "./PrivateRoute"
import PublicRoute from './PublicRoute';

function RouterContainer() {
    return (
        <Routes>

            <Route exact path='/' element={<HomePage />} />

            <Route path="/" element={<PublicRoute />}>
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<LogIn />} />
            </Route>

            <Route path="/" element={<PrivateRoute />}>
                <Route path='/abmProducts' element={<AbmProducts />} />
                <Route path="/shoppingCart" element={<ShoppingCart />} />
            </Route>

            <Route path='/product/:idProduct' element={<ProductPage />} />

        </Routes>
    );
}

export default RouterContainer;