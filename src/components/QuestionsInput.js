import React, { useState } from 'react';

function QuestionsInput({ onQuestionsChange }) {
  const [questions, setQuestions] = useState(Array(8).fill(''));

  function handleChange(event, index) {
    const newQuestions = [...questions];
    newQuestions[index] = event.target.value;
    setQuestions(newQuestions);
    onQuestionsChange(newQuestions);
  }

  return (
    <div>
      {questions.map((question, index) => (
        <div key={index}>
          <label htmlFor={`question${index + 1}`}>问题 {index + 1}：</label>
          <input
            type="text"
            id={`question${index + 1}`}
            value={question}
            onChange={(event) => handleChange(event, index)}
          />
        </div>
      ))}
    </div>
  );
}

export default QuestionsInput;
