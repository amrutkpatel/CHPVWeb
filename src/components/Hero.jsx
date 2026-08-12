import React from 'react';

const Hero = () => {
  return (
    <header className="app-header">
      <h1 className="hero-title">Chandipura Virus (CHPV)</h1>
      <p className="hero-subtitle">
        An emerging pediatric threat. A rapidly progressive acute encephalitis syndrome with extraordinarily fast clinical progression.
      </p>
      
      <div className="hero-stats">
        <div className="stat-item">
          <div className="stat-value">50-75%<sup><a href="#ref-1">[1]</a></sup></div>
          <div className="stat-label">Case-Fatality Ratio</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">24-48h<sup><a href="#ref-1">[1]</a></sup></div>
          <div className="stat-label">Clinical Progression</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">&lt;15 yrs</div>
          <div className="stat-label">Most Susceptible</div>
        </div>
      </div>
      
      <button className="btn" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
        Explore the Science
      </button>
    </header>
  );
};

export default Hero;
