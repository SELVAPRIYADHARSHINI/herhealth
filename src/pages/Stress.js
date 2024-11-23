import React, { useState } from 'react';
import './Stress.css';

const Stress = () => {
  const [answers, setAnswers] = useState(new Array(10).fill(0));
  const [calculated, setCalculated] = useState(false);  // Added state to track if calculation is done

  // Handle answer changes
  const handleAnswerChange = (questionIndex, score) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = score;
    setAnswers(newAnswers);
  };

  // Reverse scoring for certain questions
  const getScore = (index) => {
    const score = answers[index];
    if (index === 3 || index === 4 || index === 6 || index === 7) {
      return 4 - score;  // Reverse scoring
    }
    return score;
  };

  // Calculate the total score
  const totalScore = answers.reduce((total, _, index) => total + getScore(index), 0);

  // Determine the stress level based on total score
  const getStressLevel = () => {
    if (totalScore <= 13) return 'Low Stress';
    if (totalScore <= 26) return 'Moderate Stress';
    return 'High Perceived Stress';
  };

  // Suggestion based on stress level
  const getSuggestion = () => {
    const stressLevel = getStressLevel();
    switch (stressLevel) {
      case 'Low Stress':
        return 'You are managing stress well! Keep maintaining a balanced lifestyle.';
      case 'Moderate Stress':
        return 'Consider practicing stress management techniques like meditation and exercise.';
      case 'High Perceived Stress':
        return 'It might be helpful to speak with a professional to address your stress levels.';
      default:
        return '';
    }
  };

  // Function to calculate and show results when button is clicked
  const handleCalculate = () => {
    setCalculated(true);  // Set calculated to true to display the result
  };

  return (
    <div className="stress-container">
      <h1>Perceived Stress Scale (PSS)</h1>
      <form>
        {/* Question 1 */}
        <div className="question">
          <p>1. In the last month, how often have you been upset because of something that happened unexpectedly?</p>
          {[...Array(5)].map((_, i) => (
            <label key={i}>
              <input
                type="radio"
                name="q1"
                value={i}
                onChange={() => handleAnswerChange(0, i)}
              />
              {['Never', 'Almost Never', 'Sometimes', 'Fairly Often', 'Very Often'][i]}
            </label>
          ))}
        </div>

        {/* Question 2 */}
        <div className="question">
          <p>2. In the last month, how often have you felt that you were unable to control the important things in your life?</p>
          {[...Array(5)].map((_, i) => (
            <label key={i}>
              <input
                type="radio"
                name="q2"
                value={i}
                onChange={() => handleAnswerChange(1, i)}
              />
              {['Never', 'Almost Never', 'Sometimes', 'Fairly Often', 'Very Often'][i]}
            </label>
          ))}
        </div>

        {/* Question 3 */}
        <div className="question">
          <p>3. In the last month, how often have you felt nervous and stressed?</p>
          {[...Array(5)].map((_, i) => (
            <label key={i}>
              <input
                type="radio"
                name="q3"
                value={i}
                onChange={() => handleAnswerChange(2, i)}
              />
              {['Never', 'Almost Never', 'Sometimes', 'Fairly Often', 'Very Often'][i]}
            </label>
          ))}
        </div>

        {/* Question 4 (Reverse Scored) */}
        <div className="question">
          <p>4. In the last month, how often have you felt confident about your ability to handle your personal problems?</p>
          {[...Array(5)].map((_, i) => (
            <label key={i}>
              <input
                type="radio"
                name="q4"
                value={i}
                onChange={() => handleAnswerChange(3, i)}
              />
              {['Never', 'Almost Never', 'Sometimes', 'Fairly Often', 'Very Often'][i]}
            </label>
          ))}
        </div>

        {/* Question 5 (Reverse Scored) */}
        <div className="question">
          <p>5. In the last month, how often have you felt that things were going your way?</p>
          {[...Array(5)].map((_, i) => (
            <label key={i}>
              <input
                type="radio"
                name="q5"
                value={i}
                onChange={() => handleAnswerChange(4, i)}
              />
              {['Never', 'Almost Never', 'Sometimes', 'Fairly Often', 'Very Often'][i]}
            </label>
          ))}
        </div>

        {/* Question 6 */}
        <div className="question">
          <p>6. In the last month, how often have you found that you could not cope with all the things that you had to do?</p>
          {[...Array(5)].map((_, i) => (
            <label key={i}>
              <input
                type="radio"
                name="q6"
                value={i}
                onChange={() => handleAnswerChange(5, i)}
              />
              {['Never', 'Almost Never', 'Sometimes', 'Fairly Often', 'Very Often'][i]}
            </label>
          ))}
        </div>

        {/* Question 7 (Reverse Scored) */}
        <div className="question">
          <p>7. In the last month, how often have you been able to control irritations in your life?</p>
          {[...Array(5)].map((_, i) => (
            <label key={i}>
              <input
                type="radio"
                name="q7"
                value={i}
                onChange={() => handleAnswerChange(6, i)}
              />
              {['Never', 'Almost Never', 'Sometimes', 'Fairly Often', 'Very Often'][i]}
            </label>
          ))}
        </div>

        {/* Question 8 (Reverse Scored) */}
        <div className="question">
          <p>8. In the last month, how often have you felt that you were on top of things?</p>
          {[...Array(5)].map((_, i) => (
            <label key={i}>
              <input
                type="radio"
                name="q8"
                value={i}
                onChange={() => handleAnswerChange(7, i)}
              />
              {['Never', 'Almost Never', 'Sometimes', 'Fairly Often', 'Very Often'][i]}
            </label>
          ))}
        </div>

        {/* Question 9 */}
        <div className="question">
          <p>9. In the last month, how often have you been angered because of things that happened that were outside of your control?</p>
          {[...Array(5)].map((_, i) => (
            <label key={i}>
              <input
                type="radio"
                name="q9"
                value={i}
                onChange={() => handleAnswerChange(8, i)}
              />
              {['Never', 'Almost Never', 'Sometimes', 'Fairly Often', 'Very Often'][i]}
            </label>
          ))}
        </div>

        {/* Question 10 */}
        <div className="question">
          <p>10. In the last month, how often have you felt difficulties were piling up so high that you could not overcome them?</p>
          {[...Array(5)].map((_, i) => (
            <label key={i}>
              <input
                type="radio"
                name="q10"
                value={i}
                onChange={() => handleAnswerChange(9, i)}
              />
              {['Never', 'Almost Never', 'Sometimes', 'Fairly Often', 'Very Often'][i]}
            </label>
          ))}
        </div>
      </form>

      {/* Calculate Button */}
      <button type="button" onClick={handleCalculate}>Calculate Risk</button>

      {/* Display Result Only After Calculation */}
      {calculated && (
        <div className="result">
          <p><strong>Total Score: </strong>{totalScore}</p>
          <p><strong>Stress Level: </strong>{getStressLevel()}</p>
          <p><strong>Suggestion: </strong>{getSuggestion()}</p>
        </div>
      )}
    </div>
  );
};

export default Stress;
