import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Analyze.css';

// Import images
import periodsImage from '../assets/periods.png';
import downloadImage from '../assets/download.jpg';
import stressImage from '../assets/stress.jpg'; // Import stress image

const Analyze = () => {
  const navigate = useNavigate();

  const conditions = [
    {
      id: 1,
      title: "PCOD/PCOS",
      description: "Answer questions about your symptoms and cycles to assess your risk for PCOD or PCOS.",
      image: periodsImage,
      page: "/periods"
    },
    {
      id: 2,
      title: "Cancer",
      description: "Choose to examine breast or uterus cancer and complete a questionnaire to assess your risk level.",
      image: downloadImage,
      page: "/cancer"
    },
    {
      id: 3,
      title: "Stress",
      description: "Understand your stress levels by answering a simple set of questions.",
      image: stressImage,
      page: "/stress", // Add the page route for stress analysis
    },
   
  ];

  const handleNavigate = (page) => {
    navigate(page);
  };

  return (
    <div className="analyze-page">
      <h1 style={{ color: 'rgb(170, 61, 79)' }} className="analyze-title">Health Analysis</h1>

      {/* Adding the health analysis prompt below the title */}
      <center>
        <p style={{ fontWeight: 'bold', color: 'rgb(170, 61, 79)', fontSize: '1.2rem' }}>
          Analyze your health now!
        </p>
      </center>

      <div className="condition-cards">
        {conditions.map((condition) => (
          <div key={condition.id} className="condition-card" style={{ border: '2px solid rgb(170, 61, 79)', borderRadius: '10px' }}>
            <img src={condition.image} alt={condition.title} />
            <h2 style={{ color: 'rgb(170, 61, 79)' }}>{condition.title}</h2>
            <p>{condition.description}</p>
            <div className="button-group">
              <button 
                className="analyze-btn"
                style={{ backgroundColor: 'rgb(170, 61, 79)', color: 'white' }}
                onClick={() => handleNavigate(condition.page)}
              >
                Analyze Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Analyze;
