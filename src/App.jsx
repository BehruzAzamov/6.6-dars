import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./page/Home";
import Menu from "./page/Menu";
import About from "./page/About";
import ReadMore from "./page/ReadMore";

const App = () => {
  return (
    <Router>
      <div className="header">
        <h2>
          <span className="logo-left">Foody</span>
          <span className="logo-right">Cart.</span>
        </h2>
        <nav>
          <ul className="navbar_ul">
            <li className="navbar_li">
              <Link to="/">Home</Link>
            </li>
            <li className="navbar_li">
              <Link to="/menu">Menu</Link>
            </li>
            <li className="navbar_li">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/readmore/:id" element={<ReadMore />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
