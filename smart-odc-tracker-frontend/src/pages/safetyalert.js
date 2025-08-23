import React from 'react';
const SafetyAlerts = () => <h2>View alerts for road hazards and weather conditions.</h2>;
export default SafetyAlerts;

// src/pages/safetyalert.js

export const unsafeZones = [
  { lat: 28.7041, lng: 77.1025, radius: 500 }, // example pit zone
  { lat: 19.076, lng: 72.8777, radius: 300 }
];

export const allowedRoute = [
  { lat: 28.7, lng: 77.0 },
  { lat: 28.8, lng: 77.0 },
  { lat: 28.8, lng: 77.2 },
  { lat: 28.7, lng: 77.2 }
];

export function isInsideCircle(point, circle) {
  const R = 6371000;
  const toRad = (x) => (x * Math.PI) / 180;
  const dLat = toRad(circle.lat - point.lat);
  const dLng = toRad(circle.lng - point.lng);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(point.lat)) *
      Math.cos(toRad(circle.lat)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;

  return distance <= circle.radius;
}

export function isInsidePolygon(point, polygon) {
  let x = point.lat, y = point.lng;
  let inside = false;

  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    let xi = polygon[i].lat, yi = polygon[i].lng;
    let xj = polygon[j].lat, yj = polygon[j].lng;

    let intersect = yi > y !== yj > y &&
      x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;

    if (intersect) inside = !inside;
  }

  return inside;
}
