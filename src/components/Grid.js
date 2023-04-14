import React, { useState } from 'react';

function Grid({ topic, questions, onAnswersChange }) {
  const [answers, setAnswers] = useState(Array(8).fill(''));

  function handleChange(event, index) {
    const newAnswers = [...answers];
    newAnswers[index] = event.target.value;
    setAnswers(newAnswers);
    onAnswersChange(newAnswers);
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
      {questions.map((question, index) => (
        <div key={index}>
          <h3>{question}</h3>
          <textarea
            value={answers[index]}
            onChange={(event) => handleChange(event, index)}
          />
        </div>
      ))}
      <div style={{ gridColumn: '2', gridRow: '2' }}>
        <h2>{topic}</h2>
      </div>
    </div>
  );
}

export default Grid;
