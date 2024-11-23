import React, { useState } from 'react';
import './Periods.css';

const Periods = () => {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [risk, setRisk] = useState('');

  // List of questions and options with point values
  const questions = [
    {
      id: 1,
      question: "How regular are your menstrual cycles?",
      options: [
        { label: "Very regular (28-35 days)", points: 0 },
        { label: "Occasionally irregular (once in 3-4 months)", points: 2 },
        { label: "Frequently irregular (cycles skip often)", points: 4 },
        { label: "Absent for months (6 months or more)", points: 6 }
      ]
    },
    {
      id: 2,
      question: "Do you experience excessive hair growth (hirsutism) in areas like the face, chest, or back?",
      options: [
        { label: "No excessive hair growth", points: 0 },
        { label: "Mild hair growth", points: 2 },
        { label: "Moderate hair growth (requires regular management)", points: 4 },
        { label: "Severe hair growth (difficult to manage)", points: 6 }
      ]
    },
    {
      id: 3,
      question: "How often do you experience acne or oily skin?",
      options: [
        { label: "Rarely or never", points: 0 },
        { label: "Occasionally (around menstrual cycles)", points: 2 },
        { label: "Often (throughout the month)", points: 4 },
        { label: "Severe, persistent acne", points: 6 }
      ]
    },
    {
      id: 4,
      question: "Do you experience weight gain that is difficult to lose?",
      options: [
        { label: "No, my weight is stable", points: 0 },
        { label: "Slight weight gain but manageable", points: 2 },
        { label: "Moderate weight gain, hard to lose", points: 4 },
        { label: "Severe weight gain with no significant loss despite effort", points: 6 }
      ]
    },
    {
      id: 5,
      question: "Do you experience mood swings, depression, or anxiety?",
      options: [
        { label: "Rarely or never", points: 0 },
        { label: "Occasionally", points: 2 },
        { label: "Frequently", points: 4 },
        { label: "Severe and persistent", points: 6 }
      ]
    },
    {
      id: 6,
      question: "Do you experience fatigue or low energy levels?",
      options: [
        { label: "Rarely or never", points: 0 },
        { label: "Occasionally (manageable)", points: 2 },
        { label: "Often (affects daily activities)", points: 4 },
        { label: "Always (severe fatigue)", points: 6 }
      ]
    },
    {
      id: 7,
      question: "Do you notice thinning hair or hair loss (scalp)?",
      options: [
        { label: "No hair loss", points: 0 },
        { label: "Mild thinning", points: 2 },
        { label: "Moderate thinning (noticeable)", points: 4 },
        { label: "Severe thinning/bald patches", points: 6 }
      ]
    },
    {
      id: 8,
      question: "Do you experience pelvic pain or discomfort?",
      options: [
        { label: "No pelvic pain", points: 0 },
        { label: "Rarely", points: 2 },
        { label: "Often (around cycles)", points: 4 },
        { label: "Severe, persistent pain", points: 6 }
      ]
    },
    {
      id: 9,
      question: "Do you have difficulty conceiving or experience infertility issues?",
      options: [
        { label: "No, I have not experienced such issues", points: 0 },
        { label: "I have some concerns but no confirmed difficulty", points: 2 },
        { label: "I have experienced difficulty conceiving (e.g., over 6 months)", points: 4 },
        { label: "I have confirmed infertility issues related to ovulation", points: 6 }
      ]
    },
    {
      id: 10,
      question: "Do you have a family history of PCOD/PCOS or related conditions (e.g., diabetes, obesity)?",
      options: [
        { label: "No family history", points: 0 },
        { label: "Distant relatives with mild conditions", points: 2 },
        { label: "Immediate family members (parents, siblings) with related conditions", points: 4 },
        { label: "Strong family history of PCOD/PCOS or metabolic issues", points: 6 }
      ]
    },
    // New question about darkening of skin
    {
      id: 11,
      question: "Do you experience darkening of the skin in areas like the neck, underarms, or groin (Acanthosis Nigricans)?",
      options: [
        { label: "No darkening of skin", points: 0 },
        { label: "Mild darkening", points: 2 },
        { label: "Moderate darkening", points: 4 },
        { label: "Severe darkening", points: 6 }
      ]
    }
  ];

  const handleAnswerChange = (questionId, points) => {
    setAnswers({
      ...answers,
      [questionId]: points
    });
  };

  const calculateRisk = () => {
    const totalScore = Object.values(answers).reduce((sum, points) => sum + points, 0);
    setScore(totalScore);

    if (totalScore <= 15) {
      setRisk("Low Risk: You show minimal symptoms of PCOD/PCOS.");
    } else if (totalScore <= 35) {
      setRisk("Moderate Risk: You exhibit some signs of PCOD/PCOS. Consult a healthcare provider.");
    } else {
      setRisk("High Risk: You display multiple symptoms of PCOD/PCOS. A detailed medical assessment is recommended.");
    }
  };

  return (
    <div className="periods-page">
      <h1>PCOD/PCOS Risk Assessment</h1>
      <p>Answer the following questions to assess your risk for PCOD/PCOS:</p>

      {questions.map((question) => (
        <div key={question.id} className="question">
          <h3>{question.question}</h3>
          <div className="options">
            {question.options.map((option) => (
              <label key={option.label}>
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={option.points}
                  onChange={() => handleAnswerChange(question.id, option.points)}
                />
                {option.label}
              </label>
            ))}
          </div>
        </div>
      ))}

      <button className="calculate-btn" onClick={calculateRisk}>Calculate Risk</button>

      {risk && (
        <div className="risk-result">
          <h2>Risk Evaluation:</h2>
          <p>{risk}</p>
        </div>
      )}
    </div>
  );
};

export default Periods;
