import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Breast.css";

const Breast = () => {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState(Array(7).fill(null)); // Adjusted for 7 questions
  const [resultMessage, setResultMessage] = useState("");

  const handleAnswerChange = (questionIndex, weight) => {
    const updatedAnswers = [...answers];
    updatedAnswers[questionIndex] = weight;

    setAnswers(updatedAnswers);
    const totalScore = updatedAnswers.reduce((acc, curr) => acc + (curr || 0), 0);
    setScore(totalScore);
  };

  const evaluateRisk = () => {
    if (score <= 15) {
      setResultMessage(
        "Low Risk: Minimal risk factors. Continue with regular self-checks and maintain healthy habits."
      );
    } else if (score <= 35) {
      setResultMessage(
        "Moderate Risk: Some risk factors present. Discuss with a healthcare provider about further screenings or preventive measures."
      );
    } else {
      setResultMessage(
        "High Risk: Multiple risk factors present. A detailed medical assessment and personalized prevention strategy are strongly recommended."
      );
    }
  };

  return (
    <div className="breast-container">
      <h1>Breast Health and Risk Evaluation Questionnaire</h1>
      <form>
        {/* Question 1 */}
        <div className="question">
          <p>1. Do you notice any unusual changes in your breasts such as lumps? </p>
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
          <p>1. Do you notice any unusual changes in your breasts such as lumps? </p>
          <label><input type="radio" name="q1" onChange={() => handleAnswerChange(0, 0)} /> No changes (0 points)</label>
          <label><input type="radio" name="q1" onChange={() => handleAnswerChange(0, 2)} /> Mild changes (2 points)</label>
          <label><input type="radio" name="q1" onChange={() => handleAnswerChange(0, 4)} /> Persistent changes (4 points)</label>
          <label><input type="radio" name="q1" onChange={() => handleAnswerChange(0, 6)} /> Severe changes (6 points)</label>
        </div>

           {/* Question 4 */}
       <div className="question">
          <p>1. Do you notice any unusual changes in your breasts such as lumps? </p>
          <label><input type="radio" name="q1" onChange={() => handleAnswerChange(0, 0)} /> No changes (0 points)</label>
          <label><input type="radio" name="q1" onChange={() => handleAnswerChange(0, 2)} /> Mild changes (2 points)</label>
          <label><input type="radio" name="q1" onChange={() => handleAnswerChange(0, 4)} /> Persistent changes (4 points)</label>
          <label><input type="radio" name="q1" onChange={() => handleAnswerChange(0, 6)} /> Severe changes (6 points)</label>
        </div>

        {/* Question 5 */}
        <div className="question">
          <p>3. If you have any of the above symptoms (lumps, skin texture/color changes, nipple inversion, discharge, or pain), do you also experience unexplained fatigue or weight loss?</p>
          <label><input type="radio" name="q3" onChange={() => handleAnswerChange(2, 0)} /> No fatigue or weight loss (0 points)</label>
          <label><input type="radio" name="q3" onChange={() => handleAnswerChange(2, 2)} /> Mild fatigue or slight weight loss (2 points)</label>
          <label><input type="radio" name="q3" onChange={() => handleAnswerChange(2, 4)} /> Persistent fatigue or noticeable weight loss (4 points)</label>
          <label><input type="radio" name="q3" onChange={() => handleAnswerChange(2, 6)} /> Severe fatigue or significant weight loss (6 points)</label>
        </div>

        {/* Question 6 */}
        <div className="question">
          <p>4. Do you have a family history of breast cancer or other cancers (e.g., ovarian, colorectal)?</p>
          <label><input type="radio" name="q4" onChange={() => handleAnswerChange(3, 0)} /> No family history (0 points)</label>
          <label><input type="radio" name="q4" onChange={() => handleAnswerChange(3, 2)} /> Distant relatives with cancer (2 points)</label>
          <label><input type="radio" name="q4" onChange={() => handleAnswerChange(3, 4)} /> Immediate family diagnosed after age 50 (4 points)</label>
          <label><input type="radio" name="q4" onChange={() => handleAnswerChange(3, 6)} /> Immediate family diagnosed before age 50 or multiple family members (6 points)</label>
        </div>
      

       
        {/* Question 7 */}
        <div className="question">
          <p>2. Do you experience any pelvic pain</p>
          <label><input type="radio" name="q2" onChange={() => handleAnswerChange(1, 0)} /> No pain (0 points)</label>
          <label><input type="radio" name="q2" onChange={() => handleAnswerChange(1, 2)} /> Mild pain (2 points)</label>
          <label><input type="radio" name="q2" onChange={() => handleAnswerChange(1, 4)} /> Moderate pain (4 points)</label>
          <label><input type="radio" name="q2" onChange={() => handleAnswerChange(1, 6)} /> Severe or constant pain (6 points)</label>
        </div>
        {/* Calculate Risk Button */}
        <button
          type="button"
          className="risk-button"
          onClick={evaluateRisk}
        >
          Calculate Risk
        </button>
      </form>

      {/* Display Risk Result */}
      {resultMessage && (
        <div className="risk-message">
          <h2>Risk Assessment Result</h2>
          <p>{resultMessage}</p>
        </div>
      )}
    </div>
  );
};

export default Breast;
