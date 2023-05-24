import React, { useState, useEffect } from 'react';
import { fetchAllAddressByUserId, selectAddress, saveAddress, editAddress } from '../../redux/actions/addressAction'
import { useSelector, useDispatch } from "react-redux";
import ShippingDetailsComponents from './ShippingDetailsComponents';
import useFormState from '../../hook/useFormState';

function ShippingDetailsContainer() {
    //['readyToPay', 'myAddresses', 'edit', 'add] == STATES CARTS
    const [stateCart, setStateCart] = useState('readyToPay');
    const shoppingCartState = useSelector(state => state.shoppingCart);
    const userState = useSelector(state => state.user.user);
    const addressState = useSelector(state => state.address.addresses);
    const [isLoading, setIsLoading] = useState(false)

    const initialState = {
        fullName: '',
        postalCode: '',
        location: '',
        province: '',
        street: '',
        streetNumber: '',
        department: ''
    };
    const { formData, handleChange, setFormData, resetForm } = useFormState(initialState);

    const dispatch = useDispatch();

    async function fetchAddress() {
        console.log('here')
        setIsLoading(true)
        const response = await dispatch(fetchAllAddressByUserId(userState.id));
        if(response.data.length === 0) setStateCart('add')
        setIsLoading(false)
    }

    async function handleOnSelectAddress(addressId) {
        setIsLoading(true)
        await dispatch(selectAddress(addressId, userState.id))
        fetchAddress();
        setIsLoading(false)
    }

    function handleOnEdit(oneAddress) {
        setFormData(oneAddress)
        setStateCart("edit")
    }

    function handleOnMyAddress() {
        setStateCart("myAddresses")
    }

    function handleOnCreate() {
        setStateCart('add')
    }

    function handleOnContinue() {
       console.log('create everything')
    }
    
    function handleOnCancel() {
        setStateCart('readyToPay')
    }

    async function handleOnSubmit() {
        formData.user = { id: userState.id }
        let response;
        if(stateCart === "add"){
            response = await dispatch(saveAddress(formData))
        }else{
            response = await dispatch(editAddress(formData))
        }
        if(response.status === 200) {
            fetchAddress();
            resetForm()
            setStateCart('readyToPay')
        }
    }

    useEffect(() => {
        if(addressState.length === 0){
            fetchAddress();
        }
    }, [])

    return (
        <ShippingDetailsComponents
            formData={formData}
            handleChange={handleChange}
            shoppingCartState={shoppingCartState}
            userState={userState}
            address={addressState?.find(oneAddress => oneAddress.active === true)}
            allAddresses={addressState}
            stateCart={stateCart}
            handleOnCreate={handleOnCreate}
            handleOnMyAddress={handleOnMyAddress}
            handleOnEdit={handleOnEdit}
            handleOnContinue={handleOnContinue}
            handleOnSelectAddress={handleOnSelectAddress}
            handleOnCancel={handleOnCancel}
            handleOnSubmit={handleOnSubmit}
            isLoading={isLoading}
        />
    )
}

export default ShippingDetailsContainer
