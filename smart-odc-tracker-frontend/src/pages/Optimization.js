
// src/pages/Optimization.js
import React, { useState } from 'react';
import '../styles/styles.css';

function Optimization() {
  const [showResults, setShowResults] = useState(false);

  const handleOptimize = (e) => {
    e.preventDefault();
    setShowResults(true);
  };

  return (
    <div className="optimization-container">
      <h2 className="opt-title">AI-Powered Route Optimization</h2>
      <p className="opt-subtext">
        Our intelligent routing engine finds the fastest, safest, and most cost-effective paths by analyzing terrain, permits, weather, and real-time traffic data.
      </p>

      <form className="optimization-form" onSubmit={handleOptimize}>
        <input type="text" placeholder="Source Location" required />
        <input type="text" placeholder="Destination Location" required />
        <input type="number" placeholder="Load Weight (tons)" required />
        <select required>
          <option value="">Select Cargo Type</option>
          <option value="machinery">Heavy Machinery</option>
          <option value="windmill">Windmill Blade</option>
          <option value="container">Container</option>
        </select>
        <button type="submit">Optimize Route</button>
      </form>

      {showResults && (
        <div className="optimization-results">
          <h3>Suggested Route</h3>
          <ul>
            <li><strong>Route:</strong> NH48 via Jaipur, Vadodara</li>
            <li><strong>Distance:</strong> 1,150 km</li>
            <li><strong>Estimated Time:</strong> 32 hours</li>
            <li><strong>Estimated Cost:</strong> ₹6,000</li>
            <li><strong>Permit Required:</strong> Rajasthan, Gujarat</li>
          </ul>

          <h3>Before vs After Optimization</h3>
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Without Optimization</th>
                <th>With Optimization</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Distance (km)</td>
                <td>1,400</td>
                <td>1,150</td>
              </tr>
              <tr>
                <td>Time Taken</td>
                <td>40 hrs</td>
                <td>32 hrs</td>
              </tr>
              <tr>
                <td>Toll Cost</td>
                <td>₹7,500</td>
                <td>₹6,000</td>
              </tr>
              <tr>
                <td>Permit Delay Risk</td>
                <td>High</td>
                <td>Low</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Optimization;
