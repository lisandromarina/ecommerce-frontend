import React from 'react';
import { Container } from 'react-bootstrap';
import CartProduct from '../../components/ShoppingCartProduct';
import "./ShoppingCartStyles.scss";
import { priceFormatter } from '../../utils/priceFormatter'


function ShoppingCartComponent(props) {
  const {
    shoppingCartState,
    handleOnChange,
    handleOnCheck,
    handleOnRemove,
    handleOnNavigateShippingDetails
  } = props;

  return (
    <Container classname="cart-wrapper">
      <div className="shopping-cart-wrapper">
        <h2 className="shopping-cart-title">CARRITO DE COMPRAS</h2>
        {
          shoppingCartState.cartProducts?.map(oneCartProduct => (
            <div>
              <CartProduct
                key={oneCartProduct.idProduct}
                handleOnChange={handleOnChange}
                handleOnRemove={handleOnRemove}
                {...oneCartProduct}
              />
            </div>
          ))
        }
        {
          shoppingCartState.cartProducts?.length ?
            <>
              <div>
                <div className="shopping-cart-wrapper-subtotal">
                  <h5 className="shopping-cart-title-subtotal">Subtotal</h5>
                  <p className="shopping-cart-price-subtotal">${priceFormatter(shoppingCartState.totalPrice)} </p>
                </div>
                <div className="shopping-cart-wrapper-total">
                  <h5 className="shopping-cart-title-total">TOTAL: </h5>
                  <p className="shopping-cart-price-total">${priceFormatter(shoppingCartState.totalPrice)} </p>
                </div>
              </div>
              <input onClick={(handleOnNavigateShippingDetails)} className="shopping-cart-submit" type="button" name="buy" value="Comprar" />
            </>
            : 
            <div style={{textAlign: 'start'}}>Tu carrito esta vacio!</div>
        }
      </div>
    </Container>
  )
};

export default ShoppingCartComponent;