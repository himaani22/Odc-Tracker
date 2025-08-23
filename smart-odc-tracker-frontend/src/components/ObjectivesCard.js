import React from 'react';

function ObjectivesCard({ title, description, image }) {
  return (
    <div className="objective-card">
      <img src={image} alt={title} className="objective-img" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ObjectivesCard;
