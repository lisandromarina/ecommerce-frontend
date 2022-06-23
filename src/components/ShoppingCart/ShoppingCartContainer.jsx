import React, { useState, useEffect } from 'react';
import ShoppingCartComponent from "./ShoppingCartComponent";
import { useSelector, useDispatch } from "react-redux";
import { fetchShoppingCart, updateCartProduct } from "../../redux/slices/shoppingCartSlice";

function ShoppingCartContainer() {
  const shoppingCartState = useSelector(state => state.shoppingCart);
  const userState = useSelector(state => state.user.user);
  const dispatch = useDispatch();

  const [cartProduct, setCartProduct] = useState({});

  async function handleOnChange(cartProduct) {
    cartProduct = { ...cartProduct, userId: userState.id };
    await dispatch(updateCartProduct(cartProduct));
    await dispatch(fetchShoppingCart(userState.id));
  }

  function handleOnCheck() {
    console.log(shoppingCartState.cartProducts);
  }

  useEffect(() => {
    dispatch(fetchShoppingCart(userState.id));
  }, [userState]);

  useEffect(() => {
    if (shoppingCartState) {
      setCartProduct(shoppingCartState)
    }
  }, [shoppingCartState, userState]);

  return (
    <ShoppingCartComponent
      shoppingCartState={cartProduct}
      handleOnChange={handleOnChange}
      handleOnCheck={handleOnCheck}
    />
  )
};

export default ShoppingCartContainer;