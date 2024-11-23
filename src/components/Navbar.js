import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">HerHealth🧚🏻🩷</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/info">Info</Link>
          <Link to="/analyze">Analyze</Link>
          <Link to="/chatbot">Chatbot</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
