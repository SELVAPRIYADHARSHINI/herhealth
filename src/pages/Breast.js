import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Breast.css";

const Breast = () => {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState(Array(12).fill(null));

  const handleAnswerChange = (questionIndex, weight) => {
    const updatedAnswers = [...answers];
    updatedAnswers[questionIndex] = weight;

    setAnswers(updatedAnswers);
    const totalScore = updatedAnswers.reduce((acc, curr) => acc + (curr || 0), 0);
    setScore(totalScore);
  };

  const evaluateRisk = () => {
    if (score <= 15) {
      alert("Low Risk: Minimal risk factors. Continue with regular self-checks and maintain healthy habits.");
    } else if (score <= 35) {
      alert("Moderate Risk: Some risk factors present. Discuss with a healthcare provider about further screenings or preventive measures.");
    } else {
      alert("High Risk: Multiple risk factors present. A detailed medical assessment and personalized prevention strategy are strongly recommended.");
    }
  };

  return (
    <div className="breast-container">
      <h1>Breast Health and Risk Evaluation Questionnaire</h1>
      <form>
        {/* Question 1 */}
        <div className="question">
          <p>1. Do you notice any unusual changes in your breasts, such as lumps, changes in skin texture or color, inverted nipple position, or unusual discharge from the nipple?</p>
          <label><input type="radio" name="q1" onChange={() => handleAnswerChange(0, 0)} /> No changes (0 points)</label>
          <label><input type="radio" name="q1" onChange={() => handleAnswerChange(0, 2)} /> Mild changes (2 points)</label>
          <label><input type="radio" name="q1" onChange={() => handleAnswerChange(0, 4)} /> Persistent changes (4 points)</label>
          <label><input type="radio" name="q1" onChange={() => handleAnswerChange(0, 6)} /> Severe changes (6 points)</label>
        </div>

        {/* Question 2 */}
        <div className="question">
          <p>2. Do you experience any unexplained breast pain, apart from your menstrual cycle?</p>
          <label><input type="radio" name="q2" onChange={() => handleAnswerChange(1, 0)} /> No pain (0 points)</label>
          <label><input type="radio" name="q2" onChange={() => handleAnswerChange(1, 2)} /> Mild pain (2 points)</label>
          <label><input type="radio" name="q2" onChange={() => handleAnswerChange(1, 4)} /> Moderate pain (4 points)</label>
          <label><input type="radio" name="q2" onChange={() => handleAnswerChange(1, 6)} /> Severe or constant pain (6 points)</label>
        </div>

        {/* Question 3 */}
        <div className="question">
          <p>3. If you have any of the above symptoms (lumps, skin texture/color changes, nipple inversion, discharge, or pain), do you also experience unexplained fatigue or weight loss?</p>
          <label><input type="radio" name="q3" onChange={() => handleAnswerChange(2, 0)} /> No fatigue or weight loss (0 points)</label>
          <label><input type="radio" name="q3" onChange={() => handleAnswerChange(2, 2)} /> Mild fatigue or slight weight loss (2 points)</label>
          <label><input type="radio" name="q3" onChange={() => handleAnswerChange(2, 4)} /> Persistent fatigue or noticeable weight loss (4 points)</label>
          <label><input type="radio" name="q3" onChange={() => handleAnswerChange(2, 6)} /> Severe fatigue or significant weight loss (6 points)</label>
        </div>

        {/* Question 4 */}
        <div className="question">
          <p>4. Do you have a family history of breast cancer or other cancers (e.g., ovarian, colorectal)?</p>
          <label><input type="radio" name="q4" onChange={() => handleAnswerChange(3, 0)} /> No family history (0 points)</label>
          <label><input type="radio" name="q4" onChange={() => handleAnswerChange(3, 2)} /> Distant relatives with cancer (2 points)</label>
          <label><input type="radio" name="q4" onChange={() => handleAnswerChange(3, 4)} /> Immediate family diagnosed after age 50 (4 points)</label>
          <label><input type="radio" name="q4" onChange={() => handleAnswerChange(3, 6)} /> Immediate family diagnosed before age 50 or multiple family members (6 points)</label>
        </div>
                 {/* Question 5 */}
        <div className="question">
          <p>5. Have you been diagnosed with any breast conditions (e.g., atypical hyperplasia, cysts, precancerous conditions)?</p>
          <label><input type="radio" name="q5" onChange={() => handleAnswerChange(4, 0)} /> No history of breast conditions (0 points)</label>
          <label><input type="radio" name="q5" onChange={() => handleAnswerChange(4, 2)} /> Benign breast conditions (2 points)</label>
          <label><input type="radio" name="q5" onChange={() => handleAnswerChange(4, 4)} /> Atypical hyperplasia or other precancerous conditions (4 points)</label>
          <label><input type="radio" name="q5" onChange={() => handleAnswerChange(4, 6)} /> Previously diagnosed with breast cancer (6 points)</label>
        </div>

        {/* Question 6 */}
        <div className="question">
          <p>6. What is your age of menarche (first period)?</p>
          <label><input type="radio" name="q6" onChange={() => handleAnswerChange(5, 0)} /> 13-15 years (0 points)</label>
          <label><input type="radio" name="q6" onChange={() => handleAnswerChange(5, 2)} /> Before age 13 (2 points)</label>
          <label><input type="radio" name="q6" onChange={() => handleAnswerChange(5, 4)} /> Before age 11 (4 points)</label>
          <label><input type="radio" name="q6" onChange={() => handleAnswerChange(5, 6)} /> Before age 10 (6 points)</label>
        </div>

        {/* Question 7 */}
        <div className="question">
          <p>7. Have you experienced menopause, and if so, at what age?</p>
          <label><input type="radio" name="q7" onChange={() => handleAnswerChange(6, 0)} /> Early menopause (before age 45) (0 points)</label>
          <label><input type="radio" name="q7" onChange={() => handleAnswerChange(6, 2)} /> Normal menopause (45-54 years) (2 points)</label>
          <label><input type="radio" name="q7" onChange={() => handleAnswerChange(6, 4)} /> Late menopause (after age 54) (4 points)</label>
          <label><input type="radio" name="q7" onChange={() => handleAnswerChange(6, 6)} /> Still menstruating after age 60 (6 points)</label>
        </div>

        {/* Question 8 */}
        <div className="question">
          <p>8. Do you consume alcohol regularly?</p>
          <label><input type="radio" name="q8" onChange={() => handleAnswerChange(7, 0)} /> No, or rarely (less than 1 drink per week) (0 points)</label>
          <label><input type="radio" name="q8" onChange={() => handleAnswerChange(7, 2)} /> Occasionally (1-3 drinks per week) (2 points)</label>
          <label><input type="radio" name="q8" onChange={() => handleAnswerChange(7, 4)} /> Regularly (4-7 drinks per week) (4 points)</label>
          <label><input type="radio" name="q8" onChange={() => handleAnswerChange(7, 6)} /> Excessively (more than 7 drinks per week) (6 points)</label>
        </div>

        {/* Question 9 */}
        <div className="question">
          <p>9. What is your BMI (Body Mass Index) or weight status?</p>
          <label><input type="radio" name="q9" onChange={() => handleAnswerChange(8, 0)} /> Healthy weight (BMI: 18.5-24.9) (0 points)</label>
          <label><input type="radio" name="q9" onChange={() => handleAnswerChange(8, 2)} /> Slightly overweight (BMI: 25-29.9) (2 points)</label>
          <label><input type="radio" name="q9" onChange={() => handleAnswerChange(8, 4)} /> Obese (BMI: 30-34.9) (4 points)</label>
          <label><input type="radio" name="q9" onChange={() => handleAnswerChange(8, 6)} /> Severely obese (BMI: 35+) (6 points)</label>
        </div>

        {/* Question 10 */}
        <div className="question">
          <p>10. Do you engage in regular physical activity?</p>
          <label><input type="radio" name="q10" onChange={() => handleAnswerChange(9, 0)} /> Yes, 150 minutes or more per week (0 points)</label>
          <label><input type="radio" name="q10" onChange={() => handleAnswerChange(9, 2)} /> Some, but less than 150 minutes per week (2 points)</label>
          <label><input type="radio" name="q10" onChange={() => handleAnswerChange(9, 4)} /> Rarely exercise (4 points)</label>
          <label><input type="radio" name="q10" onChange={() => handleAnswerChange(9, 6)} /> Almost no physical activity (6 points)</label>
        </div>

        {/* Question 11 */}
        <div className="question">
          <p>11. Have you used hormone replacement therapy (HRT) or birth control pills for a long duration?</p>
          <label><input type="radio" name="q11" onChange={() => handleAnswerChange(10, 0)} /> Never used HRT or birth control pills (0 points)</label>
          <label><input type="radio" name="q11" onChange={() => handleAnswerChange(10, 2)} /> Used for less than 5 years (2 points)</label>
          <label><input type="radio" name="q11" onChange={() => handleAnswerChange(10, 4)} /> Used for 5-10 years (4 points)</label>
          <label><input type="radio" name="q11" onChange={() => handleAnswerChange(10, 6)} /> Used for more than 10 years (6 points)</label>
        </div>

        {/* Question 12 */}
        <div className="question">
          <p>12. Have you had children, and at what age was your first pregnancy?</p>
          <label><input type="radio" name="q12" onChange={() => handleAnswerChange(11, 0)} /> First pregnancy before age 30 (0 points)</label>
          <label><input type="radio" name="q12" onChange={() => handleAnswerChange(11, 2)} /> First pregnancy between ages 30-35 (2 points)</label>
          <label><input type="radio" name="q12" onChange={() => handleAnswerChange(11, 4)} /> First pregnancy after age 35 (4 points)</label>
          <label><input type="radio" name="q12" onChange={() => handleAnswerChange(11, 6)} /> Never had children (6 points)</label>
        </div>

       
        <div className="result-section">
          <button type="button" onClick={evaluateRisk}>Evaluate Risk</button>
          <p>Total Score: {score}</p>
        </div>
      </form>
    </div>
  );
};

export default Breast;
