import React from 'react';
import { Image, Container, Button } from 'react-bootstrap';

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
    <Container className='d-flex mt-3 w-100'>
      <Image
        className='col-4 col-md-3'
        width={"100%"}
        fluid={true}
        src={`${process.env.PUBLIC_URL}/assets/television.jpeg`}
      />
      <div className='w-100 d-flex flex-column justify-content-around'>
        <div className='d-flex'>
          <div className='col-4 d-flex flex-column align-items-center text-center'>
            <h6>{nameProduct}</h6>
            <p>Price: ${sellPrice}</p>
          </div>
          <div className="d-flex justify-content-center col-4 m-auto">
            <input type="button" onClick={handleOnClickCount} value="-" />
            <input readonly value={quantityProduct} className="border-0 text-center w-25" />
            <input type="button" value="+" onClick={handleOnClickCount} />
          </div>
          <div className="d-flex col-4 justify-content-center align-items-center">
            <h5>${totalPrice}</h5>
          </div>
        </div>
        <div className='d-flex text-center text-primary'>
          <div className='col-4 text-center' role="button" onClick={handleOnClickRemove}>
            Remove
          </div>
          {/* <div className='col-4'>
            remove
          </div>
          <div className='col-4'>
            remove
          </div> */}
        </div>
      </div>
    </Container >
  )
};

export default CartProductComponent;