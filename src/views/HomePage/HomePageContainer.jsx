import React, { useEffect } from 'react';
import HomePageComponent from "./HomePageComponent";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "../../redux/actions/productAction";
import { useNavigate, useLocation } from "react-router-dom";

function HomePageContainer() {
  const allProducts = useSelector(state => state.products.allProducts);
  const allCategoryState = useSelector(state => state.category.allCategory);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  function handleOnClick(productId) {
    navigate(`/product/${productId}`)
  }

  function handleOnClickCategory(category) {
    console.log(allCategoryState)
    let categorySelected = allCategoryState.find(oneCategory => oneCategory.name === category);
    navigate(`/product/${categorySelected.name}/${categorySelected.id}`, { state: { prevPath: location.pathname } })
}

  function handleOnClick(productId) {
    navigate(`/product/${productId}`)
  }

  useEffect(() => {
    dispatch(fetchAllProducts())
  }, []);

  return (
    <HomePageComponent
      arrayProducts={allProducts}
      handleOnClick={handleOnClick}
      handleOnClickCategory={handleOnClickCategory}
    />
  )
};

export default HomePageContainer;