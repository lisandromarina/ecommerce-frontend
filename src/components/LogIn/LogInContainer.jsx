import React, { useState, useEffect } from 'react';
import LogInComponent from "./LogInComponent";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/userSlice"
import { useNavigate, useLocation } from 'react-router-dom';
import { fetchShoppingCart } from "../../redux/slices/shoppingCartSlice";

function LogInContainer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const [userLoged, setUserLoged] = useState({
    username: "",
    password: ""
  });

  const onChangeUserState = (e) => {
    const { name, value } = e.target;
    setUserLoged((prevState) => ({ ...prevState, [name]: value }));
  };

  async function handleOnSubmit() {
    const prevPath = location.state.prevPath;
    dispatch(login(userLoged)).then((response) => {
      dispatch(fetchShoppingCart(response));
      navigate(prevPath)
    }
    );
  }

  return (
    <LogInComponent
      onChangeUserState={onChangeUserState}
      handleOnSubmit={handleOnSubmit}
    />
  )
};

export default LogInContainer;