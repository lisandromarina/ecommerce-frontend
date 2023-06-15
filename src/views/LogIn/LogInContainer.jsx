import React from 'react';
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/userAction"
import { fetchShoppingCart } from "../../redux/actions/shoppingCartAction";
import LogInComponent from "./LogInComponent";
import useFormState from '../../hook/useFormState';

function LogInContainer() {
  const dispatch = useDispatch();

  const initialState = {
    username: undefined,
    password: undefined,
  };
  const { formData, handleChange } = useFormState(initialState);

  async function handleOnSubmit() {
    dispatch(login(formData)).then((response) => {
      dispatch(fetchShoppingCart(response));
    });
  }

  return (
    <LogInComponent
      handleChange={handleChange}
      formData={formData}
      handleOnSubmit={handleOnSubmit}
    />
  )
};

export default LogInContainer;