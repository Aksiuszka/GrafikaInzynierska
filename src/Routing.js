import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/menu/Home';
import Shapes from './views/shapes/Shapes';

function Routing() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/shapes" element={<Shapes />} />
    </Routes>
</Router>
  )
}

export default Routing