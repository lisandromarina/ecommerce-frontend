import React, { useState, useEffect } from 'react';
import CartProductComponent from "./CartProductComponent";
import useCounter from '../../../../hook/useCounter';

function CartProductContainer(props) {
  const [totalPrice, setTotalPrice] = useState(-1);
  const {
    idProduct,
    nameProduct,
    sellPrice,
    imageUrl,
    quantity,
    handleOnChange,
    handleOnRemove
  } = props;
  const { value: quantityProduct, increment, decrement } = useCounter(quantity);

  function calculateTotal() {
    setTotalPrice(quantityProduct * sellPrice);
  }

  function handleOnClickRemove() {
    handleOnRemove(idProduct)
  }

  const modifiedIncrement = () => {
    increment();
    handleOnChange({
      idProduct: idProduct,
      quantity: quantityProduct + 1
    })
  };

  const modifiedDecrement = () => {
    decrement();
    handleOnChange({
      idProduct: idProduct,
      quantity: quantityProduct - 1 
    });
  };

  useEffect(() => {
    calculateTotal();
  }, [quantityProduct]);

  return (
    <CartProductComponent
      nameProduct={nameProduct}
      imageUrl={imageUrl}
      sellPrice={sellPrice}
      quantityProduct={quantityProduct}
      totalPrice={totalPrice}
      calculateTotal={calculateTotal}
      handleOnClickRemove={handleOnClickRemove}
      increment={modifiedIncrement}
      decrement={modifiedDecrement}
    />
  )
};

export default CartProductContainer;