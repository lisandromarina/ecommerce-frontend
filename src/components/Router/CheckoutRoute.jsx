import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from "react-redux";

function CheckoutRoute() {
    const isAuth = useSelector(state => state.user.isAuth);
    const shoppingCartQuuantity = useSelector(state => state.shoppingCart.cartProducts);


    if (!isAuth || !shoppingCartQuuantity || shoppingCartQuuantity === 0) {
        return <Navigate to={"/"} replace />;
    }

    return <Outlet />;
}

export default CheckoutRoute
