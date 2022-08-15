import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/userAction"
import { fetchShoppingCart } from "../../redux/actions/shoppingCartAction";
import LogInComponent from "./LogInComponent";

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