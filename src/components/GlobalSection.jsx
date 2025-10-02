import React from 'react';
import './GlobalSection.css';
import globe from '../clients/pngwing.com.png';

export default function GlobalSection() {
  return (
    <section className="global-section">
      <div className="global-container">
        <div className="global-text">
          <h2>Smart Vision is trusted globally</h2>
          <p>
            From startups to enterprises, our solutions power businesses across multiple countries,
            enabling digital transformation at scale.
          </p>

          <div className="global-stats">
            <div className="stat">
              <span className="stat-number">+500</span>
              <span className="stat-text">Clients</span>
            </div>
            <div className="stat">
              <span className="stat-number">+50</span>
              <span className="stat-text">Countries</span>
            </div>
            <div className="stat">
              <span className="stat-number">+1000</span>
              <span className="stat-text">Projects</span>
            </div>
          </div>
        </div>

        <div className="global-visual">
          <div className="globe-wrapper">
            <img src={globe} alt="Global Reach" className="globe-img" />
          </div>
        </div>
      </div>
    </section>
  );
}
