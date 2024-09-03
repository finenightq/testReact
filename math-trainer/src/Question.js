import React, { useState } from 'react';

const Question = ({ question, onAnswer }) => {
  const [userAnswer, setUserAnswer] = useState('');

  const handleSubmit = () => {
    const isCorrect = parseFloat(userAnswer) === question.answer;
    onAnswer(isCorrect);
    setUserAnswer('');
  };

  return (
    <div>
      <p>{question.question}</p>
      <input
        type="text"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        placeholder="Ваш ответ"
      />
      <button onClick={handleSubmit}>Проверить</button>
    </div>
  );
};

export default Question;