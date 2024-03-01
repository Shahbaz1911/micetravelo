import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import About from "./components/About";
import NavBar from './components/NavBar/NavBar'
import UpcomingTours from "./components/UpcomingTours";
import Destinations from "./components/Destinations";
import HappyCustumers from "./components/HappyCustumers";
import Payment from "./components/Payment";
import Contact from "./components/Contact";
import Home from "./components/Home";
function App() {
  const navigate = useNavigate();
  const about = () => {
    navigate("/aboutus");
  };
  return (
    <div className="w-screen min-h-screen">
      <NavBar />
      {/* <button onClick={about}>click to About</button> */}
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/aboutUs" element={<About />} />
        <Route path="/upcomingTours" element={<UpcomingTours />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/happyCustomers" element={<HappyCustumers/>} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
