import React from 'react';
import { Container } from 'react-bootstrap';
import CartProduct from '../../components/ShoppingCartProduct';
import "./ShoppingCartStyles.scss";

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
            <div>
              <div className="shopping-cart-wrapper-subtotal">
                <h5 className="shopping-cart-title-subtotal">Subtotal</h5>
                <p className="shopping-cart-price-subtotal">${shoppingCartState.totalPrice} </p>
              </div>
              <div className="shopping-cart-wrapper-total">
                <h5 className="shopping-cart-title-total">TOTAL: </h5>
                <p className="shopping-cart-price-total">${shoppingCartState.totalPrice} </p>
              </div>
            </div>
            : null
        }
        <input onClick={(handleOnNavigateShippingDetails)} className="shopping-cart-submit" type="button" name="buy" value="Comprar" />
      </div>
    </Container>
  )
};

export default ShoppingCartComponent;