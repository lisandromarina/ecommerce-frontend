import React, { useEffect, useRef } from 'react';
import HomePageComponent from "./HomePageComponent";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "../../../../redux/actions/productAction";
import { useNavigate, useLocation } from "react-router-dom";
import useScrollSnap from '../../../../hook/useScrollSnap';

function HomePageContainer() {
  const allProducts = useSelector(state => state.products.allProducts);
  const allCategoryState = useSelector(state => state.category.allCategory);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { containerRef: SocialMediaContainerRef, handleTouchStart: handleTouchStartSocialMedia } = useScrollSnap();
  const { containerRef: infoMediaContainerRef, handleTouchStart: handleTouchStartInfo } = useScrollSnap();


  function handleOnClick(productId) {
    navigate(`/product/${productId}`)
  }

  function handleOnClickCategory(category) {
    console.log(allCategoryState)
    let categorySelected = allCategoryState.find(oneCategory => oneCategory.name === category);
    navigate(`/product/${categorySelected.name}/${categorySelected.id}`, { state: { prevPath: location.pathname } })
  }

  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [dispatch]);

  return (
    <HomePageComponent
      infoMediaContainerRef={infoMediaContainerRef}
      SocialMediaContainerRef={SocialMediaContainerRef}
      handleTouchStartSocialMedia={handleTouchStartSocialMedia}
      arrayProducts={allProducts}
      handleOnClick={handleOnClick}
      handleOnClickCategory={handleOnClickCategory}
      handleTouchStartInfo={handleTouchStartInfo}
    />
  )
};

export default HomePageContainer;