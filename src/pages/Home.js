import React, { useEffect } from 'react';
import './Home.css';
import healthcare from '../assets/healthcare.jpeg';
import logo from '../assets/logo.jpg';

const Home = () => {
  useEffect(() => {
    const homeContent = document.querySelector('.home');
    homeContent.classList.add('fade-in');
  }, []);

  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content-container">
          <div className="hero-content">
            <div className="logo-container">
              <img src={logo} alt="Institution Logo" className="institution-logo" />
              <p className="institution-name">
                <b>With support</b>
              </p>
            </div>
            <h1 className="hero-title">Your Guide for Better Health</h1>
            <p className="hero-description">
              Women often face challenges accessing reliable health information, from critical issues like breast cancer and PCOD to everyday concerns like headaches and colds. Our solution addresses this by offering a user-friendly platform with useful health content and self-assessment questionnaires for serious conditions and an interactive chatbot for everyday health queries. Stress detection features alert doctors for timely intervention when needed. By providing accessible and trustworthy resources, we empower women to take charge of their health with confidence.
            </p>
          </div>
          <div className="hero-image-container">
            <img src={healthcare} alt="Healthcare AI" className="hero-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
