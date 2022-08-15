import React, { useState, useEffect } from 'react';
import ProductPageComponent from "./ProductPageComponent";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductById } from "../../redux/actions/productAction";
import { updateCartProduct, fetchShoppingCart } from "../../redux/actions/shoppingCartAction";

function ProductPageContainer() {
    const [quantity, setQuantity] = useState(1);
    const productSelected = useSelector(state => state.products.productSelected);
    const userState = useSelector(state => state.user.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    let { idProduct } = useParams();

    function fetchProduct() {
        dispatch(fetchProductById(idProduct))
    }

    function handleOnClickCount(event) {
        if (event.target.value === "+") {
            setQuantity(quantity + 1);
        } else if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    useEffect(() => {
        fetchProduct();
    }, [])

    async function handleOnSubmit() {
        if (localStorage.getItem("token")) {
            await dispatch(updateCartProduct({
                userId: userState.id,
                quantity: quantity,
                idProduct: idProduct
            }))
            await dispatch(fetchShoppingCart(userState.id));
        } else {
            const prevPath = location.pathname;
            navigate("/login", { state: { prevPath: prevPath } })
        }
    }

    return (
        <ProductPageComponent
            productSelected={productSelected}
            handleOnSubmit={handleOnSubmit}
            quantity={quantity}
            handleOnClickCount={handleOnClickCount}
        />
    )
};

export default ProductPageContainer;