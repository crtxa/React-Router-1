import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarTop from './components/Navbar';
import Home from './views/Home';
import Contacto from './views/Contacto';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavbarTop />
        <Routes>
          <Route path="/desafio-1-happycake/" element={<Home />}/>
          <Route path='/contacto' element={<Contacto />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
