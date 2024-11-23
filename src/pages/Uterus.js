import React, { useState } from 'react';
import './Uterus.css';

const Uterus = () => {
  const [scores, setScores] = useState(Array(8).fill(0)); // Updated array size to 8 for 8 questions
  const [riskMessage, setRiskMessage] = useState(''); // State to hold the risk message

  const handleAnswerChange = (questionIndex, score) => {
    const updatedScores = [...scores];
    updatedScores[questionIndex] = score;
    setScores(updatedScores);
  };

  const calculateRisk = () => {
    const totalScore = scores.reduce((sum, score) => sum + score, 0);
    if (totalScore <= 15) {
      return "Low Risk: Minimal risk factors. Continue regular health check-ups and maintain healthy habits.";
    }
    if (totalScore <= 35) {
      return "Moderate Risk: Some risk factors present. Consult a healthcare provider about screenings or preventive measures.";
    }
    return "High Risk: Multiple risk factors present. Seek a detailed medical assessment and develop a personalized prevention strategy with a doctor.";
  };

  const handleCalculateRisk = () => {
    const risk = calculateRisk();
    setRiskMessage(risk); // Update the risk message state
  };

  return (
    <div className="uterus-container">
      <h1>Uterine Health and Risk Evaluation Questionnaire</h1>
      <form>
       {/* Question 1 */}
       <div className="question">
          <p>1. Do you experience unusual symptom such as pelvic pain?</p>
          <label><input type="radio" name="q1" onChange={() => handleAnswerChange(0, 0)} /> No symptoms </label>
          <label><input type="radio" name="q1" onChange={() => handleAnswerChange(0, 2)} /> Mild symptoms</label>
          <label><input type="radio" name="q1" onChange={() => handleAnswerChange(0, 4)} /> Persistent symptoms </label>
          <label><input type="radio" name="q1" onChange={() => handleAnswerChange(0, 6)} /> Severe symptoms</label>
        </div>
        
        {/* Question 3 */}
 <div className="question">
  <p>2. Is your menstrual cycle regular?</p>
  <label><input type="radio" name="q3" onChange={() => handleAnswerChange(2, 0)} /> Always regular </label>
  <label><input type="radio" name="q3" onChange={() => handleAnswerChange(2, 2)} /> Mostly regular </label>
  <label><input type="radio" name="q3" onChange={() => handleAnswerChange(2, 4)} /> Occasionally irregular </label>
  <label><input type="radio" name="q3" onChange={() => handleAnswerChange(2, 6)} /> Frequently irregular </label>
 </div>

         {/* Question 1 */}
         <div className="question">
          <p>3. Do you experience any unusual discharge or interventional bleeding ?</p>
          <label><input type="radio" name="q1" onChange={() => handleAnswerChange(0, 0)} /> No symptoms </label>
          <label><input type="radio" name="q1" onChange={() => handleAnswerChange(0, 2)} /> Mild symptoms </label>
          <label><input type="radio" name="q1" onChange={() => handleAnswerChange(0, 4)} /> Persistent symptoms </label>
          <label><input type="radio" name="q1" onChange={() => handleAnswerChange(0, 6)} /> Severe symptoms </label>
        </div>

        {/* Question 2 */}
        <div className="question">
          <p>4. Do you notice any changes in your abdomen, such as swelling or bloating unrelated to digestion?</p>
          <label><input type="radio" name="q2" onChange={() => handleAnswerChange(1, 0)} /> No noticeable changes </label>
          <label><input type="radio" name="q2" onChange={() => handleAnswerChange(1, 2)} /> Occasional bloating</label>
          <label><input type="radio" name="q2" onChange={() => handleAnswerChange(1, 4)} /> Persistent bloating or mild swelling</label>
          <label><input type="radio" name="q2" onChange={() => handleAnswerChange(1, 6)} /> Severe swelling or bloating with noticeable weight changes </label>
        </div>

        {/* Question 3 */}
        <div className="question">
          <p>5. If you experience the above symptoms, do you also feel fatigue, weight loss, or difficulty urinating?</p>
          <label><input type="radio" name="q3" onChange={() => handleAnswerChange(2, 0)} /> No additional symptoms</label>
          <label><input type="radio" name="q3" onChange={() => handleAnswerChange(2, 2)} /> Mild fatigue or occasional urinary issues</label>
          <label><input type="radio" name="q3" onChange={() => handleAnswerChange(2, 4)} /> Persistent fatigue or frequent urinary issues </label>
          <label><input type="radio" name="q3" onChange={() => handleAnswerChange(2, 6)} /> Significant fatigue or severe urinary difficulty </label>
        </div>

        {/* Question 4 */}
<div className="question">
  <p>6. Do you have a family history of uterine, ovarian, or other reproductive cancers?</p>
  <label><input type="radio" name="q4" onChange={() => handleAnswerChange(3, 0)} /> No family history </label>
  <label><input type="radio" name="q4" onChange={() => handleAnswerChange(3, 2)} /> Distant relatives with cancer</label>
  <label><input type="radio" name="q4" onChange={() => handleAnswerChange(3, 4)} /> Immediate family member diagnosed after age 50 </label>
  <label><input type="radio" name="q4" onChange={() => handleAnswerChange(3, 6)} /> Immediate family member diagnosed before age 50 or multiple family members </label>
</div>



{/* Question 7 */}
<div className="question">
  <p>7. Do you consume alcohol or smoke regularly?</p>
  <label><input type="radio" name="q7" onChange={() => handleAnswerChange(6, 0)} /> No, or rarely</label>
  <label><input type="radio" name="q7" onChange={() => handleAnswerChange(6, 2)} /> Occasionally (light drinking or smoking) </label>
  <label><input type="radio" name="q7" onChange={() => handleAnswerChange(6, 4)} /> Regularly (4-7 drinks per week or daily smoking) </label>
  <label><input type="radio" name="q7" onChange={() => handleAnswerChange(6, 6)} /> Excessively (more than 7 drinks per week or heavy smoking) </label>
</div>

{/* Question 8 */}
<div className="question">
  <p>8. What is your BMI (Body Mass Index) or weight status?</p>
  <label><input type="radio" name="q8" onChange={() => handleAnswerChange(7, 0)} /> Healthy weight (BMI: 18.5-24.9) </label>
  <label><input type="radio" name="q8" onChange={() => handleAnswerChange(7, 2)} /> Slightly overweight (BMI: 25-29.9) </label>
  <label><input type="radio" name="q8" onChange={() => handleAnswerChange(7, 4)} /> Obese (BMI: 30-34.9) </label>
  <label><input type="radio" name="q8" onChange={() => handleAnswerChange(7, 6)} /> Severely obese (BMI: 35+) </label>
</div>
{/* Button to Calculate Risk */}
<button
          type="button"
          className="risk-button"
          onClick={handleCalculateRisk}
        >
          Calculate Risk
        </button>
      </form>

      {/* Display the Risk Result */}
      {riskMessage && (
        <div className="risk-message">
          <h2>Risk Assessment Result</h2>
          <p>{riskMessage}</p>
        </div>
      )}
    </div>
  );
};

export default Uterus;
