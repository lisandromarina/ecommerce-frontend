import React, { useState, useEffect } from 'react';
import CartProductComponent from "./CartProductComponent";

function CartProductContainer(props) {
  const [totalPrice, setTotalPrice] = useState(-1);
  const [quantityProduct, setQuantityProduct] = useState(-1);
  const {
    idProduct,
    nameProduct,
    sellPrice,
    quantity,
    handleOnChange
  } = props;

  function calculateTotal() {
    setTotalPrice(quantityProduct * sellPrice);
  }

  function handleOnClickCount(event) {
    if (event.target.value === "+") {
      handleOnChange({
        idProduct: idProduct,
        quantity: quantity + 1
      });
    } else {
      handleOnChange({
        idProduct: idProduct,
        quantity: quantity - 1
      });
    }
  }

  useEffect(() => {
    if (quantityProduct === -1 || quantityProduct != quantity) {
      setQuantityProduct(quantity);
    }
  }, [quantity]);

  useEffect(() => {
    calculateTotal()
  }, [quantityProduct]);

  return (
    <CartProductComponent
      nameProduct={nameProduct}
      sellPrice={sellPrice}
      quantityProduct={quantityProduct}
      totalPrice={totalPrice}
      calculateTotal={calculateTotal}
      handleOnClickCount={handleOnClickCount}
    />
  )
};

export default CartProductContainer;