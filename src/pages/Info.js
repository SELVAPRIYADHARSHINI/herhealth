import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Info.css';

import pcod from '../assets/pcod.jpg';
import cancerinfo from '../assets/cancerinfo.jpg';
import stressinfo from '../assets/stressinfo.jpg'; // Add the stress image

const Info = () => {
  const navigate = useNavigate();

  const diseases = [
    {
      id: 1,
      title: "PCOD/PCOS",
      description: "Understand PCOD/PCOS, its symptoms, and effective management strategies for a healthy lifestyle.",
      image: pcod,
      path: "/periodsinfo"
    },
    {
      id: 2,
      title: "Cancer",
      description: "Comprehensive guide to cancer types, prevention, and the latest treatments available.",
      image: cancerinfo,
      path: "/cancerinfo"
    },
    {
      id: 3, // Add Stress as a new entry
      title: "Stress",
      description: "Learn about stress, its impact on health, and effective ways to manage it.",
      image: stressinfo,  // Add the image for stress
      path: "/stressinfo" // Path for Stress page
    }
  ];

  return (
    <div className="info-page">
     <h1 className="info-title" style={{ color: 'rgb(170, 61, 79)' }}>
  Common Health Conditions
</h1>

      <center>
        <p style={{ textAlign: 'center', fontWeight: 'bold', color: 'rgb(170, 61, 79)' }}>
          Explore the following health topics. What specific insights are you looking for today?
        </p>
      </center>

      <div className="disease-cards">
        {diseases.map((disease) => (
          <div key={disease.id} className="disease-card">
            <img src={disease.image} alt={disease.title} />
            <h2>{disease.title}</h2>
            <p>{disease.description}</p>
            <button onClick={() => navigate(disease.path)}>
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Info;
