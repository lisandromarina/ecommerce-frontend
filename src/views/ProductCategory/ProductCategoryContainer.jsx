import React, { useEffect } from 'react';
import { fetchAllProductsByCategory } from "../../redux/actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom';
import ListProducts from "../../components/ListProducts"

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
        <ListProducts
            title={categoryName}
            arrayProducts={allProducts}
            handleOnClick={handleOnClick}
        />
    )
};

export default ProductListContainer;