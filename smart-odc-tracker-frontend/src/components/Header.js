import React from 'react';
import '../styles/styles.css';
import bgImage from '../assets/odc_bg.jpg';

const Header = () => {
  return (
    <header className="hero-section" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="overlay">
        <div className="hero-content">
          <h1>ODC Tracker & Route Optimizer</h1>
          <p>Real-time ODC transportation tracking powered by AI-based route planning.</p>
          <p>Automated permit validation & instant safety alerts for complete compliance.</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
