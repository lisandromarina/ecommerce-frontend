import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from "../../views/HomePage";
import Register from "../../views/Register";
import LogIn from "../../views/LogIn";
import AbmProducts from "../../views/AbmProducts"
import ShoppingCart from '../../views/ShoppingCart';
import ProductPage from '../../views/ProductDetails';
import PublicRoute from './PublicRoute';
import PrivateRoute from "./PrivateRoute"
import CheckoutRoute from './CheckoutRoute'
import ProductCategory from '../../views/ProductCategory';
import ShippingDetails from '../../views/ShippingDetails';

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
               {/*  <Route path="/shipping-details" element={<ShippingDetails />} /> */}
            </Route>

            <Route path="/" element={<CheckoutRoute />}>
                <Route path='/shipping-details' element={<ShippingDetails />} />
            </Route>

            <Route path='/product/:idProduct' element={<ProductPage />} />
            <Route path='/product/:categoryName/:idCategory' element={<ProductCategory />} />

        </Routes>
    );
}

export default RouterContainer;