import React, { useState, useEffect } from 'react';
import ProductPageComponent from "./ProductPageComponent";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductById } from "../../redux/slices/productSlice";
import { updateCartProduct } from "../../redux/slices/shoppingCartSlice";


function ProductPageContainer() {
    const [quantity, setQuantity] = useState(1);
    const productSelected = useSelector(state => state.products.productSelected);
    const userState = useSelector(state => state.user.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let { idProduct } = useParams();

    function fetchProduct() {
        dispatch(fetchProductById(idProduct))
    }

    function handleOnClickCount(event) {
        if (event.target.value === "+") {
            setQuantity(quantity + 1);
        } else {
            if (quantity > 1) {
                setQuantity(quantity - 1)
            }
        }
    }

    useEffect(() => {
        fetchProduct();
    }, [])

    function handleOnSubmit() {
        if (localStorage.getItem("token")) {
            dispatch(updateCartProduct({
                userId: userState.id,
                quantity: quantity,
                idProduct: idProduct
            }))
        } else {
            navigate("/login")
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