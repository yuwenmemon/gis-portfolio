import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import MainPage from './MainPage/MainPage';
import ResumePage from './ResumePage/ResumePage';
import ProjectPage from './ProjectPage/ProjectPage';
import Footer from './Footer/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/project/:projectId" element={<ProjectPage />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
