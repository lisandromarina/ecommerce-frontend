import React from 'react';
import { Col } from "react-bootstrap";

function ProductImage({ imageUrl }) {
    return (
        <Col md={4} className="text-center">
            <div className='image-detail-wrapper'>
                <img className="cart-image" alt='product' src={imageUrl ? imageUrl : `${process.env.PUBLIC_URL}/assets/cocacola.jpeg`} />
            </div>
        </Col>
    )
}

export default ProductImage
