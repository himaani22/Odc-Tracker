// src/components/CargoTracker.js
import React, { useState } from 'react';

const CargoTracker = () => {
    const [cargoId, setCargoId] = useState('');
    const [status, setStatus] = useState(null);

    const handleTrack = () => {
        // Simulate a cargo tracking request (you can integrate API here)
        setStatus('In Transit');
    };

    return (
        <div className="cargo-tracker">
            <h2>Track Your Cargo</h2>
            <input
                type="text"
                value={cargoId}
                onChange={(e) => setCargoId(e.target.value)}
                placeholder="Enter Cargo ID"
            />
            <button onClick={handleTrack}>Track</button>

            {status && <p>Status: {status}</p>}
        </div>
    );
};

export default CargoTracker;
