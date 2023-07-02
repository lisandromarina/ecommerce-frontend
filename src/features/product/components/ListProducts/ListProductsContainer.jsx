import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ListProductsComponent from "./ListProductsComponents";
import usePageable from '../../../../hook/usePageable';

function ListProductsContainer(props) {
    const {
        arrayProducts,
        title,
        itemsQuantity,
    } = props;
    const [itemQuantity, setItemsQuantity] = useState(itemsQuantity)
    const { currentPage, goToPage, paginateItems, resetPage } = usePageable(itemQuantity);
    const navigate = useNavigate();

    let currentItems = paginateItems(arrayProducts);
    const totalPages = Math.ceil(arrayProducts.length / itemQuantity);

    function handleOnClick(productId) {
        navigate(`/product/${productId}`)
    }

    useEffect(() => {
        resetPage()
    }, [arrayProducts,/*  window.innerWidth */])

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;

            if (screenWidth < 480) {
                setItemsQuantity(4)
            } else if (screenWidth > 481 & screenWidth < 768) {
                setItemsQuantity(4)
            } else if (screenWidth > 769 & screenWidth < 1200) {
                setItemsQuantity(6)
            } else {
                setItemsQuantity(8)
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <ListProductsComponent
            title={title}
            handleOnClick={handleOnClick}
            currentItems={currentItems}
            goToPage={goToPage}
            currentPage={currentPage}
            totalPages={totalPages}
        />
    )
};

export default ListProductsContainer;