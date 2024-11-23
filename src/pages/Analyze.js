import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Analyze.css';

// Import images if they are in 'src/assets'
import periodsImage from '../assets/periods.png';
import downloadImage from '../assets/download.jpg';

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
    }
    // {
    //   id: 3,
    //   title: "Stress",
    //   description: "Answer questions about your lifestyle and mental health to evaluate stress levels.",
    //   image: stressImage,
    //   page: "/stress"
    // }
  ];

  const handleNavigate = (page) => {
    navigate(page);
  };

  return (
    <div className="analyze-page">
      <h1 className="analyze-title">Health Analysis Tools</h1>
      <div className="condition-cards">
        {conditions.map((condition) => (
          <div key={condition.id} className="condition-card">
            <img src={condition.image} alt={condition.title} />
            <h2>{condition.title}</h2>
            <p>{condition.description}</p>
            <div className="button-group">
              <button 
                className="analyze-btn"
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
