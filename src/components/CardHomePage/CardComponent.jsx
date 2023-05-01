import React from 'react';
import { Card } from 'react-bootstrap';
import "./CardHomePageStyles.scss";

function CardComponent(props) {
    const {
        product,
        handleOnClick,
    } = props;

    return (
        <div className='p-2' >
            <Card className="cardHome" onClick={() => handleOnClick(product.id)}>
                <div className='image-wrapper'>
                    <img
                        className="cart-image"
                        alt='product'
                        src={product.imageUrl ? product.imageUrl : `${process.env.PUBLIC_URL}/assets/cocacola.jpeg`}
                    />
                </div>
                <Card.Body className='card-body-container'>
                    <Card.Text className='card-body-title'>{product.name}</Card.Text>
                    <Card.Title style={{ color: "#e77800" }} >
                        ${product.price.toLocaleString(undefined,
                            {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            }
                        )}
                    </Card.Title>
                    <Card.Text id="productDescription" className='card-body-text' >
                        {product.description}
                    </Card.Text>
                </Card.Body>
            </Card >
        </div >
    )
};

export default CardComponent;