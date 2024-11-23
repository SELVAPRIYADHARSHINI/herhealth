import React from 'react';
import './StressInfo.css';
import stressSymptomsImage from '../assets/stressinfo1.jpg';
import stressPreventionImage from '../assets/stressinfo2.jpg';

const StressInfo = () => {
  return (
    <div className="info-page">
      <h1>Stress Awareness</h1>

      {/* Stress Symptoms Section */}
      <section className="stress-section">
        <h2>Stress Symptoms</h2>
        <img
          src={stressSymptomsImage}
          alt="Stress Symptoms"
          className="stress-img"
        />
        <p>
          Stress is a natural response to challenges or demands in life, but chronic stress can negatively impact both physical and mental health. Recognizing the symptoms of stress early can help in managing it effectively.
        </p>
        
        <h3>Symptoms</h3>
        <ol>
          <li>Physical: Headaches, muscle tension, fatigue, and rapid heartbeat</li>
          <li>Emotional: Anxiety, irritability, mood swings, and feeling overwhelmed</li>
          <li>Mental: Difficulty concentrating, forgetfulness, and indecisiveness</li>
          <li>Behavioral: Changes in appetite, insomnia, or increased use of alcohol or other substances</li>
        </ol>
      </section>

      {/* Stress Prevention Section */}
      <section className="stress-section">
        <h2>Stress Prevention</h2>
        <img
          src={stressPreventionImage}
          alt="Stress Prevention"
          className="stress-img"
        />
        <p>
          Preventing stress involves adopting healthy habits and practices that improve overall well-being. Building resilience to stress can enhance your ability to face challenges and maintain balance.
        </p>
        
        <h3>Prevention Methods</h3>
        <ol>
          <li>Regular Exercise: Engage in physical activities like walking, yoga, or cycling</li>
          <li>Healthy Diet: Eat balanced meals rich in vitamins and nutrients</li>
          <li>Sleep Hygiene: Aim for 7-8 hours of quality sleep each night</li>
          <li>Relaxation Techniques: Practice meditation, deep breathing, or mindfulness</li>
          <li>Time Management: Plan your day and prioritize tasks to reduce workload stress</li>
          <li>Social Support: Spend time with friends and loved ones or seek support groups</li>
          <li>Limit Triggers: Avoid unnecessary stressors, such as overusing technology or procrastinating</li>
        </ol>
      </section>
    </div>
  );
};

export default StressInfo;
