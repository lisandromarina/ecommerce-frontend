import React from 'react'
import { Container, Button, Card, ListGroup, Badge, ButtonGroup, Form, Col, Row, FloatingLabel } from 'react-bootstrap';
import './shippingDetailsStyles.scss';
import { FiMapPin } from "react-icons/fi";
import { priceFormatter } from '../../utils/priceFormatter';

function ShippingDetailsComponents(props) {
    const {
        formData,
        handleChange,
        shoppingCartState,
        userState,
        address,
        allAddresses,
        stateCart,
        handleOnEdit,
        handleOnContinue,
        handleOnSelectAddress,
        handleOnMyAddress,
        handleOnCancel,
        handleOnCreate,
        handleOnSubmit,
        isLoading
    } = props;

    return (
        <Container className='shipping-container'>
            <div className='shipping-address'>
                {
                    stateCart === "readyToPay" &&
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
                                    <Card.Link onClick={handleOnMyAddress}>Editar o Agregar</Card.Link>
                                </Card.Body>
                            </Card.Body>
                        </Card>
                        <Button
                            className='shipping-button'
                            disabled={isLoading}
                            onClick={() => handleOnContinue()}
                        >
                            Continuar
                        </Button>
                    </>
                }
                {
                    stateCart == "myAddresses" &&
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
                                            <Card.Link onClick={()=> handleOnEdit(oneAddress)}>Editar</Card.Link>
                                        </Card.Body>
                                    </Card.Body>
                                </Card>
                            ))
                        }
                        <ButtonGroup>
                            <Button onClick={handleOnCancel}>Atras</Button>
                            <Button onClick={handleOnCreate}>Agregar nueva direccion</Button>
                        </ButtonGroup>
                    </>
                }
                {
                    (stateCart === "add" || stateCart === "edit") &&
                    <>
                        <h3 className='title'>{stateCart === "add" ? 'Agregá un domicilio' : 'Editá tu domicilio'}</h3>
                        <Card>
                            <Card.Body>
                                <Form /* onSubmit={handleSubmit} */ className="add-checkout-form">
                                    <Row>
                                        <Col>
                                            <FloatingLabel
                                                controlId="fullName"
                                                label="Nombre y Apellido"
                                            >
                                                <Form.Control
                                                    value={formData.fullName}
                                                    type="text"
                                                    name="fullName"
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </FloatingLabel>
                                        </Col>
                                    </Row>


                                    <Row>
                                        <Col>
                                            <FloatingLabel controlId="postalCode" label="Código Postal">
                                                <Form.Control
                                                    value={formData.postalCode}
                                                    type="text"
                                                    name="postalCode"
                                                    required
                                                    onChange={handleChange}
                                                />
                                            </FloatingLabel>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <FloatingLabel controlId="province" label="Provincia">
                                                <Form.Control
                                                    type="text"
                                                    name="province"
                                                    required
                                                    onChange={handleChange}
                                                    value={formData.province}
                                                />
                                            </FloatingLabel>
                                        </Col>
                                        <Col>
                                            <FloatingLabel controlId="location" label="Localidad">
                                                <Form.Control
                                                    type="text"
                                                    name="location"
                                                    required
                                                    onChange={handleChange}
                                                    value={formData.location}
                                                />
                                            </FloatingLabel>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col>
                                            <FloatingLabel controlId="street" label="Calle">
                                                <Form.Control
                                                    type="text"
                                                    name="street"
                                                    required
                                                    onChange={handleChange}
                                                    value={formData.street}
                                                />
                                            </FloatingLabel>
                                        </Col>
                                        <Col>
                                            <FloatingLabel controlId="streetNumber" label="Número">
                                                <Form.Control
                                                    type="text"
                                                    name="streetNumber"
                                                    required
                                                    onChange={handleChange}
                                                    value={formData.streetNumber}
                                                />
                                            </FloatingLabel>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col>
                                            <FloatingLabel
                                                controlId="department"
                                                label="Piso/Departamento"
                                            >
                                                <Form.Control
                                                    value={formData.department}
                                                    type="text"
                                                    name="department"
                                                    onChange={handleChange}
                                                />
                                            </FloatingLabel>
                                        </Col>
                                    </Row>
                                </Form>
                            </Card.Body>
                        </Card>
                        <Button
                            className='shipping-button'
                            disabled={isLoading}
                            onClick={()=> handleOnSubmit()}
                        >
                            Continuar
                        </Button>
                    </>
                }
            </div >
            <div className='shipping-items-wrapper'>
                <h3 className='title'>Mi Compra</h3>
                <ListGroup>
                    {
                        shoppingCartState.cartProducts.map(oneProduct => (
                            <ListGroup.Item className="items-list">
                                {oneProduct.nameProduct}
                                <Badge> {oneProduct.quantity} </Badge>
                            </ListGroup.Item>
                        ))
                    }
                </ListGroup>
                <h4 className='title total-price'>Total: ${priceFormatter(shoppingCartState.totalPrice)}</h4>
            </div>
        </Container >
    )
}

export default ShippingDetailsComponents
