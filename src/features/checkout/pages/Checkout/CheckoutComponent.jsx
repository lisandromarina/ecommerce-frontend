import React from 'react';
import { Container, Spinner } from 'react-bootstrap';
import './CheckoutStyles.scss';
import MyAddressCards from '../../components/MyAddressCards';
import AddOrEditForm from '../../components/AddOrEditForm';
import ShippingAddress from '../../components/ShippingAddress';
import ShippingItems from '../../components/ShippingItems';

function CheckoutComponent(props) {
    const {
        setStateCart,
        shoppingCartState,
        userState,
        address,
        allAddresses,
        stateCart,
        handleOnEdit,
        handleOnSelectAddress,
        handleOnMyAddress,
        setAddressSelected,
        handleOnCreate,
        isLoading,
        setIsLoading,
        handleOnCheckout,
        fetchAddress,
        addressSelected
    } = props;

    return (
        <Container className='shipping-container'>
            <div className='shipping-address'>
                {
                    isLoading ?
                        <Container className='container-loading'>
                            <Spinner animation="border" variant="warning" />
                        </Container>
                        :
                        stateCart === 'readyToPay' ?
                            <ShippingAddress
                                address={address}
                                handleOnMyAddress={handleOnMyAddress}
                                isLoading={isLoading}
                                userState={userState}
                                handleOnCheckout={handleOnCheckout}
                            />

                            : stateCart === 'myAddresses' ?
                                <MyAddressCards
                                    setIsLoading={setIsLoading}
                                    handleOnEdit={handleOnEdit}
                                    userState={userState}
                                    allAddresses={allAddresses}
                                    setStateCart={setStateCart}
                                    handleOnCreate={handleOnCreate}
                                    handleOnSelectAddress={handleOnSelectAddress}
                                    fetchAddress={fetchAddress}
                                />

                                : (stateCart === 'add' || stateCart === 'edit') ?
                                    <AddOrEditForm
                                        addressSelected={addressSelected}
                                        setAddressSelected={setAddressSelected}
                                        stateCart={stateCart}
                                        userState={userState}
                                        fetchAddress={fetchAddress}
                                        setStateCart={setStateCart}
                                    />
                                    : null
                }
            </div>
            {shoppingCartState?.cartProducts?.length && <ShippingItems shoppingCartState={shoppingCartState} />}
        </Container>
    );
}

export default CheckoutComponent;