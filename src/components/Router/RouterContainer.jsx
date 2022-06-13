import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from "../HomePage";
import Register from "../Register";
import LogIn from "../LogIn";
import AbmProducts from "../AbmProducts"

function RouterContainer() {
    return (
        <Routes>

            <Route path='/' element={<HomePage />} />

            <Route path='/register' element={<Register />} />

            <Route path='/login' element={<LogIn />} />

            <Route path='/abm' element={<AbmProducts />} />

        </Routes>
    );
}

export default RouterContainer;