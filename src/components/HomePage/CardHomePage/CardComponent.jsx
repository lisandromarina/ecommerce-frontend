import React from 'react';
import {Card , Button} from 'react-bootstrap';

function CardComponent(props) {

    const{
        title,
        description,
    } = props;

    return (
        <div className='p-2'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
};

export default CardComponent;