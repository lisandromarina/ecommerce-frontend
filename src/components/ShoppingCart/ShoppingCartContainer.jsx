import React, { useEffect } from 'react';
import ShoppingCartComponent from "./ShoppingCartComponent";
import { useSelector, useDispatch } from "react-redux";
import { fetchShoppingCart } from "../../redux/slices/shoppingCartSlice"


function ShoppingCartContainer() {
  const dispatch = useDispatch();
  const shoppingCartState = useSelector(state => state.shoppingCart)

  useEffect(() => {
    dispatch(fetchShoppingCart(91));
  }, []);

  return (
    <ShoppingCartComponent
      shoppingCartState={shoppingCartState}
    />
  )
};

export default ShoppingCartContainer;