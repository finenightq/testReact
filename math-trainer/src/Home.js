import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Добро пожаловать в Математическую тренировку!</h2>
      <p>Выберите режим:</p>
      <Link to="/training"><button>Режим обучения</button></Link>
      <Link to="/exam"><button>Режим экзамена</button></Link>
      <Link to="/progress"><button>Ваш прогресс</button></Link>
    </div>
  );
};

export default Home;