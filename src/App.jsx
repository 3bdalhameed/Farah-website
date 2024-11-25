// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyTest from "./pages/mytest";
import Galary from "./pages/newenglish/newenglish";


function App() {
    return (
        <Router>
            <div>
                <p>error</p>
                <Routes>
                    <Route path="/" element={<MyTest />} />
                    <Route path="/galary" element={<Galary />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;