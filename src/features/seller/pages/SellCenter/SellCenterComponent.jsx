import React from 'react';
import { Container, Card } from 'react-bootstrap';
import './SellCenterStyles.scss';

function SellCenterComponent() {
    return (
        <Container className="sell-center-container">
            <h2 className="sell-center-title">Centro de ventas</h2>
            <Card className='sell-center-info-shipping'>
                <Card.Body>
                    <Card.Text>Para Preparar</Card.Text>
                </Card.Body>
                <Card.Body>
                    <Card.Text>En Transito</Card.Text>
                </Card.Body>
                <Card.Body>
                    <Card.Text>Finalizado</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default SellCenterComponent
