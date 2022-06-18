import React from 'react';
import './App.css';
import Router from "./components/Router";
import Navbar from "./components/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='bg-dark bg-gradient min-vh-100 '>
      <Navbar />
      <Router />
    </div>
  )
}

export default App;
