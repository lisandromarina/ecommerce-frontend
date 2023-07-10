import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from 'react-router-dom';
import NavbarComponent from "./NavbarComponent";

function NavbarContainer({ handleOnOpenSidebar }) {
    const [allCategory, setAllCategory] = useState([]);
    const userState = useSelector(state => state.user.user);
    const cartProductQuantity = useSelector(state => state.shoppingCart.cartProducts);
    const allCategoryState = useSelector(state => state.category.allCategory);
    const location = useLocation();
    const navigate = useNavigate();

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

    function handleOnNavigateMySells() {
        navigate("/center-sell", { state: { prevPath: location.pathname } });
    }

    async function handleOnClickCategory(event) {
        let categorySelected = allCategory.find(oneCategory => oneCategory.name === event.target.outerText);
        navigate(`/product/${categorySelected.name}/${categorySelected.id}`, { state: { prevPath: location.pathname } })
    }

    useEffect(() => {
        setAllCategory(allCategoryState);
    }, [allCategoryState]);

    return (
        <NavbarComponent
            userState={userState}
            allCategory={allCategory}
            handleOnClickShoppingCart={handleOnClickShoppingCart}
            handleOnNavigateLogin={handleOnNavigateLogin}
            handleOnNavigateHomePage={handleOnNavigateHomePage}
            handleOnNavigateRegister={handleOnNavigateRegister}
            handleOnNavigateCreateProduct={handleOnNavigateCreateProduct}
            cartProductQuantity={cartProductQuantity}
            handleOnClickCategory={handleOnClickCategory}
            handleOnNavigateMySells={handleOnNavigateMySells}
            handleOnOpenSidebar={handleOnOpenSidebar}
        />
    );
}
export default NavbarContainer;