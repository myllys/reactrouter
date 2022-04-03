import logo from './logo.svg';
import './App.css';

import React, { Component } from "react";

import {
  Route,
  NavLink,
  HashRouter,
  Routes
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Welcome to react router</h1>
          <ul className="header">
          <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/About">About</NavLink></li>
            <li><NavLink to="/Contact">Contact</NavLink></li>
          </ul>
          <div className="content">
         <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/About" element={<About />} />
         <Route path="/Contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
        </HashRouter>
    );
  }
}

export default App;
