import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">HealthCare AI</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/info">Info</Link></li>
          <li><Link to="/analyze">Analyze</Link></li>
          <li><Link to="/chatbot">Chatbot</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
