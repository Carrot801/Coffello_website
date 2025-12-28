import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";

import Home from './pages/Home';
import Navigationbar from './components/Navigationbar';
import Menu from './pages/Menu';
import Drinks from './pages/Drinks';
import Sweets from './pages/Sweets';
import { NewDelights } from './pages/NewDelights';
import {AboutUs} from './pages/AboutUs';
const App = () => {
  return (
    <div>
      <Navigationbar />
      <Routes>
        
        <Route path="/" element={<Home />} />

        <Route path="/Menu" element={<Menu />} />
        <Route path="/Drinks" element={<Drinks />} />
        <Route path="/Sweets" element={<Sweets />} />
        <Route path="/NewDelights" element={< NewDelights/>} />
        <Route path="/AboutUs" element={< AboutUs/>}  />

      </Routes>
    </div>
  );
};

export default App;
