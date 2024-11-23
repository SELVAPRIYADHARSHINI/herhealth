import React, { useEffect } from 'react';
import Card from '../components/Card';
import './Home.css';
import healthcare from '../assets/healthcare.jpg';
import logo from '../assets/logo.jpg';
import spd from '../assets/spd.jpg';
import rithiha from '../assets/rithiha.jpg';
import banu from '../assets/banu.jpg';
import vasu from '../assets/vasu.jpg';

const DeveloperCard = ({ name, role, image }) => (
  <Card variant="default" className="dev-card">
    <img src={image} alt={name} className="dev-image" />
    <h2>{name}</h2>
    <h3>{role}</h3>
    {/* Removed the "Know More" button */}
  </Card>
);

const Home = () => {
  useEffect(() => {
    // Add an animation for the page content to appear when clicked
    const homeContent = document.querySelector('.home');
    homeContent.classList.add('fade-in');
  }, []);

  const developers = [
    {
      name: "Banusri S",
      role: "Backend Developer",
      image: banu
    },
    {
      name: "Rithiha U",
      role: "Frontend Developer",
      image: rithiha
    },
    {
      name: "Selvapriya S",
      role: "Frontend Developer",
      image: spd
    },
    {
      name: "Vasundraa S",
      role: "Backend Developer",
      image: vasu
    }
  ];

  return (
    <div className="home">
      <div className="hero-section">
        {/* Logo Section */}
        <div className="logo-container">
          <img src={logo} alt="Institution Logo" className="institution-logo" />
          <p className="institution-name"><b>Integrated with KMCH</b></p>
        </div>

        <div className="hero-content">
          <h1 className="hero-title">Your Guide for Better Health</h1>
          <div className="hero-description">
            <p>
              In today's world, women often face challenges in accessing reliable health information and managing common health concerns. From critical diseases like breast cancer and PCOD to everyday issues like headaches, cold and coughs, many women struggle to find immediate assistance or preventive measures due to busy lifestyles or a lack of accessible resources.
            </p>
            <p>
              Our solution aims to bridge this gap by providing women with accessible, accurate, and reliable health information at their fingertips. Through a comprehensive platform, we offer static content on critical health issues including symptoms and preventive tips supported by informative images.
            </p>
            <p>
              We go further by providing self-assessment questionnaires that help users understand their risks for serious conditions like breast cancer, endometrial cancer, and PCOD. These questions are carefully crafted and verified by medical professionals to ensure they are relevant and medically sound.
            </p>
            <p>
              An interactive chatbot is also available to assist with everyday health concerns like headaches, cold, and coughs, offering quick and easy-to-understand guidance. This ensures that women can get reliable information instantly without the need to visit a clinic for every small issue.
            </p>
            <p>
              To support stress management, our platform also includes stress detection features. If the user is highly stressed, the system alerts doctors for timely intervention and virtual care, empowering women to manage their health proactively.
            </p>
            <p>
              Our mission is to provide women with the tools they need to take control of their health, offering trusted information and support that is both accessible and reliable.
            </p>
          </div>
        </div>

        <div className="hero-image-container">
          <img src={healthcare} alt="Healthcare AI" className="hero-image" />
        </div>
      </div>

      <section className="team-section">
        <h2 className="section-title">Our Expert Team</h2>
        <div className="team-grid">
          {developers.map((dev, index) => (
            <DeveloperCard key={index} {...dev} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
