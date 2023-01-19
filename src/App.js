import React, { useState, useEffect } from 'react';
import Router from "./components/Router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { parseJwt } from './utils/tokenUtils';
import { useDispatch } from "react-redux";
import { setUserState, setIsAuth } from "./redux/slices/userSlice";
import { fetchShoppingCart } from "./redux/actions/shoppingCartAction";
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  async function validateToken() {
    let token = localStorage.getItem("token");
    if (token) {
      //validate expireToken
      let tokenParsed = parseJwt(token);
      await dispatch(setUserState({ id: tokenParsed.userId, username: tokenParsed.sub }));
      await dispatch(fetchShoppingCart(tokenParsed.userId));
      dispatch(setIsAuth(true));
    }
    setIsLoading(false);
  }

  useEffect(() => {
    validateToken();
  }, []);

  if (isLoading) {
    return (
      <div className='d-flex justify-content-center align-items-center min-vh-100'>
        <Spinner
          animation="grow"
          variant="warning"
        />
      </div>
    )
  }

  return (
    <div className='bg-light bg-gradient' style={{ position:"relative", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent:"space-between"}}>
      <Navbar />
      <Router />
      <Footer />
    </div>
  )
}

export default App;
