import React from 'react';
import RegisterComponent from "./RegisterComponent";
import { useDispatch } from "react-redux";
import { register } from "../../redux/actions/userAction"
import useFormState from '../../hook/useFormState';

function RegisterContainer() {
    const dispatch = useDispatch();

    const initialState = {
        firstName: undefined,
        lastName: undefined,
        username: undefined,
        email: undefined,
        password: undefined
    };
    const { formData: user, handleChange: HandleOnChange } = useFormState(initialState);

    function handleOnSubmit() {
        dispatch(register(user));
    }

    return (
        <RegisterComponent
            user={user}
            HandleOnChange={HandleOnChange}
            handleOnSubmit={handleOnSubmit}
        />
    )
};

export default RegisterContainer;