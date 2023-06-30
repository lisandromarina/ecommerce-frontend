import React from 'react'
import { FiMapPin } from 'react-icons/fi';
import { Button, Card } from 'react-bootstrap';

function ShippingAddress({ address, handleOnMyAddress, isLoading, handleOnCheckout, userState }) {
    return (
        <>
            <h3 className='title'>Confirmar detalles del Envio</h3>
            <Card>
                <Card.Header>Domicilio</Card.Header>
                <Card.Body className='card-body-wrapper'>
                    <FiMapPin className='card-pin' />
                    <Card.Body>
                        <Card.Title>{address?.street} {address?.streetNumber}</Card.Title>
                        <Card.Subtitle className='mb-2 text-muted'>{address?.postalCode} - {address?.location}</Card.Subtitle>
                        <Card.Subtitle className='mb-2 text-muted'>{userState.firstName} {userState.lastName}</Card.Subtitle>
                    </Card.Body>
                    <Card.Body className='card-body-links'>
                        <Card.Link onClick={handleOnMyAddress}>Editar o Agregar</Card.Link>
                    </Card.Body>
                </Card.Body>
            </Card>
            <Button
                className='shipping-button'
                disabled={isLoading}
                onClick={handleOnCheckout}
            >
                Continuar
            </Button>
        </>
    )
}

export default ShippingAddress
