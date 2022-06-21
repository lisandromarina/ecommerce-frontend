import React from 'react';
import CartProductComponent from "./CartProductComponent";

function CartProductContainer(props) {
  const {
    productName,
    productPrice,
    quantity
  } = props

  let totalPrice = 10;

  return (
    <CartProductComponent
      productName={productName}
      productPrice={productPrice}
      quantity={quantity}
      totalPrice={totalPrice}
    />
  )
};

export default CartProductContainer;