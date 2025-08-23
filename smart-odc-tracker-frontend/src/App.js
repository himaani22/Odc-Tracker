// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home'; // Your main page (earlier App content)
import Tracking from './pages/Tracking';
import Optimization from './pages/Optimization'; // Ensure file name is correct
import './styles/styles.css';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/optimization" element={<Optimization />} />
        {/* Add more routes like /permit, /alerts, etc. */}
      </Routes>

      <Footer />
    </Router>
    
  );
}

export default App;
