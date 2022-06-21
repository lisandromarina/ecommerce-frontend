import React from 'react';
import {
  Container,
  Card,
  Button
} from 'react-bootstrap';
import CartProduct from './ShoppingCartProduct';

function ShoppingCartComponent(props) {
  const {
    shoppingCartState
  } = props;

  return (
    <Container>
      <Card className='mt-5'>
        <Card.Body className='m-5'>
          <Card.Title>Shopping Cart</Card.Title>
          <hr/>
          {
            shoppingCartState.cartProducts.map(oneCartProduct => (
              <div>
                <CartProduct
                  key={oneCartProduct.idProduct}
                  productName={oneCartProduct.nameProduct}
                  productPrice={oneCartProduct.sellPrice}
                  quantity={oneCartProduct.quantity}
                />
                <hr/>
              </div>
            ))
          }
          <Button onClick={() => console.log(shoppingCartState)}>click me</Button>
        </Card.Body>
      </Card>
    </Container>
  )
};

export default ShoppingCartComponent;