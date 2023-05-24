import React, { useState, useEffect } from 'react';
import ShoppingCartComponent from "./ShoppingCartComponent";
import { useSelector, useDispatch } from "react-redux";
import { fetchShoppingCart, updateCartProduct, removeShoppingCartProduct } from "../../redux/actions/shoppingCartAction";
import { useNavigate, useLocation } from 'react-router-dom';

function ShoppingCartContainer() {
  const shoppingCartState = useSelector(state => state.shoppingCart);
  const userState = useSelector(state => state.user.user);
  const dispatch = useDispatch();
  const [cartProduct, setCartProduct] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  async function handleOnChange(cartProduct) {
    cartProduct = { ...cartProduct, userId: userState.id };
    await dispatch(updateCartProduct(cartProduct));
    await dispatch(fetchShoppingCart(userState.id));
  }

  async function handleOnRemove(idProduct) {
    await dispatch(removeShoppingCartProduct(shoppingCartState.id, idProduct));
    await dispatch(fetchShoppingCart(userState.id));
  }

  function handleOnCheck() {
    console.log(shoppingCartState.cartProducts);
  }

  function handleOnNavigateShippingDetails() {
    navigate("/shipping-details", { state: { prevPath: location.pathname } });
  }

  useEffect(() => {
    dispatch(fetchShoppingCart(userState.id));
  }, [userState]);

  useEffect(() => {
    if (shoppingCartState) {
      setCartProduct(shoppingCartState)
    }
  }, [shoppingCartState]);

  return (
    <ShoppingCartComponent
      shoppingCartState={cartProduct}
      handleOnChange={handleOnChange}
      handleOnCheck={handleOnCheck}
      handleOnRemove={handleOnRemove}
      handleOnNavigateShippingDetails={handleOnNavigateShippingDetails}
    />
  )
};

export default ShoppingCartContainer;