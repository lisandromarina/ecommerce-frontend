import React from 'react';
import { Image, Container } from 'react-bootstrap';

function CartProductComponent(props) {
  const {
    nameProduct,
    sellPrice,
    totalPrice,
    handleOnClickCount,
    quantityProduct
  } = props;

  return (
    <Container className='d-flex mt-3'>
      <div className="d-flex flex-row align-items-center w-100">
        <div className='col-3 d-flex justify-content-center'>
          <Image
            height={200}
            src={`${process.env.PUBLIC_URL}/assets/cocacola.jpeg`}
          />
        </div>
        <div className='col-4'>
          <h5>{nameProduct}</h5>
          <div>
            <p>Price: ${sellPrice} ea</p>
            {/* <p>hola</p> */}
          </div>
        </div>
        <div className="d-flex w-auto justify-content-center align-items-center">
          <input type="button" onClick={handleOnClickCount} value="-" />
          <input readonly value={quantityProduct} className="border-0 text-center w-25" />
          <input type="button" value="+" onClick={handleOnClickCount} />
        </div>
        <div className="d-flex w-auto justify-content-center align-items-center">
          <h5>${totalPrice}</h5>
        </div>
      </div>
    </Container >
  )
};

export default CartProductComponent;