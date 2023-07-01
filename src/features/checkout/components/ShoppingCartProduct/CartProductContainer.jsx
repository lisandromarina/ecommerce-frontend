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

  useEffect(() => {
    handleOnChange({
      idProduct: idProduct,
      quantity: quantityProduct
    });
    calculateTotal()
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
      increment={increment}
      decrement={decrement}
    />
  )
};

export default CartProductContainer;