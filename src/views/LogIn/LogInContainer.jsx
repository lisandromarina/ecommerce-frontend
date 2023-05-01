import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/userAction"
import { fetchShoppingCart } from "../../redux/actions/shoppingCartAction";
import LogInComponent from "./LogInComponent";

function LogInContainer() {
  const dispatch = useDispatch();

  const [userLoged, setUserLoged] = useState({
    username: "",
    password: ""
  });

  const onChangeUserState = (e) => {
    const { name, value } = e.target;
    setUserLoged((prevState) => ({ ...prevState, [name]: value }));
  };

  async function handleOnSubmit() {
    dispatch(login(userLoged)).then((response) => {
      dispatch(fetchShoppingCart(response));
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