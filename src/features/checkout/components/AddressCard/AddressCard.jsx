import React from 'react';
import { FiMapPin } from 'react-icons/fi';
import { Card } from 'react-bootstrap';
import { selectAddress } from '../../../../redux/actions/addressAction';
import { useSelector, useDispatch } from "react-redux";

function AddressCard({ address, userState, fetchAddress, handleOnEdit, setIsLoading }) {
    const { street, streetNumber, postalCode, location } = address;
    const dispatch = useDispatch();

    async function handleOnSelectAddress(addressId) {
        setIsLoading(true)
        await dispatch(selectAddress(addressId, userState.id))
        await fetchAddress();
        setIsLoading(false)
    }

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
                    <Card.Link onClick={() => handleOnEdit(address)}>Editar</Card.Link>
                </Card.Body>
            </Card.Body>
        </Card>
    )
}

export default AddressCard
