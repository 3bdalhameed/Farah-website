// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyTest from "./pages/mytest";
import Galary from "./pages/newenglish/newenglish";


function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<MyTest />} />
                    <Route path="/gallery" element={<Galary />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;