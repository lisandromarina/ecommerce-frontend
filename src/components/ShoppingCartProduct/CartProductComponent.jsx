import React from 'react';
import { Container } from 'react-bootstrap';
import "./CartProductStyles.scss";
import { BsTrash } from "react-icons/bs";

function CartProductComponent(props) {
  const {
    nameProduct,
    sellPrice,
    totalPrice,
    handleOnClickCount,
    quantityProduct,
    handleOnClickRemove
  } = props;

  return (
    <Container className="cart-wrapper">
      <div className="cart-form">
        <img
          className="cart-image"
          src={`${process.env.PUBLIC_URL}/assets/cocacola.jpeg`}
        />
        <div className="cart-details">
          <h5 className="cart-productName">{nameProduct}</h5>
          <div className="cart-button">
            <div className="cart-increment">
              <input className='cart-increment-button' type="button" onClick={handleOnClickCount} value="-" />
              <input readonly value={quantityProduct} className="border-0 text-center w-25" />
              <input className='cart-increment-button' type="button" onClick={handleOnClickCount} value="+" />
            </div>
          </div>
        </div>
        <div className="cart-wrapper-price">
          <div className="cart-wrapper-remove">
            <BsTrash className="cart-remove" onClick={handleOnClickRemove} />
          </div>
          <p className="cart-price">${totalPrice}</p>
        </div>
      </div>
    </Container >
  )
};

export default CartProductComponent;