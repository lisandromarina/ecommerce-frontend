import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from 'react-router-dom';
import { cleanShoppingCartState } from "../../redux/slices/shoppingCartSlice";
import { clearAddresses } from "../../redux/slices/addressSlice";
import { logOut } from "../../redux/slices/userSlice";
import NavbarComponent from "./NavbarComponent";
import { createAlert } from "../../redux/slices/alertSlice"

function NavbarContainer() {
    const [allCategory, setAllCategory] = useState([]);
    const userState = useSelector(state => state.user.user);
    const cartProductQuantity = useSelector(state => state.shoppingCart.cartProducts);
    const allCategoryState = useSelector(state => state.category.allCategory);
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleOnClickShoppingCart() {
        navigate("/shoppingCart", { state: { prevPath: location.pathname } });
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

    function handleOnNavigateMySells(){
        navigate("/center-sell", { state: { prevPath: location.pathname } });
    }

    async function handleOnClickCategory(event) {
        let categorySelected = allCategory.find(oneCategory => oneCategory.name === event.target.outerText);
        navigate(`/product/${categorySelected.name}/${categorySelected.id}`, { state: { prevPath: location.pathname } })
    }

    function handleOnLogout() {
        localStorage.clear();
        dispatch(cleanShoppingCartState());
        dispatch(clearAddresses());
        dispatch(
            createAlert({
                message: `Hasta la proxima! que tengas lindo dia  🤗`,
                type: "success"
            })
        );
        dispatch(logOut());
    };

    useEffect(() => {
        setAllCategory(allCategoryState);
    }, [allCategoryState]);

    return (
        <NavbarComponent
            userState={userState}
            allCategory={allCategory}
            handleOnLogout={handleOnLogout}
            handleOnClickShoppingCart={handleOnClickShoppingCart}
            handleOnNavigateLogin={handleOnNavigateLogin}
            handleOnNavigateHomePage={handleOnNavigateHomePage}
            handleOnNavigateRegister={handleOnNavigateRegister}
            handleOnNavigateCreateProduct={handleOnNavigateCreateProduct}
            cartProductQuantity={cartProductQuantity}
            handleOnClickCategory={handleOnClickCategory}
            handleOnNavigateMySells={handleOnNavigateMySells}
        />
    );
}
export default NavbarContainer;