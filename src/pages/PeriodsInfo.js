import React from 'react';
import './PeriodsInfo.css';

// Import images from the assets folder
import pcosinfo1 from '../assets/pcosinfo1.jpg';
import pcosinfo2 from '../assets/pcosinfo2.jpg';
import pcosinfo3 from '../assets/pcosinfo3.jpg'; // Third image

const PeriodsInfo = () => {
  return (
    <div className="info-page">
      <h1 className="main-heading">PCOD/PCOS Awareness</h1>

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
        <h2 className="sub-heading">Common Symptoms</h2>
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
        <h2 className="sub-heading">Causes</h2>
        <p className="section-text">
          While the exact cause of PCOD/PCOS remains unclear, several factors may play a role in its development:
        </p>
        <ol>
          <li>
            <strong>Genetic Predisposition:</strong> A family history of PCOD/PCOS increases your likelihood of developing it.
          </li>
          <li>
            <strong>Hormonal Imbalance:</strong> Abnormal levels of reproductive hormones can interfere with normal ovarian function.
          </li>
          <li>
            <strong>Insulin Resistance:</strong> High insulin levels can lead to weight gain and other complications linked to PCOS.
          </li>
        </ol>
      </section>

      <section className="management-section">
        <h2 className="sub-heading">Management Strategies</h2>
        <p className="section-text">
          Although there’s no cure for PCOD/PCOS, you can manage the symptoms effectively with the following approaches:
        </p>
        <img 
          src={pcosinfo3} 
          alt="Management of PCOD/PCOS" 
          className="third-section-image"
        />
        <ol>
          <li><strong>Healthy Diet:</strong> Opt for a balanced diet rich in vegetables, fruits, and whole grains.</li>
          <li><strong>Regular Exercise:</strong> Physical activity can improve insulin sensitivity and hormonal balance.</li>
          <li><strong>Stress Management:</strong> Practices like yoga or meditation can reduce stress and improve hormonal health.</li>
          <li><strong>Medications:</strong> Consult your doctor for hormonal or insulin-regulating treatments.</li>
        </ol>
      </section>

      <section className="prevention-section">
        <h2 className="sub-heading">Preventive Measures</h2>
        <p className="section-text">
          While not all cases of PCOD/PCOS can be prevented, you can take measures to lower your risk:
        </p>
        <ol>
          <li>Maintain a healthy body weight</li>
          <li>Adopt a balanced and nutritious diet</li>
          <li>Stay physically active with regular exercise</li>
          <li>Reduce stress through mindfulness or relaxation techniques</li>
        </ol>
      </section>

      <footer className="info-footer">
        <h3 className="footer-heading">Final Thoughts</h3>
        <p>
          If you experience symptoms of PCOD/PCOS, consult a healthcare professional for a proper diagnosis and management plan. 
          Early intervention is key to living a healthy, balanced life. Empower yourself with the right information and take 
          control of your well-being.
        </p>
      </footer>
    </div>
  );
};

export default PeriodsInfo;
