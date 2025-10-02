import React from 'react';
import SolutionCard from './SolutionCard';
import './Solutions.css';

export default function Solutions() {
  return (
    <section className="solutions-section">
      <h2 className="solutions-title">Modular Solutions</h2>
      <div className="solutions-grid-layout">
        <SolutionCard
          icon="🧩"
          title="Composable APIs"
          description="Build exactly what you need with flexible building blocks."
        />
        <SolutionCard
          icon="🔒"
          title="Secure by Design"
          description="Your data is protected by industry-grade security."
        />
        <SolutionCard
          icon="📈"
          title="Scalable Systems"
          description="Handle millions of users without breaking a sweat."
        />
        <SolutionCard
          icon="⚙️"
          title="Automation Ready"
          description="Connect and automate tasks easily with integrations."
        />
        <SolutionCard
          icon="💳"
          title="Payment Flexibility"
          description="Support multiple payment methods in one platform."
        />
        <SolutionCard
          icon="🌍"
          title="Global Reach"
          description="Expand your business across the globe with ease."
        />
      </div>
    </section>
  );
}
