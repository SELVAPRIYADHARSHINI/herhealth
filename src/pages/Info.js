import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Info.css';

import pcod from '../assets/pcod.jpg';
import cancerinfo from '../assets/cancerinfo.webp';

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
    }
    // Stress entry has been removed
  ];

  return (
    <div className="info-page">
      <h1 className="info-title">Common Health Conditions</h1>
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
