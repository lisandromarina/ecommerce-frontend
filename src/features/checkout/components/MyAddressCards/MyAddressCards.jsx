import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import AddressCard from '../AddressCard'

function MyAddressCards({ allAddresses, setStateCart, handleOnCreate, userState, setIsLoading, handleOnEdit, fetchAddress }) {

    function handleOnCancel() {
        setStateCart('readyToPay')
    }

    return (
        <>
            <h3 className='title'>Mis Domicilios</h3>
            {allAddresses?.map((address) => (
                <AddressCard
                    address={address}
                    userState={userState}
                    setIsLoading={setIsLoading}
                    handleOnEdit={handleOnEdit}
                    fetchAddress={fetchAddress}
                />
            ))}
            <ButtonGroup>
                <Button onClick={handleOnCancel}>Atras</Button>
                <Button onClick={handleOnCreate}>Agregar nueva direccion</Button>
            </ButtonGroup>
        </>
    )
}

export default MyAddressCards
