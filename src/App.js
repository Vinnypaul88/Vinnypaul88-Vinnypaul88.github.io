import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home/Home";
import ErrorPage from "./Pages/Error/ErrorPage";
import Peinture from "./Pages/Peinture/Peinture";
import Revetement from "./Pages/Revetement/Revetement";
import Platreries from "./Pages/Platreries/Platreries";
import Isolation from "./Pages/Isolation/Isolation";
import Decoration from "./Pages/Decoration/Decoration";
import Contact from "./Pages/Contact/Contact";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/ErrorPage" element={<ErrorPage />} />
            <Route path="/peinture" element={<Peinture />} />
            <Route path="/revetement" element={<Revetement />} />
            <Route path="/platreries" element={<Platreries />} />
            <Route path="/isolation" element={<Isolation />} />
            <Route path="/decoration" element={<Decoration />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/ErrorPage" />} />
        </Routes>
    );
}

export default App;
