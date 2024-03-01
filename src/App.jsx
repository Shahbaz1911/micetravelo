import React from 'react';
import { Route, Routes } from "react-router-dom";
import Products from './components/Products';

function App() {
  return (
    <div className="w-screen min-h-screen">

      <div className=''>App</div>
     
      <Routes>
      <Route path="/prod" element={<Products/>} />
      <Route path="/contact" element={<Products/>} />

       </Routes>

      </div>
    

  )
}

export default App