import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Bookings from "./components/Bookings";
import Help from "./components/Help";
import Account from "./components/Account";
import Footer from "./Footer";
import Header from "./Header";
import Buses from "./components/Bus/Buses";
import Seatings from "./components/Bus/Seatings";
import User from "./components/Bus/User";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/help" element={<Help />} />
          <Route path="/account" element={<Account />} />
          <Route path="/buses" element={<Buses/>}/>
          <Route path="/seatings" element={<Seatings/>}/>
          <Route path="/user" element={<User/>}/>
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
