import React, { useState } from 'react';
import RegisterComponent from "./RegisterComponent";
import { useDispatch } from "react-redux";
import { register } from "../../redux/actions/userAction"
import { useNavigate, useLocation } from 'react-router-dom';

function RegisterContainer() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const location = useLocation();
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: ""
    });

    function HandleOnChange(e) {
        const { name, value } = e.target;
        setUser((prevState) => ({ ...prevState, [name]: value }));
    };

    function handleOnSubmit() {
        const prevPath = location.state.prevPath;
        dispatch(register(user));
    }

    return (
        <RegisterComponent
            HandleOnChange={HandleOnChange}
            handleOnSubmit={handleOnSubmit}
        />
    )
};

export default RegisterContainer;