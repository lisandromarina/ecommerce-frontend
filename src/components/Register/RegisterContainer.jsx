import React, { useState, useEffect } from 'react';
import RegisterComponent from "./RegisterComponent";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../../redux/slices/userSlice"
import { useNavigate } from 'react-router-dom';


function RegisterContainer() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const userState = useSelector(state => state.user.user)
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
        dispatch(register(user))
    }

    //if userState changed and is not null, redirect because isLogged
    useEffect(() => {
        if (Object.keys(userState).length !== 0) navigate("/")
    }, [userState]);


    return (
        <RegisterComponent
            HandleOnChange={HandleOnChange}
            handleOnSubmit={handleOnSubmit}
        />
    )
};

export default RegisterContainer;