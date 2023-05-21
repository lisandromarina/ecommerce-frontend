import React from 'react'
import { Container, Button, Card, ListGroup, Badge, ButtonGroup } from 'react-bootstrap';
import './shippingDetailsStyles.scss';
import { FiMapPin } from "react-icons/fi";
import Spinner from '../../components/Spinner';

function ShippingDetailsComponents(props) {
    const {
        cartProducts,
        userState,
        address,
        allAddresses,
        isEdit,
        handleOnEdit,
        handleOnCancel,
        handleOnSelectAddress,
        isLoading
    } = props;

    return (
        <Container className='shipping-container'>
            <div className='shipping-address'>
                {
                    !isEdit ?
                        <>
                            <h3 className='title'>Confirmar detalles del Envio</h3>
                            <Card>
                                <Card.Header>Domicilio</Card.Header>
                                <Card.Body className='card-body-wrapper'>
                                    <FiMapPin className='card-pin' />
                                    <Card.Body>
                                        <Card.Title>{address?.street} {address?.streetNumber}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{address?.postalCode} - {address?.location}</Card.Subtitle>
                                        <Card.Subtitle className="mb-2 text-muted">{userState.firstName} {userState.lastName} {/* - telefono */}</Card.Subtitle>
                                    </Card.Body>
                                    <Card.Body className='card-body-links'>
                                        <Card.Link onClick={handleOnEdit}>Editar o Agregar</Card.Link>
                                    </Card.Body>
                                </Card.Body>
                            </Card>
                            <Button
                                className='shipping-button'
                                disabled={isLoading}
                                onClick={() => console.log(address)}
                            >
                                Continuar
                            </Button>
                        </>
                        :
                        <>
                            {
                                isLoading
                                    ? <Spinner />
                                    :
                                    <>
                                        <h3 className='title'>Mis Domicilios</h3>
                                        {
                                            allAddresses.map(oneAddress => (
                                                <Card>
                                                    {
                                                        oneAddress.active &&
                                                        <Card.Header className='address-selected-header'>Domicilio seleccionado</Card.Header>
                                                    }
                                                    <Card.Body className='card-body-wrapper'>
                                                        <FiMapPin className='card-pin' />
                                                        <Card.Body>
                                                            <Card.Title>{oneAddress?.street} {oneAddress?.streetNumber}</Card.Title>
                                                            <Card.Subtitle className="mb-2 text-muted">{oneAddress?.postalCode} - {oneAddress?.location}</Card.Subtitle>
                                                            <Card.Subtitle className="mb-2 text-muted">{userState.firstName} {userState.lastName} {/* - telefono */}</Card.Subtitle>
                                                        </Card.Body>
                                                        <Card.Body className='card-body-links'>
                                                            {
                                                                !oneAddress.active &&
                                                                <Card.Link onClick={() => handleOnSelectAddress(oneAddress.id)}>Seleccionar</Card.Link>
                                                            }
                                                            <Card.Link onClick={handleOnEdit}>Editar</Card.Link>
                                                        </Card.Body>
                                                    </Card.Body>
                                                </Card>
                                            ))
                                        }
                                    </>
                            }
                            <ButtonGroup>
                                <Button onClick={handleOnCancel}>Atras</Button>
                                <Button>Agregar nueva direccion</Button>
                            </ButtonGroup>
                        </>
                }
            </div >
            <div className='shipping-items-wrapper'>
                <h3 className='title'>Mi Compra</h3>
                <ListGroup>
                    {
                        cartProducts.map(oneProduct => (
                            <ListGroup.Item className="items-list">
                                {oneProduct.nameProduct}
                                <Badge> {oneProduct.quantity} </Badge>
                            </ListGroup.Item>
                        ))
                    }
                </ListGroup>
            </div>
        </Container >
    )
}

export default ShippingDetailsComponents
