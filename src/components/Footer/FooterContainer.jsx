import React from 'react';
import FooterComponent from './FooterComponent';
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from 'react-router-dom';

function FooterContainer() {
    const categoryState = useSelector(state => state.category.allCategory);
    const location = useLocation();
    const navigate = useNavigate();

    async function handleOnClickCategory(event) {
        let categorySelected = categoryState.find(oneCategory => oneCategory.name === event.target.outerText);
        navigate(`/product/${categorySelected.name}/${categorySelected.id}`, { state: { prevPath: location.pathname } })
    }

    return (
        <FooterComponent
            categoryState={categoryState}
            handleOnClickCategory={handleOnClickCategory}
        />
    )
}

export default FooterContainer
