import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Progress = ({ progress }) => {
  console.log('Прогресс:', progress);

  if (progress.length === 0) {
    return <p>Нет данных для отображения прогресса.</p>;
  }

  const data = {
    labels: progress.map((_, index) => `Вопрос ${index + 1}`),
    datasets: [
      {
        label: 'Правильные ответы',
        data: progress.map(record => record.correct ? 1 : 0),
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  return (
    <div>
      <h2>Ваш прогресс</h2>
      <Line data={data} />
    </div>
  );
};

export default Progress;