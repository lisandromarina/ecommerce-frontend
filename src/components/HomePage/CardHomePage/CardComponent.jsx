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
                <Card.Img 
                    src={`${process.env.PUBLIC_URL}/assets/cocacola.jpeg`} 
                    id="cardHomeImage"
                    variant="top" 
                />
                <Card.Body className='d-flex flex-column align-items-center'>
                    <Card.Text>{product.name}</Card.Text>
                    <Card.Title style={{color: "#e77800"}}>
                        ${product.price}
                    </Card.Title>
                    <Card.Text id="productDescription">
                        {product.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
};

export default CardComponent;