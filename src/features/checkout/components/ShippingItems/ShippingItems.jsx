import React from 'react';
import { priceFormatter } from '../../../../utils/priceFormatter';
import { ListGroup, Badge } from 'react-bootstrap';

function ShippingItems({ shoppingCartState }) {
    return (
        <div className='shipping-items-wrapper'>
            <h3 className='title'>Mi Compra</h3>
            <ListGroup>
                {shoppingCartState?.cartProducts?.map((product) => (
                    <ListGroup.Item className='items-list' key={product.id}>
                        {product.nameProduct}
                        <Badge>{product.quantity}</Badge>
                    </ListGroup.Item>
                ))}
            </ListGroup>
            <h4 className='title total-price'>Total: ${priceFormatter(shoppingCartState?.totalPrice)}</h4>
        </div>
    )
}

export default ShippingItems
