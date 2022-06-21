import React from 'react';
import { Image, Container } from 'react-bootstrap';

function CartProductComponent(props) {
  const {
    productName,
    productPrice,
    quantity,
    totalPrice
  } = props;

  return (
    <Container className='d-flex mt-3'>
      <div class="d-flex flex-row align-items-center w-100">
      <div className='col-4 d-flex justify-content-center'>
          <Image 
            height={200}
            src={`${process.env.PUBLIC_URL}/assets/cocacola.jpeg`}
          />
        </div>
        <div className='col-4'>
          <h5>{productName}</h5>
          <div>
            <p>Price: ${productPrice} ea</p>
            <p>hola</p>
          </div>
        </div>
        <div class="d-flex w-auto justify-content-center align-items-center">
          <input type="button" value="-" />
          <input readonly value={quantity} name="quantity" className="border-0 text-center w-25" />
          <input type="button" value="+" />
        </div>
        <div class="d-flex w-auto justify-content-center align-items-center">
          <h5>${totalPrice}</h5>
        </div>
      </div>
    </Container >
  )
};

export default CartProductComponent;