import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import TrainingMode from './TrainingMode';
import ExamMode from './ExamMode';
import Progress from './Progress';
import './App.css';

const App = () => {
  const [progress, setProgress] = useState([]);

  const updateProgress = (newRecord) => {
    setProgress([...progress, newRecord]);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/training" element={<TrainingMode updateProgress={updateProgress} />} />
          <Route path="/exam" element={<ExamMode updateProgress={updateProgress} />} />
          <Route path="/progress" element={<Progress progress={progress} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;