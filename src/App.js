import React, { Suspense, useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { parseJwt } from './utils/tokenUtils';
import { setUserState, setIsAuth } from "./redux/slices/userSlice";
import { fetchShoppingCart } from "./redux/actions/shoppingCartAction";
import { fetchAllCategory } from './redux/actions/categoryAction';
import Router from "./components/Router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Spinner from './components/Spinner/Spinner';
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
    dispatch(fetchAllCategory());
    validateToken();
  }, []);

  if (isLoading) {
    return (
      <Spinner />
    )
  }

  return (
    <Suspense fallback={<Spinner />}>
      <div className='bg-light bg-gradient' style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <Navbar />
        <Router />
        <Footer />
      </div>
    </Suspense>
  )
}

export default App;
