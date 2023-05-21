import React, { useState, useEffect } from 'react';
import { fetchAllAddressByUserId, selectAddress } from '../../redux/actions/addressAction'
import { useSelector, useDispatch } from "react-redux";
import ShippingDetailsComponents from './ShippingDetailsComponents';

function ShippingDetailsContainer() {
    const shoppingCartState = useSelector(state => state.shoppingCart);
    const userState = useSelector(state => state.user.user);
    const addressState = useSelector(state => state.address.addresses);
    const [isEdit, setIsEdit] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch();

    async function fetchAddress() {
        setIsLoading(true)
        await dispatch(fetchAllAddressByUserId(userState.id));
        setIsLoading(false)
    }

    async function handleOnSelectAddress(addressId) {
        setIsLoading(true)
        await dispatch(selectAddress(addressId, userState.id))
        setIsLoading(false)
    }

    function handleOnEdit() {
        setIsEdit(true)
    }

    function handleOnCancel() {
        setIsEdit(false)
    }

    useEffect(() => {
        if (addressState.length === 0) fetchAddress();
    }, [addressState])

    return (
        <ShippingDetailsComponents
            cartProducts={shoppingCartState.cartProducts}
            userState={userState}
            address={addressState?.find(oneAddress => oneAddress.active === true)}
            allAddresses={addressState}
            isEdit={isEdit}
            handleOnEdit={handleOnEdit}
            handleOnCancel={handleOnCancel}
            handleOnSelectAddress={handleOnSelectAddress}
            isLoading={isLoading}
        />
    )
}

export default ShippingDetailsContainer
