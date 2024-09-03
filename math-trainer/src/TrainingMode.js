import React, { useState } from 'react';
import Question from './Question';

const TrainingMode = ({ updateProgress }) => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(generateQuestion());

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const newQuestion = generateQuestion();
    setCurrentQuestion(newQuestion);
    updateProgress({ mode: 'training', correct: isCorrect });
  };

  return (
    <div>
      <h2>Режим обучения</h2>
      <Question question={currentQuestion} onAnswer={handleAnswer} />
      <p>Ваш текущий счёт: {score}</p>
    </div>
  );
};

const generateQuestion = () => {
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);
  const operator = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)];
  const question = `${num1} ${operator} ${num2}`;
  const answer = eval(question).toFixed(2);
  return { question, answer: parseFloat(answer) };
};

export default TrainingMode;