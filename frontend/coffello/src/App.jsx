import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";

import Home from './pages/Home';
import Navigationbar from './components/Navigationbar';
import Menu from './pages/Menu';


const App = () => {
  return (
    <div>
      <Navigationbar />
      <Routes>
        
        <Route path="/" element={<Home />} />

        <Route path="/Menu" element={<Menu />} />
      </Routes>
    </div>
  );
};

export default App;
