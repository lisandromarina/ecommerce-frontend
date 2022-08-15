import React from 'react';
import {
  Container,
  Card,
  Button
} from 'react-bootstrap';
import CartProduct from '../../components/ShoppingCartProduct';

function ShoppingCartComponent(props) {
  const {
    shoppingCartState,
    handleOnChange,
    handleOnCheck,
    handleOnRemove
  } = props;

  return (
    <Container>
      <Card className='mt-5'>
        <Card.Body className='m-2'>
          <Card.Title>Shopping Cart</Card.Title>
          <hr />
          {
            shoppingCartState.cartProducts?.map(oneCartProduct => (
              <div>
                <CartProduct
                  key={oneCartProduct.idProduct}
                  handleOnChange={handleOnChange}
                  handleOnRemove={handleOnRemove}
                  {...oneCartProduct}
                />
                <hr />
              </div>
            ))
          }
          {
            shoppingCartState.cartProducts?.length ?
              <div>
                <div className='d-flex justify-content-end m-5'>
                  <h5>Total of your purchase: </h5>
                </div>
                <Button onClick={handleOnCheck}>Continue purchase</Button>
              </div>
              : null
          }
        </Card.Body>
      </Card>
    </Container>
  )
};

export default ShoppingCartComponent;