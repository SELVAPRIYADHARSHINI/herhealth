import React from 'react';
import './PeriodsInfo.css';

// Import images from the assets folder
import pcosinfo1 from '../assets/pcosinfo1.jpg';
import pcosinfo2 from '../assets/pcosinfo2.jpg';
import pcosinfo3 from '../assets/pcosinfo3.jpg';
import pcosinfo4 from '../assets/pcosinfo4.jpg';

const PeriodsInfo = () => {
  return (
    <div className="info-page">
      <h1>PCOD/PCOS Awareness</h1>
      
      <div className="intro-section">
        <img 
          src={pcosinfo1} 
          alt="PCOD/PCOS" 
          className="intro-image"
        />
        <p className="intro-text">
          PCOD (Polycystic Ovarian Disease) and PCOS (Polycystic Ovary Syndrome) are hormonal disorders 
          that impact millions of women worldwide. These conditions are characterized by irregular menstrual cycles, 
          hormonal imbalances, and potential challenges with fertility. With proper awareness and timely intervention, 
          these conditions can be managed effectively, improving overall health and quality of life.
        </p>
      </div>

      <section className="symptoms-section">
        <h2>Common Symptoms</h2>
        <img 
          src={pcosinfo2} 
          alt="Symptoms of PCOD/PCOS" 
          className="section-image"
        />
        <p className="section-text">
          The symptoms of PCOD/PCOS may vary from person to person, making it crucial to recognize the most common signs early:
        </p>
        <ol>
          <li>Irregular or absent menstrual periods</li>
          <li>Excessive hair growth on the face, chest, or back</li>
          <li>Persistent acne and oily skin</li>
          <li>Thinning hair or significant hair loss</li>
          <li>Difficulty in conceiving or infertility</li>
          <li>Weight gain or difficulty losing weight</li>
          <li>Dark patches of skin around the neck or underarms</li>
        </ol>
      </section>

      <section className="causes-section">
        <h2>Causes</h2>
        <img 
          src={pcosinfo3} 
          alt="Causes of PCOD/PCOS" 
          className="section-image"
        />
        <p className="section-text">
          While the exact cause of PCOD/PCOS remains unclear, several factors may play a role in its development:
        </p>
        <ol>
          <li><strong>Genetic Predisposition:</strong> A family history of PCOD/PCOS increases your likelihood of developing it.</li>
          <li><strong>Hormonal Imbalance:</strong> Abnormal levels of reproductive hormones can interfere with normal ovarian function.</li>
          <li><strong>Insulin Resistance:</strong> High insulin levels can lead to weight gain and other complications linked to PCOS.</li>
        </ol>
      </section>

      <section className="management-section">
        <h2>Management Strategies</h2>
        <p className="section-text">
          Although there’s no cure for PCOD/PCOS, you can manage the symptoms effectively with the following approaches:
        </p>
        <img 
          src={pcosinfo4} 
          alt="Management of PCOD/PCOS" 
          className="section-image"
        />
        <ol>
          <li><strong>Healthy Diet:</strong> Opt for a balanced diet rich in vegetables, fruits, and whole grains.</li>
          <li><strong>Regular Exercise:</strong> Physical activity can improve insulin sensitivity and hormonal balance.</li>
          <li><strong>Stress Management:</strong> Practices like yoga or meditation can reduce stress and improve hormonal health.</li>
          <li><strong>Medications:</strong> Consult your doctor for hormonal or insulin-regulating treatments.</li>
        </ol>
      </section>

      <section className="prevention-section">
        <h2>Prevention and Lifestyle Tips</h2>
        <p className="section-text">
          Lifestyle changes can significantly reduce the risk or impact of PCOD/PCOS. Follow these tips:
        </p>
        <ol>
          <li>Maintain a healthy weight through balanced eating and exercise.</li>
          <li>Avoid chronic stress by incorporating relaxation techniques into your daily routine.</li>
          <li>Stay proactive with regular medical checkups and health monitoring.</li>
        </ol>
      </section>

      <footer className="info-footer">
        <p>
          If you experience these symptoms, consult a healthcare professional for a proper diagnosis and management plan. 
          Early intervention is key to living a healthy, balanced life.
        </p>
      </footer>
    </div>
  );
};

export default PeriodsInfo;
