import React from 'react';
import { Card, Button } from 'react-bootstrap';

function CardComponent(props) {
    const {
        title,
        description,
        productId,
        handleOnClick
    } = props;

    return (
        <div className='p-2'>
            <Card onClick={() => handleOnClick(productId)}>
                <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/assets/cocacola.jpeg`} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
};

export default CardComponent;