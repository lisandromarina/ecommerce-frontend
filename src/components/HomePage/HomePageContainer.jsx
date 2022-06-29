import React, { useEffect } from 'react';
import HomePageComponent from "./HomePageComponent";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "../../redux/slices/productSlice";
import { useNavigate } from "react-router-dom";

function HomePageContainer() {
  const allProducts = useSelector(state => state.products.allProducts);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  function handleOnClick(productId) {
    navigate(`/product/${productId}`)
  }

  useEffect(() => {
    dispatch(fetchAllProducts())
  }, []);

  function handleOnCheck(){
    console.log(user)
  }
  return (
    <HomePageComponent
      arrayProducts={allProducts}
      handleOnClick={handleOnClick}
      handleOnCheck={handleOnCheck}
    />
  )
};

export default HomePageContainer;