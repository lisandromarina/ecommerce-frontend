import React, { useEffect } from 'react';
import HomePageComponent from "./HomePageComponent";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "../../redux/actions/productAction";
import { useNavigate } from "react-router-dom";

function HomePageContainer() {
  const allProducts = useSelector(state => state.products.allProducts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    />
  )
};

export default HomePageContainer;