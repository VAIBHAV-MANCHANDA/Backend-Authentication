import { BrowserRouter, Routes, Route } from "react-router-dom";
// BrowserRouter: browser ke URL ko React app ke routes se connect karta hai.
// Routes: saare route rules ka wrapper hota hai.
// Route: ek specific path define karta hai.

import MainLayout from "../components/layout/MainLayout";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";

function AppRoutes() {
    return (

    <BrowserRouter>
        <MainLayout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />}  />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </MainLayout>    
    </BrowserRouter>
    
    );
}

export default AppRoutes;