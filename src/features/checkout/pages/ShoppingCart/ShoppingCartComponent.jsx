import React from 'react';
import { Container, Spinner } from 'react-bootstrap';
import CartProduct from '../../components/ShoppingCartProduct';
import "./ShoppingCartStyles.scss";
import { priceFormatter } from '../../../../utils/priceFormatter'
import Button from '../../../../components/Button';

function ShoppingCartComponent(props) {
  const {
    isLoading,
    shoppingCartState,
    handleOnChange,
    handleOnRemove,
    handleOnNavigateShippingDetails
  } = props;

  return (
    <Container classname="cart-wrapper">
      <div className="shopping-cart-wrapper">
        <h2 className="shopping-cart-title">CARRITO DE COMPRAS</h2>
        {
          shoppingCartState.cartProducts?.map(oneCartProduct => (
            <CartProduct
              key={oneCartProduct.idProduct}
              handleOnChange={handleOnChange}
              handleOnRemove={handleOnRemove}
              {...oneCartProduct}
            />
          ))
        }
        {
          shoppingCartState.cartProducts?.length ?
            <>
              <div>
                <div className="shopping-cart-wrapper-subtotal">
                  <h5 className="shopping-cart-title-subtotal">Subtotal</h5>
                  {
                    isLoading ?
                      <Spinner animation="border" variant="warning" className="shopping-cart-price-subtotal" style={{ marginBottom: '1.3rem' }} />
                      :
                      <p className="shopping-cart-price-subtotal">${priceFormatter(shoppingCartState.totalPrice)} </p>
                  }
                </div>
                <div className="shopping-cart-wrapper-total">
                  <h5 className="shopping-cart-title-total">TOTAL: </h5>
                  {
                    isLoading ?
                      <Spinner animation="border" variant="warning" className="shopping-cart-price-total" style={{ marginBottom: '1.3rem' }} />
                      :
                      <p className="shopping-cart-price-total">${priceFormatter(shoppingCartState.totalPrice)} </p>
                  }
                </div>
              </div>
              <Button
                label='Comprar'
                className="shopping-cart-submit"
                isLoading={isLoading}
                handleOnClick={handleOnNavigateShippingDetails}
              />
            </>
            :
            <div style={{ textAlign: 'start' }}>Tu carrito esta vacio!</div>
        }
      </div>
    </Container>
  )
};

export default ShoppingCartComponent;