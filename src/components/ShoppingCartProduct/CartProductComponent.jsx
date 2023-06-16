import React from 'react';
import { Container } from 'react-bootstrap';
import "./CartProductStyles.scss";
import { BsTrash } from "react-icons/bs";
import { priceFormatter } from '../../utils/priceFormatter'
import Counter from '../Counter/Counter';

function CartProductComponent(props) {
  const {
    nameProduct,
    totalPrice,
    imageUrl,
    quantityProduct,
    handleOnClickRemove,
    increment,
    decrement
  } = props;

  return (
    <Container className="cart-wrapper">
      <div className="cart-form">
        <div className='image-wrapper'>
          <img
            className="cart-image"
            alt='product'
            src={imageUrl ? imageUrl : `${process.env.PUBLIC_URL}/assets/cocacola.jpeg`}
          />
        </div>
        <div className="cart-details">
          <h5 className="cart-productName">{nameProduct}</h5>
          <Counter
            increment={increment}
            decrement={decrement}
            quantity={quantityProduct}
          />
        </div>
        <div className="cart-wrapper-price">
          <div className="cart-wrapper-remove">
            <BsTrash className="cart-remove" onClick={handleOnClickRemove} />
          </div>
          <p className="cart-price">${priceFormatter(totalPrice)}</p>
        </div>
      </div>
    </Container >
  )
};

export default CartProductComponent;