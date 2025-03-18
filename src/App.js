import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";

function App() {
    return (
        <Router>
            <div>
                {/* Navigation */}
                <nav className="nav-bar">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                    </ul>
                </nav>

                {/* Page Routes */}
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/products" element={<Products />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
