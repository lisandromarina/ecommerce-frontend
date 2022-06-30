import React, { useState } from 'react';
import { logOut } from "../../redux/slices/userSlice";
import NavbarComponent from "./NavbarComponent";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from 'react-router-dom';

function NavbarContainer() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const userState = useSelector(state => state.user.user)
    const location = useLocation();


    function handleOnChange(text) {
        setSearch(text)
    };

    function handleOnClickShoppingCart() {
        navigate("/shoppingCart")
    };

    function handleOnLogout() {
        localStorage.clear();
        dispatch(logOut())
    };

    function handleOnNavigateLogin() {
        navigate("/login", { state: { prevPath: location.pathname } })
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
        />
    );
}
export default NavbarContainer;