import React from 'react';
import { useNavigate } from 'react-router-dom';
import ListProductsComponent from "./ListProductsComponents";

function ListProductsContainer(props) {
    const navigate = useNavigate();
    const {
        arrayProducts,
        title
    } = props;

    function handleOnClick(productId) {
        navigate(`/product/${productId}`)
    }

    return (
        <ListProductsComponent
            title={title}
            arrayProducts={arrayProducts}
            handleOnClick={handleOnClick}
        />
    )
};

export default ListProductsContainer;