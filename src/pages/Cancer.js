// Cancer.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Cancer.css';

function Cancer() {
  const navigate = useNavigate();

  return (
    <div className="cancer-container">
      <h1 className="cancer-title">Cancer Assessment</h1>
      <p className="cancer-description">Select the type of cancer to proceed with the assessment.</p>
      <div className="button-container">
        <button className="cancer-button" onClick={() => navigate('/breast')}>Breast Cancer</button>
        <button className="cancer-button" onClick={() => navigate('/uterus')}>Uterine Cancer</button>
      </div>
    </div>
  );
}

export default Cancer;
