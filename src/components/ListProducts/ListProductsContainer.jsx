import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ListProductsComponent from "./ListProductsComponents";
import usePageable from '../../hook/usePageable';
import useResponsiveItemsQuantity from '../../hook/useResponsiveItemsQuantity.jsx'

function ListProductsContainer(props) {
    const { arrayProducts, title } = props;
    const navigate = useNavigate();
    const itemsQuantity = useResponsiveItemsQuantity();
    const { currentPage, goToPage, paginateItems, resetPage } = usePageable(itemsQuantity);

    const currentItems = paginateItems(arrayProducts);
    const totalPages = Math.ceil(arrayProducts.length / itemsQuantity);

    function handleOnClick(productId) {
        navigate(`/product/${productId}`);
    }

    useEffect(() => {
        resetPage();
    }, [arrayProducts]);

    return (
        <ListProductsComponent
            title={title}
            handleOnClick={handleOnClick}
            currentItems={currentItems}
            goToPage={goToPage}
            currentPage={currentPage}
            totalPages={totalPages}
        />
    );
};

export default ListProductsContainer;