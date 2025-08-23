// navbar.js
import { Link } from 'react-router-dom';
import React from 'react';
import './navbar.css';
import odcLogo from '../assets/odc_logo.jpg';

function Navbar({ onSafetyAlertCheck }) {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={odcLogo} alt="ODC Tracker Logo" />
        <span>ODC Tracker</span>
      </div>
      <ul className="nav-links">
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Who We Are
          </a>
        </li>
        <li><a href="#services">Services</a></li>
        <li><Link to="/tracking">Tracking</Link></li>
        <li><Link to="/optimization">Optimization</Link></li>
        <li><a href="#permit">Permit</a></li>
        
        <li>
          <a
            href="#alerts"
            onClick={(e) => {
              e.preventDefault();
              if (onSafetyAlertCheck) {
                onSafetyAlertCheck();
              }
            }}
          >
            Safety Alerts
          </a>
        </li>

        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
