import React, { useState, useEffect } from 'react';
import LogInComponent from "./LogInComponent";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../redux/slices/userSlice"
import { useNavigate } from 'react-router-dom';

function LogInContainer() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const userState = useSelector(state => state.user.user)

  const [userLoged, setUserLoged] = useState({
    username: "",
    password: ""
  });

  const onChangeUserState = (e) => {
    const { name, value } = e.target;
    setUserLoged((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleOnSubmit = () => {
    dispatch(login(userLoged))
  }

  //if userState changed and is not null, redirect because isLogged
  useEffect(() => {
    if (Object.keys(userState).length !== 0) navigate("/")
  }, [userState]);

  return (
    <LogInComponent
      onChangeUserState={onChangeUserState}
      handleOnSubmit={handleOnSubmit}
    />
  )
};

export default LogInContainer;