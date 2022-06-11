import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from "../HomePage";
import Register from "../Register";
import LogIn from "../LogIn";

function RouterContainer() {
    return (
        <Routes>

            <Route path='/' element={<HomePage />} />

            <Route path='/register' element={<Register />} />

            <Route path='/login' element={<LogIn />} />

        </Routes>
    );
}

export default RouterContainer;