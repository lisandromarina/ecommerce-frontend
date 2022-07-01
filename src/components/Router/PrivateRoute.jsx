import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from "react-redux";

const PrivateRoute = () => {
    const isAuth = useSelector(state => state.user.isAuth);

    if (!isAuth) {
      return <Navigate to={"/login"} replace />;
    }
  
    return <Outlet/>;
  };

export default PrivateRoute;