import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Info from './pages/Info';
import Analyze from './pages/Analyze';
import Chatbot from './pages/Chatbot';

import Periods from './pages/Periods';
import Cancer from './pages/Cancer';
import Breast from './pages/Breast';
import Uterus from './pages/Uterus';
import Stress from './pages/Stress';

import PeriodsInfo from './pages/PeriodsInfo';
import CancerInfo from './pages/CancerInfo';
import StressInfo from './pages/StressInfo';

import './App.css';
import './styles/variables.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/info" element={<Info />} />
            <Route path="/analyze" element={<Analyze />} />
            <Route path="/chatbot" element={<Chatbot />} />

            {/* Disease Pages */}
            <Route path="/periods" element={<Periods />} />
            <Route path="/cancer" element={<Cancer />} />
            <Route path="/uterus" element={<Uterus />} />
            <Route path="/breast" element={<Breast />} />
            <Route path="/stress" element={<Stress />} />

            {/* Disease Details Pages */}
            <Route path="/periodsinfo" element={<PeriodsInfo />} />
            <Route path="/cancerinfo" element={<CancerInfo />} />
            <Route path="/stressinfo" element={<StressInfo />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
