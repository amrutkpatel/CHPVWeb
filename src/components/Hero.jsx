import React from 'react';

import { translate } from '../utils/translate';

const Hero = ({ language }) => {
  return (
    <header className="app-header" style={{ minHeight: 'auto', padding: '0' }}>
      <p className="hero-subtitle">
        {translate('hero_subtitle', language)}
      </p>
      
      <div className="hero-stats">
        <div className="stat-item">
          <div className="stat-value">33-75%<sup><a href="#ref-1">[1]</a>, <a href="#ref-16">[16]</a></sup></div>
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
      

    </header>
  );
};

export default Hero;
