import React, { useState, useEffect } from 'react';
import ProductPageComponent from "./ProductPageComponent";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductById } from "../../../../redux/actions/productAction";

function ProductPageContainer() {
    const [isInitialized, setIsInitialized] = useState(false);

    const isAuth = useSelector(state => state.user.isAuth)
    const productSelected = useSelector(state => state.products.productSelected);
    const dispatch = useDispatch();
    let { idProduct } = useParams();

    async function fetchProduct() {
        await dispatch(fetchProductById(idProduct));
        setIsInitialized(true)
    }

    useEffect(() => {
        fetchProduct();
    })

    return (
        <ProductPageComponent
            isAuth={isAuth}
            isInitialized={isInitialized}
            productSelected={productSelected}
        />
    )
};

export default ProductPageContainer;