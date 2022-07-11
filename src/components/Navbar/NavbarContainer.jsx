import React, { useState } from 'react';
import { logOut } from "../../redux/slices/userSlice";
import { cleanShoppingCartState } from "../../redux/slices/shoppingCartSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from 'react-router-dom';
import NavbarComponent from "./NavbarComponent";

function NavbarContainer() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const userState = useSelector(state => state.user.user)
    const location = useLocation();
    const cartProductQuantity = useSelector(state => state.shoppingCart.cartProducts)

    function handleOnChange(text) {
        setSearch(text)
    };

    function handleOnClickShoppingCart() {
        navigate("/shoppingCart")
    };

    function handleOnLogout() {
        localStorage.clear();
        dispatch(cleanShoppingCartState());
        dispatch(logOut())
    };

    function handleOnNavigateRegister() {
        navigate("/register", { state: { prevPath: location.pathname } })
    }
    

    function handleOnNavigateLogin() {
        navigate("/login", { state: { prevPath: location.pathname } })
    }

    function handleOnNavigateCreateProduct() {
        navigate("/abmProducts", { state: { prevPath: location.pathname } })
    }

    function handleOnNavigateHomePage(){
        navigate("/")
    }

    return (
        <NavbarComponent
            userState={userState}
            handleOnLogout={handleOnLogout}
            handleOnChange={handleOnChange}
            handleOnClickShoppingCart={handleOnClickShoppingCart}
            handleOnNavigateLogin={handleOnNavigateLogin}
            handleOnNavigateHomePage={handleOnNavigateHomePage}
            handleOnNavigateRegister={handleOnNavigateRegister}
            handleOnNavigateCreateProduct={handleOnNavigateCreateProduct}
            cartProductQuantity={cartProductQuantity}
        />
    );
}
export default NavbarContainer;