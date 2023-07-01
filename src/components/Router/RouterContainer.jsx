import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from "../../features/product/pages/HomePage";
import Register from "../../features/auth/pages/Register";
import LogIn from "../../features/auth/pages/LogIn";
import AbmProducts from "../../views/AbmProducts"
import ShoppingCart from '../../views/ShoppingCart';
import ProductPage from '../../features/product/pages/ProductDetails';
import PublicRoute from './PublicRoute';
import PrivateRoute from "./PrivateRoute"
import CheckoutRoute from './CheckoutRoute'
import ProductCategory from '../../features/product/pages/ProductCategory';
import Checkout from '../../features/checkout/pages/Checkout';
import MySells from '../../views/SellCenter';

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
                <Route path="/center-sell" element={<MySells />} />
            </Route>

            <Route path="/" element={<CheckoutRoute />}>
                <Route path='/checkout' element={<Checkout />} />
            </Route>

            <Route path='/product/:idProduct' element={<ProductPage />} />
            <Route path='/product/:categoryName/:idCategory' element={<ProductCategory />} />

        </Routes>
    );
}

export default RouterContainer;