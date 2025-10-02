// components/SolutionCard.jsx
import React from 'react';
import './SolutionCard.css';

export default function SolutionCard({ icon, title, description }) {
  return (
    <div className="solution-card">
      <div className="card-icon">{icon}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
}
