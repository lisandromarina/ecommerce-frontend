import React from 'react';
import { Card } from 'react-bootstrap';
import "../../../styles/cardHomePage.css"

function CardComponent(props) {
    const {
        product,
        handleOnClick
    } = props;

    return (
        <div className='p-2'>
            <Card id="cardHome" onClick={() => handleOnClick(product.id)}>
                <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/assets/cocacola.jpeg`} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        ${product.price}
                    </Card.Text>
                    <Card.Text id="productDescription">
                        {product.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
};

export default CardComponent;