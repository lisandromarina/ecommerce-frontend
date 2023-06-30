import React, { useState, useEffect } from 'react';
import { fetchAllAddressByUserId } from '../../../../redux/actions/addressAction';
import { checkout } from '../../../../redux/actions/shoppingCartAction';
import { useSelector, useDispatch } from "react-redux";
import ShippingDetailsComponents from './CheckoutComponent';
import { useNavigate } from 'react-router-dom';

function CheckoutContainer() {
    //['readyToPay', 'myAddresses', 'edit', 'add] == STATES CARTS
    const [stateCart, setStateCart] = useState('readyToPay');
    const [isLoading, setIsLoading] = useState(true);
    const [addressSelected, setAddressSelected] = useState({});

    const shoppingCartState = useSelector(state => state.shoppingCart);
    const userState = useSelector(state => state.user.user);
    const addressState = useSelector(state => state.address.addresses);
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    async function fetchAddress() {
        setIsLoading(true)
        const response = await dispatch(fetchAllAddressByUserId(userState.id));
        if (response.data.length === 0) setStateCart('add')
        setIsLoading(false)
    }

    function handleOnEdit(oneAddress) {
        setAddressSelected(oneAddress)
        setStateCart("edit")
    }

    function handleOnMyAddress() {
        setStateCart("myAddresses")
    }

    function handleOnCreate() {
        setStateCart('add')
    }

    async function handleOnCheckout() {
        const response = await dispatch(checkout(userState.id));
        if (response.status === 200) {
            navigate('/')
        }
    }

    useEffect(() => {
        if (addressState.length === 0) {
            fetchAddress();
        }else{
            setIsLoading(false)
        }
    }, [])

    return (
        <ShippingDetailsComponents
            shoppingCartState={shoppingCartState}
            userState={userState}
            address={addressState?.find(oneAddress => oneAddress.active === true)}
            allAddresses={addressState}
            stateCart={stateCart}
            handleOnCreate={handleOnCreate}
            handleOnMyAddress={handleOnMyAddress}
            handleOnEdit={handleOnEdit}
            setAddressSelected={setAddressSelected}
            isLoading={isLoading}
            handleOnCheckout={handleOnCheckout}
            setIsLoading={setIsLoading}
            fetchAddress={fetchAddress}
            setStateCart={setStateCart}
            addressSelected={addressSelected}
        />
    )
}

export default CheckoutContainer
