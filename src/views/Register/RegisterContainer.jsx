import React from 'react';
import RegisterComponent from "./RegisterComponent";
import { useDispatch } from "react-redux";
import { register } from "../../redux/actions/userAction"
/* import { useNavigate, useLocation } from 'react-router-dom'; */
import useFormState from '../../hook/useFormState';


function RegisterContainer() {
   /*  const navigate = useNavigate() */
    const dispatch = useDispatch();
   /*  const location = useLocation(); */

    const initialState = {
        firstName: undefined,
        lastName: undefined,
        username: undefined,
        email: undefined,
        password: undefined
    };
    const { formData: user, handleChange: HandleOnChange } = useFormState(initialState);

    function handleOnSubmit() {
        /* const prevPath = location.state.prevPath;  ADD NAVIGATE TO HOMEPAGE*/
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