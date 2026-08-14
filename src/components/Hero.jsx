import React from 'react';

import { translate } from '../utils/translate';

const Hero = ({ language }) => {
  return (
    <header className="app-header" style={{ minHeight: 'auto', padding: '0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <p className="hero-subtitle">
        {translate('hero_subtitle', language)}
      </p>
      
      <p className="hero-summary" style={{ maxWidth: '800px', textAlign: 'center', fontSize: '1.1rem', margin: '1rem auto 2rem', color: '#555', lineHeight: '1.6' }}>
        {translate('hero_summary', language)}
      </p>

      <div className="hero-stats" style={{ marginBottom: '3rem' }}>
        <div className="stat-item">
          <div className="stat-value">33-56%<sup><a href="#ref-1">[1]</a>, <a href="#ref-2">[2]</a></sup></div>
          <div className="stat-label">{translate('hero_stat_cfr', language)}</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">24-48h<sup><a href="#ref-1">[1]</a></sup></div>
          <div className="stat-label">{translate('hero_stat_cp', language)}</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">&lt;15 yrs</div>
          <div className="stat-label">{translate('hero_stat_ms', language)}</div>
        </div>
      </div>
      
      <div className="hero-extra-info" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', maxWidth: '900px', width: '100%', alignItems: 'stretch', marginBottom: '2rem' }}>
        
        {/* Graphic Area */}
        <div className="hero-graphic" style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #f9f9f9, #f1f1f1)', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <img src="/sandfly.jpg" alt="Sandfly Vector" style={{ width: '120px', height: '120px', objectFit: 'contain', mixBlendMode: 'multiply' }} />
            {/* Calibration scale overlay */}
            <div style={{ position: 'absolute', bottom: '-5px', right: '10px', width: '40px' }}>
              <div style={{ borderBottom: '2px solid #555', borderLeft: '2px solid #555', borderRight: '2px solid #555', height: '6px' }}></div>
              <div style={{ textAlign: 'center', fontSize: '0.65rem', fontWeight: 'bold', color: '#555', marginTop: '2px' }}>2 mm</div>
            </div>
          </div>
          <h4 style={{ marginTop: '1.5rem', color: '#333', fontSize: '1.1rem' }}>Vector-Borne Pathogen</h4>
        </div>

        {/* Key Symptoms Area */}
        <div className="hero-symptoms" style={{ flex: '1 1 300px', textAlign: 'left', padding: '1.5rem 2rem', background: '#fff', borderRadius: '12px', border: '1px solid #eee', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
          <h3 style={{ marginTop: '0', color: '#d32f2f', fontSize: '1.3rem', borderBottom: '2px solid #ffcdd2', paddingBottom: '0.5rem', display: 'inline-block' }}>
            {translate('hero_symptoms_title', language)}
          </h3>
          <ul style={{ listStyleType: 'none', padding: '0', margin: '1rem 0 0 0' }}>
            <li style={{ padding: '0.5rem 0', borderBottom: '1px solid #f5f5f5', display: 'flex', alignItems: 'center', fontSize: '1.05rem', color: '#444' }}>
              <span style={{ marginRight: '12px', fontSize: '1.2rem' }}>🌡️</span> {translate('hero_symptom_1', language)}
            </li>
            <li style={{ padding: '0.5rem 0', borderBottom: '1px solid #f5f5f5', display: 'flex', alignItems: 'center', fontSize: '1.05rem', color: '#444' }}>
              <span style={{ marginRight: '12px', fontSize: '1.2rem' }}>🤢</span> {translate('hero_symptom_2', language)}
            </li>
            <li style={{ padding: '0.5rem 0', display: 'flex', alignItems: 'center', fontSize: '1.05rem', color: '#444' }}>
              <span style={{ marginRight: '12px', fontSize: '1.2rem' }}>🧠</span> {translate('hero_symptom_3', language)}
            </li>
          </ul>
        </div>
        
      </div>

    </header>
  );
};

export default Hero;
