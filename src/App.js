import React, { useState, useEffect } from 'react';
import './App.css';
import Router from "./components/Router";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { parseJwt } from './utils/tokenUtils';
import { useDispatch } from "react-redux";
import { setUserState, setIsAuth } from "./redux/slices/userSlice";
import { fetchShoppingCart } from "./redux/slices/shoppingCartSlice";
import { Spinner } from 'react-bootstrap';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  async function validateToken() {
    let token = localStorage.getItem("token")
    if (token) {
      let tokenParsed = parseJwt(token)
      await dispatch(setUserState({ id: tokenParsed.userId, username: tokenParsed.sub }))
      await dispatch(fetchShoppingCart(tokenParsed.userId));
      await dispatch(setIsAuth(true));
    }
    setIsLoading(false);
  }

  useEffect(() => {
    validateToken();
  }, []);

  return (
    <div className='bg-dark bg-gradient min-vh-100'>
      {
        isLoading ?
          <div className='d-flex justify-content-center align-items-center vh-100'>
            <Spinner
              animation="grow"
              variant="warning"
            />
          </div>
          :
          <div>
            <Navbar />
            <Router />
          </div>
      }
    </div>
  )
}

export default App;
