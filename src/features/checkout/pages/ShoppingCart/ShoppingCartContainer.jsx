import React, { useState, useEffect } from 'react';
import ShoppingCartComponent from "./ShoppingCartComponent";
import { useSelector, useDispatch } from "react-redux";
import { fetchShoppingCart, updateCartProduct, removeShoppingCartProduct } from "../../../../redux/actions/shoppingCartAction";
import { useNavigate, useLocation } from 'react-router-dom';

function ShoppingCartContainer() {
  const [isLoading, setIsLoading] = useState(false);
  const [cartProduct, setCartProduct] = useState({});

  const shoppingCartState = useSelector(state => state.shoppingCart);
  const userState = useSelector(state => state.user.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  async function handleOnChange(cartProduct) {
    setIsLoading(true)
    cartProduct = { ...cartProduct, userId: userState.id };
    await dispatch(updateCartProduct(cartProduct));
    await dispatch(fetchShoppingCart(userState.id));
  }

  async function handleOnRemove(idProduct) {
    setIsLoading(true)
    await dispatch(removeShoppingCartProduct(shoppingCartState.id, idProduct));
    await dispatch(fetchShoppingCart(userState.id));
  }

  function handleOnCheck() {
    console.log(shoppingCartState.cartProducts);
  }

  function handleOnNavigateShippingDetails() {
    navigate("/checkout", { state: { prevPath: location.pathname } });
  }

  useEffect(() => {
    if (shoppingCartState) {
      setCartProduct(shoppingCartState)
      setIsLoading(false)
    }
  }, [shoppingCartState]);

  return (
    <ShoppingCartComponent
      isLoading={isLoading}
      shoppingCartState={cartProduct}
      handleOnChange={handleOnChange}
      handleOnCheck={handleOnCheck}
      handleOnRemove={handleOnRemove}
      handleOnNavigateShippingDetails={handleOnNavigateShippingDetails}
    />
  )
};

export default ShoppingCartContainer;