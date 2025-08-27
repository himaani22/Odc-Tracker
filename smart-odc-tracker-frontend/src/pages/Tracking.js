import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import {
  unsafeZones,
  allowedRoute,
  isInsideCircle,
  isInsidePolygon
} from './safetyalert';

const Tracking = () => {
  const [alertMessage, setAlertMessage] = useState('');

  const checkSafetyAlerts = () => {
    const simulatedLocation = {
      lat: 19.076, // Mumbai for demo
      lng: 72.8777
    };

    // Check for unsafe zone
    for (const zone of unsafeZones) {
      if (isInsideCircle(simulatedLocation, zone)) {
        setAlertMessage("⚠️ Alert: Vehicle in UNSAFE PIT ZONE!");
        return;
      }
    }

    // Check if outside route
    if (!isInsidePolygon(simulatedLocation, allowedRoute)) {
      setAlertMessage("🚨 Alert: Vehicle is OUT OF ROUTE!");
      return;
    }

    // All good
    setAlertMessage("✅ Vehicle is on a safe route.");
  };

  return (
    <>
      

      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '20px' }}>Live Vehicle Tracking</h2>

        {/* Alert box */}
        {alertMessage && (
          <div
            style={{
              backgroundColor: alertMessage.includes("✅") ? 'green' : 'red',
              color: 'white',
              fontWeight: 'bold',
              padding: '12px',
              borderRadius: '10px',
              marginBottom: '20px',
            }}
          >
            {alertMessage}
          </div>
        )}

        <iframe
          title="ODC Tracking Map"
          width="90%"
          height="500"
          frameBorder="0"
          style={{ border: 0, borderRadius: '12px' }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609821858!2d72.7410994764735!3d19.082197838091595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63a3b7aa7c3%3A0x9b6df9e6c3e04d97!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1684530838201!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <p><strong>From:</strong> New Delhi</p>
          <p><strong>To:</strong> Mumbai</p>
          <p><strong>Vehicle ID:</strong> ODC-TRUCK-421</p>
          <p><strong>Driver:</strong> Rajeev Kumar</p>
          <p><strong>Status:</strong> In Transit (Static View)</p>
        </div>
      </div>

      
    </>
  );
};

export default Tracking;
