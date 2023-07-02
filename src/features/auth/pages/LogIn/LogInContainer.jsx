import React, {useState} from 'react';
import { useDispatch } from "react-redux";
import { login } from "../../../../redux/actions/userAction"
import { fetchShoppingCart } from "../../../../redux/actions/shoppingCartAction";
import LogInComponent from "./LogInComponent";
import useFormState from '../../../../hook/useFormState';

function LogInContainer() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false)

  const initialState = {
    username: undefined,
    password: undefined,
  };
  const { formData, handleChange } = useFormState(initialState);

  async function handleOnSubmit() {
    setIsLoading(true)
    await dispatch(login(formData)).then((response) => {
      dispatch(fetchShoppingCart(response));
    });
    setIsLoading(false)
  }

  return (
    <LogInComponent
      isLoading={isLoading} 
      handleChange={handleChange}
      formData={formData}
      handleOnSubmit={handleOnSubmit}
    />
  )
};

export default LogInContainer;