import React, { useState, useEffect } from 'react';
import ProductListComponent from './ProductListComponent';
import { fetchAllProductsByCategory } from "../../redux/actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation, useParams } from 'react-router-dom';

function ProductListContainer() {
    let { categoryName, idCategory } = useParams();
    const allProducts = useSelector(state => state.products.allProducts);
    //const allCategoryState = useSelector(state => state.category.allCategory);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleOnClick(productId) {
        navigate(`/product/${productId}`)
    }

    function fetchProduct() {
        dispatch(fetchAllProductsByCategory(idCategory))
    }

    useEffect(() => {
        fetchProduct();
    }, [idCategory, categoryName])


    return (
        <ProductListComponent
            categoryName={categoryName}
            arrayProducts={allProducts}
            handleOnClick={handleOnClick}
        />
    )
};

export default ProductListContainer;