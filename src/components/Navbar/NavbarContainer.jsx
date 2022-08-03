import React, { useState, useEffect } from 'react';
import { logOut } from "../../redux/slices/userSlice";
import { cleanShoppingCartState } from "../../redux/slices/shoppingCartSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from 'react-router-dom';
import NavbarComponent from "./NavbarComponent";
import { fetchAllCategory, fetchCategoryByName } from '../../redux/slices/categorySlice';

function NavbarContainer() {
    const [allCategory, setAllCategory] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const userState = useSelector(state => state.user.user);
    const location = useLocation();
    const cartProductQuantity = useSelector(state => state.shoppingCart.cartProducts);
    const allCategoryState = useSelector(state => state.category.allCategory);

    function handleOnChange(text) {
        setSearch(text);
    };

    function handleOnClickShoppingCart() {
        navigate("/shoppingCart");
    };

    function handleOnNavigateRegister() {
        navigate("/register", { state: { prevPath: location.pathname } });
    }


    function handleOnNavigateLogin() {
        navigate("/login", { state: { prevPath: location.pathname } });
    }

    function handleOnNavigateCreateProduct() {
        navigate("/abmProducts", { state: { prevPath: location.pathname } });
    }

    function handleOnNavigateHomePage() {
        navigate("/");
    }

    async function handleOnClickCategory(event) {
        //NOT IMPLEMENTED YET
        //event.target.outerText
        //navigate("/abmProducts", { state: { prevPath: location.pathname } })
    }

    function handleOnLogout() {
        localStorage.clear();
        dispatch(cleanShoppingCartState());
        dispatch(logOut());
    };

    useEffect(() => {
        setAllCategory(allCategoryState);
    }, [allCategoryState]);

    useEffect(() => {
        dispatch(fetchAllCategory());
    }, []);

    return (
        <NavbarComponent
            userState={userState}
            allCategory={allCategory}
            handleOnLogout={handleOnLogout}
            handleOnChange={handleOnChange}
            handleOnClickShoppingCart={handleOnClickShoppingCart}
            handleOnNavigateLogin={handleOnNavigateLogin}
            handleOnNavigateHomePage={handleOnNavigateHomePage}
            handleOnNavigateRegister={handleOnNavigateRegister}
            handleOnNavigateCreateProduct={handleOnNavigateCreateProduct}
            cartProductQuantity={cartProductQuantity}
            handleOnClickCategory={handleOnClickCategory}
        />
    );
}
export default NavbarContainer;