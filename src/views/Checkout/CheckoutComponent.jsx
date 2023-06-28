import React from 'react';
import { Container, Button, Card, ListGroup, Badge, ButtonGroup, Form, Col, Row } from 'react-bootstrap';
import { FiMapPin } from 'react-icons/fi';
import './CheckoutStyles.scss';
import { priceFormatter } from '../../utils/priceFormatter';
import Input from '../../components/Input';

function CheckoutComponent(props) {
    const {
        formData,
        handleChange,
        shoppingCartState,
        userState,
        address,
        allAddresses,
        stateCart,
        handleOnEdit,
        handleOnSelectAddress,
        handleOnMyAddress,
        handleOnCancel,
        handleOnCreate,
        handleOnSubmit,
        isLoading,
        handleOnCheckout
    } = props;

    return (
        <Container className='shipping-container'>
            <div className='shipping-address'>
                {stateCart === 'readyToPay' &&
                    <ShippingAddress
                        address={address}
                        handleOnMyAddress={handleOnMyAddress}
                        isLoading={isLoading}
                        userState={userState}
                        handleOnCheckout={handleOnCheckout}
                    />
                }
                {stateCart === 'myAddresses' &&
                    <MyAddressCards
                    handleOnEdit={handleOnEdit}
                        userState={userState}
                        allAddresses={allAddresses}
                        handleOnCancel={handleOnCancel}
                        handleOnCreate={handleOnCreate}
                        handleOnSelectAddress={handleOnSelectAddress}
                    />
                }
                {(stateCart === 'add' || stateCart === 'edit') &&
                    <AddOrEditForm
                        stateCart={stateCart}
                        formData={formData}
                        handleChange={handleChange}
                        isLoading={isLoading}
                        handleOnSubmit={handleOnSubmit}
                    />
                }
            </div>
            {shoppingCartState?.cartProducts?.length && <ShippingItems shoppingCartState={shoppingCartState} />}
        </Container>
    );
}

export default CheckoutComponent;

//I should create a new component but first I must restructure the folder architecture for features
const AddressCard = ({ address, userState, handleOnSelectAddress,  handleOnEdit }) => {
    const { street, streetNumber, postalCode, location } = address;
    return (
        <Card>
            {address.active && <Card.Header className='address-selected-header'>Domicilio seleccionado</Card.Header>}
            <Card.Body className='card-body-wrapper'>
                <FiMapPin className='card-pin' />
                <Card.Body>
                    <Card.Title>{street} {streetNumber}</Card.Title>
                    <Card.Subtitle className='mb-2 text-muted'>{postalCode} - {location}</Card.Subtitle>
                    <Card.Subtitle className='mb-2 text-muted'>{userState.firstName} {userState.lastName} {/* - telefono */}</Card.Subtitle>
                </Card.Body>
                <Card.Body className='card-body-links'>
                    {!address.active && <Card.Link onClick={() => handleOnSelectAddress(address.id)}>Seleccionar</Card.Link>}
                    <Card.Link onClick={() =>  handleOnEdit(address)}>Editar</Card.Link>
                </Card.Body>
            </Card.Body>
        </Card>
    );
};

//I should create a new component but first I must restructure the folder architecture for features
const MyAddressCards = ({ allAddresses, handleOnCancel, handleOnCreate, userState, handleOnSelectAddress,  handleOnEdit}) => {
    return (
        <>
            <h3 className='title'>Mis Domicilios</h3>
            {allAddresses?.map((address) => (
                <AddressCard address={address} userState={userState} handleOnSelectAddress={handleOnSelectAddress}  handleOnEdit={handleOnEdit}/>
            ))}
            <ButtonGroup>
                <Button onClick={handleOnCancel}>Atras</Button>
                <Button onClick={handleOnCreate}>Agregar nueva direccion</Button>
            </ButtonGroup>
        </>
    );
};

//I should create a new component but first I must restructure the folder architecture for features
const AddOrEditForm = ({ stateCart, formData, handleChange, isLoading, handleOnSubmit }) => {
    const formTitle = stateCart === 'add' ? 'Agregá un domicilio' : 'Editá tu domicilio';

    return (
        <>
            <h3 className='title'>{formTitle}</h3>
            <Card>
                <Card.Body>
                    <Form className='add-checkout-form'>
                        <Row>
                            <Col>
                                <Input
                                    value={formData.fullName}
                                    type='text'
                                    name='fullName'
                                    label='Nombre y Apellido'
                                    onChange={handleChange}
                                    required
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Input
                                    value={formData.postalCode}
                                    type='text'
                                    name='postalCode'
                                    label='Codigo Postal'
                                    required
                                    onChange={handleChange}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Input
                                    type='text'
                                    name='province'
                                    label='Provincia'
                                    required
                                    onChange={handleChange}
                                    value={formData.province}
                                />
                            </Col>
                            <Col>
                                <Input
                                    label='Localidad'
                                    type='text'
                                    name='location'
                                    required
                                    onChange={handleChange}
                                    value={formData.location}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Input
                                    label='Calle'
                                    type='text'
                                    name='street'
                                    required
                                    onChange={handleChange}
                                    value={formData.street}
                                />
                            </Col>
                            <Col>
                                <Input
                                    label='Número'
                                    type='text'
                                    name='streetNumber'
                                    required
                                    onChange={handleChange}
                                    value={formData.streetNumber}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Input
                                    label='Piso/Departamento'
                                    value={formData.department}
                                    type='text'
                                    name='department'
                                    onChange={handleChange}
                                />
                            </Col>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
            <Button
                className='shipping-button'
                disabled={isLoading}
                onClick={handleOnSubmit}
            >
                Continuar
            </Button>
        </>
    );
};

//I should create a new component but first I must restructure the folder architecture for features
const ShippingAddress = ({ address, handleOnMyAddress, isLoading, handleOnCheckout, userState }) => {
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
                        <Card.Subtitle className='mb-2 text-muted'>{userState.firstName} {userState.lastName} {/* - telefono */}</Card.Subtitle>
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
    );
};

//I should create a new component but first I must restructure the folder architecture for features
const ShippingItems = ({ shoppingCartState }) => {
    return (
        <div className='shipping-items-wrapper'>
            <h3 className='title'>Mi Compra</h3>
            <ListGroup>
                {shoppingCartState?.cartProducts?.map((product) => (
                    <ListGroup.Item className='items-list' key={product.id}>
                        {product.nameProduct}
                        <Badge>{product.quantity}</Badge>
                    </ListGroup.Item>
                ))}
            </ListGroup>
            <h4 className='title total-price'>Total: ${priceFormatter(shoppingCartState?.totalPrice)}</h4>
        </div>
    );
};
