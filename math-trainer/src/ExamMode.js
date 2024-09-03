import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Question from './Question';
import './ExamMode.css';

const ExamMode = ({ updateProgress }) => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(generateQuestion());
  const [timer, setTimer] = useState(60);
  const [finished, setFinished] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (timer > 0) {
      const timerId = setInterval(() => setTimer(prevTimer => prevTimer - 1), 1000);
      return () => clearInterval(timerId);
    } else {
      setFinished(true);
    }
  }, [timer]);

  useEffect(() => {
    if (finished) {
      navigate('/progress');
    }
  }, [finished, navigate]);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const newQuestion = generateQuestion();
    setCurrentQuestion(newQuestion);
    updateProgress({ mode: 'exam', correct: isCorrect });
  };

  if (finished) {
    return <div><h2>Экзамен завершен! Ваш результат: {score}</h2></div>;
  }

  return (
    <div>
      <h2>Режим экзамена</h2>
      <p>Время: {timer} секунд</p>
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

export default ExamMode;