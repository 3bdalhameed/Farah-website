// src/App.js
import React from "react";
import { Analytics } from "@vercel/analytics/react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyTest from "./pages/mytest";
import Galary from "./pages/newenglish/newenglish";
import About from "./pages/about/about.jsx";
import Service from "./pages/service/service.jsx";
import "./App.css";


function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Analytics />
                    <Route path="/" element={<MyTest />} />
                    <Route path="/gallery" element={<Galary />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Service />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;