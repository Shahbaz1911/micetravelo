import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Products from "./components/Products";
import About from "./components/About";
import NavBar from './components/NavBar/NavBar'
function App() {
  const navigate = useNavigate();
  const about = () => {
    navigate("/aboutus");
  };
  return (
    <div className="w-screen min-h-screen">
      <NavBar/>
      <button onClick={about}>click to About</button>
      <Routes>
        <Route path="/prod" element={<Products />} />
        <Route path="/contact" element={<Products />} />
        <Route path="/aboutus" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
