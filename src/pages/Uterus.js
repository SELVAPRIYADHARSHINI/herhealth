import React, { useState } from 'react';
import './Uterus.css';

const Uterus = () => {
  const [scores, setScores] = useState(Array(10).fill(0));

  const handleAnswerChange = (questionIndex, score) => {
    const updatedScores = [...scores];
    updatedScores[questionIndex] = score;
    setScores(updatedScores);
  };

  const calculateRisk = () => {
    const totalScore = scores.reduce((sum, score) => sum + score, 0);
    if (totalScore <= 15) return "Low Risk: Minimal risk factors. Continue regular health check-ups and maintain healthy habits.";
    if (totalScore <= 35) return "Moderate Risk: Some risk factors present. Consult a healthcare provider about screenings or preventive measures.";
    return "High Risk: Multiple risk factors present. Seek a detailed medical assessment and develop a personalized prevention strategy with a doctor.";
  };

  return (
    <div className="uterus-container">
      <h1>Uterine Health and Risk Evaluation Questionnaire</h1>
      <form>
        {/* Question 1 */}
        <div className="question">
          <p>1. Do you experience unusual symptoms such as pelvic pain, abnormal bleeding, or unusual discharge?</p>
          <label><input type="radio" name="q1" onChange={() => handleAnswerChange(0, 0)} /> No symptoms (0 points)</label>
          <label><input type="radio" name="q1" onChange={() => handleAnswerChange(0, 2)} /> Mild symptoms (2 points)</label>
          <label><input type="radio" name="q1" onChange={() => handleAnswerChange(0, 4)} /> Persistent symptoms (4 points)</label>
          <label><input type="radio" name="q1" onChange={() => handleAnswerChange(0, 6)} /> Severe symptoms (6 points)</label>
        </div>

        {/* Question 2 */}
        <div className="question">
          <p>2. Do you notice any changes in your abdomen, such as swelling or bloating unrelated to digestion?</p>
          <label><input type="radio" name="q2" onChange={() => handleAnswerChange(1, 0)} /> No noticeable changes (0 points)</label>
          <label><input type="radio" name="q2" onChange={() => handleAnswerChange(1, 2)} /> Occasional bloating (2 points)</label>
          <label><input type="radio" name="q2" onChange={() => handleAnswerChange(1, 4)} /> Persistent bloating or mild swelling (4 points)</label>
          <label><input type="radio" name="q2" onChange={() => handleAnswerChange(1, 6)} /> Severe swelling or bloating with noticeable weight changes (6 points)</label>
        </div>

        {/* Question 3 */}
        <div className="question">
          <p>3. If you experience the above symptoms, do you also feel fatigue, weight loss, or difficulty urinating?</p>
          <label><input type="radio" name="q3" onChange={() => handleAnswerChange(2, 0)} /> No additional symptoms (0 points)</label>
          <label><input type="radio" name="q3" onChange={() => handleAnswerChange(2, 2)} /> Mild fatigue or occasional urinary issues (2 points)</label>
          <label><input type="radio" name="q3" onChange={() => handleAnswerChange(2, 4)} /> Persistent fatigue or frequent urinary issues (4 points)</label>
          <label><input type="radio" name="q3" onChange={() => handleAnswerChange(2, 6)} /> Significant fatigue or severe urinary difficulty (6 points)</label>
        </div>

        {/* Question 4 */}
<div className="question">
  <p>4. Do you have a family history of uterine, ovarian, or other reproductive cancers?</p>
  <label><input type="radio" name="q4" onChange={() => handleAnswerChange(3, 0)} /> No family history (0 points)</label>
  <label><input type="radio" name="q4" onChange={() => handleAnswerChange(3, 2)} /> Distant relatives with cancer (2 points)</label>
  <label><input type="radio" name="q4" onChange={() => handleAnswerChange(3, 4)} /> Immediate family member diagnosed after age 50 (4 points)</label>
  <label><input type="radio" name="q4" onChange={() => handleAnswerChange(3, 6)} /> Immediate family member diagnosed before age 50 or multiple family members (6 points)</label>
</div>

{/* Question 5 */}
<div className="question">
  <p>5. Have you ever been diagnosed with uterine conditions (e.g., fibroids, endometriosis, hyperplasia)?</p>
  <label><input type="radio" name="q5" onChange={() => handleAnswerChange(4, 0)} /> No history of uterine conditions (0 points)</label>
  <label><input type="radio" name="q5" onChange={() => handleAnswerChange(4, 2)} /> Benign conditions (2 points)</label>
  <label><input type="radio" name="q5" onChange={() => handleAnswerChange(4, 4)} /> Precancerous conditions (4 points)</label>
  <label><input type="radio" name="q5" onChange={() => handleAnswerChange(4, 6)} /> Previously diagnosed with uterine cancer (6 points)</label>
</div>

{/* Question 6 */}
<div className="question">
  <p>6. What is your age of menopause (if applicable)?</p>
  <label><input type="radio" name="q6" onChange={() => handleAnswerChange(5, 0)} /> Early menopause (before age 45) (0 points)</label>
  <label><input type="radio" name="q6" onChange={() => handleAnswerChange(5, 2)} /> Normal menopause (45-54 years) (2 points)</label>
  <label><input type="radio" name="q6" onChange={() => handleAnswerChange(5, 4)} /> Late menopause (after age 54) (4 points)</label>
  <label><input type="radio" name="q6" onChange={() => handleAnswerChange(5, 6)} /> Still menstruating after age 60 (6 points)</label>
</div>

{/* Question 7 */}
<div className="question">
  <p>7. Do you consume alcohol or smoke regularly?</p>
  <label><input type="radio" name="q7" onChange={() => handleAnswerChange(6, 0)} /> No, or rarely (0 points)</label>
  <label><input type="radio" name="q7" onChange={() => handleAnswerChange(6, 2)} /> Occasionally (light drinking or smoking) (2 points)</label>
  <label><input type="radio" name="q7" onChange={() => handleAnswerChange(6, 4)} /> Regularly (4-7 drinks per week or daily smoking) (4 points)</label>
  <label><input type="radio" name="q7" onChange={() => handleAnswerChange(6, 6)} /> Excessively (more than 7 drinks per week or heavy smoking) (6 points)</label>
</div>

{/* Question 8 */}
<div className="question">
  <p>8. What is your BMI (Body Mass Index) or weight status?</p>
  <label><input type="radio" name="q8" onChange={() => handleAnswerChange(7, 0)} /> Healthy weight (BMI: 18.5-24.9) (0 points)</label>
  <label><input type="radio" name="q8" onChange={() => handleAnswerChange(7, 2)} /> Slightly overweight (BMI: 25-29.9) (2 points)</label>
  <label><input type="radio" name="q8" onChange={() => handleAnswerChange(7, 4)} /> Obese (BMI: 30-34.9) (4 points)</label>
  <label><input type="radio" name="q8" onChange={() => handleAnswerChange(7, 6)} /> Severely obese (BMI: 35+) (6 points)</label>
</div>

{/* Question 9 */}
<div className="question">
  <p>9. Do you engage in regular physical activity?</p>
  <label><input type="radio" name="q9" onChange={() => handleAnswerChange(8, 0)} /> Yes, 150 minutes or more per week (0 points)</label>
  <label><input type="radio" name="q9" onChange={() => handleAnswerChange(8, 2)} /> Some, but less than 150 minutes per week (2 points)</label>
  <label><input type="radio" name="q9" onChange={() => handleAnswerChange(8, 4)} /> Rarely exercise (4 points)</label>
  <label><input type="radio" name="q9" onChange={() => handleAnswerChange(8, 6)} /> Almost no physical activity (6 points)</label>
</div>

{/* Question 10 */}
<div className="question">
  <p>10. Have you used hormone replacement therapy (HRT) or birth control pills for a long duration?</p>
  <label><input type="radio" name="q10" onChange={() => handleAnswerChange(9, 0)} /> Never used HRT or birth control pills (0 points)</label>
  <label><input type="radio" name="q10" onChange={() => handleAnswerChange(9, 2)} /> Used for less than 5 years (2 points)</label>
  <label><input type="radio" name="q10" onChange={() => handleAnswerChange(9, 4)} /> Used for 5-10 years (4 points)</label>
  <label><input type="radio" name="q10" onChange={() => handleAnswerChange(9, 6)} /> Used for more than 10 years (6 points)</label>
</div>

        <button type="button" className="risk-button" onClick={() => alert(calculateRisk())}>
          Calculate Risk
        </button>
      </form>
    </div>
  );
};

export default Uterus;
