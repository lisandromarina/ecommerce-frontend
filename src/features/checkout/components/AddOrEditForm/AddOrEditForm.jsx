import React, { useEffect, useState } from 'react';
import { Card, Form, Col, Row } from 'react-bootstrap';
import Input from '../../../../components/Input';
import useFormState from '../../../../hook/useFormState';
import { useDispatch } from "react-redux";
import { saveAddress, editAddress } from '../../../../redux/actions/addressAction';
import Button from '../../../../components/Button';

function AddOrEditForm({ stateCart, userState, setStateCart, fetchAddress, addressSelected, setAddressSelected }) {
    const [isLoading, setIsLoading] = useState(false);
    const formTitle = stateCart === 'add' ? 'Agregá un domicilio' : 'Editá tu domicilio';

    const initialState = {
        fullName: "",
        postalCode: "",
        location: "",
        province: "",
        street: "",
        department: ""
    };
    const { formData, handleChange, setFormData, resetForm } = useFormState(initialState);
    const dispatch = useDispatch();

    async function handleOnSubmit() {
        setIsLoading(true)
        formData.user = { id: userState.id }

        let response;
        if (stateCart === "add") {
            response = await dispatch(saveAddress(formData))
        } else {
            response = await dispatch(editAddress(formData))
        }

        if (response.status === 200) {
            await fetchAddress();
            resetForm()
            setStateCart('readyToPay')
            setAddressSelected({})
        }
        setIsLoading(false)
    }

    useEffect(() => {
        if(addressSelected){
            setFormData(addressSelected)
        }
    }, [addressSelected])

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
                isLoading={isLoading}
                handleOnClick={() => handleOnSubmit()}
                label='Continuar'
            />
        </>
    )
}

export default AddOrEditForm
