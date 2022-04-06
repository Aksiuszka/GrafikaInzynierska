import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/menu/Home';
import Cubes from './views/shapesCubes/Shapes';
import Pretzel from './views/shapesPretzel/Pretzel';

function Routing() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cubes" element={<Cubes />} />
    <Route path="/pretzel" element={<Pretzel />} />
    </Routes>
</Router>
  )
}

export default Routing