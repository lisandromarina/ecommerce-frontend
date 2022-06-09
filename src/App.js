import './App.css';
import Router from "./components/Router";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className='bg-dark bg-gradient min-vh-100 '>
      <Navbar />
      <div className='container'>
        <Router />
      </div>
    </div>
  )
}

export default App;
