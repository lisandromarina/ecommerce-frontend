import React, { Suspense, useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { parseJwt } from './utils/tokenUtils';
import { setUserState, setIsAuth, logOut } from "./redux/slices/userSlice";
import { validateToken, findUserById } from "./redux/actions/userAction";
import { fetchShoppingCart } from "./redux/actions/shoppingCartAction";
import { fetchAllCategory } from './redux/actions/categoryAction';
import "./AppStyles.scss";
import Router from "./components/Router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Alert from "./components/Alert";
import Spinner from './components/Spinner/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  async function verifyToken() {
    let token = localStorage.getItem("token");
    if (token) {
      if (dispatch(validateToken(token))) {
        let tokenParsed = parseJwt(token);
        await dispatch(findUserById(tokenParsed.userId))
        await dispatch(fetchShoppingCart(tokenParsed.userId));
        dispatch(setIsAuth(true));
      }
    }
    setIsLoading(false);
  }

  useEffect(() => {
    dispatch(fetchAllCategory());
    verifyToken();
  }, []);

  if (isLoading) {
    return (
      <Spinner />
    )
  }

  return (
    <Suspense fallback={<Spinner />}>
      <Alert />
      <div className='app-contaier'>
        <ScrollToTop />
        <Navbar />
        <Router />
        <Footer />
      </div>
    </Suspense>
  )
}

export default App;