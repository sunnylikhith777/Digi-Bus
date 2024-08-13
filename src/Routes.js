import React from "react";
import { Route, Routes } from 'react-router-dom'
import Bookings from "./components/Bookings";
import Home from "./components/Home";
import Help from "./components/Help";
import Account from "./components/Account";

const Routes = () => {
    return (
        <Routes>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/bookings" element={<Bookings />} />
                <Route path="/help" element={<Help />} />
                <Route path="/account" element={<Account />} />
            </Routes>
        </Routes>
    )
}
export default Routes