import React from 'react';
import { translate } from '../utils/translate';

const Ecology = ({ language }) => {
  return (
    <section id="ecology">
      <h2 className="section-title">{translate('ecology_heading', language)}</h2>
      
      <div className="glass-panel" style={{marginBottom: '2rem'}}>
        <h3>{translate('vectors_hosts_title', language)}</h3>
        <div className="grid-layout" style={{marginTop: '1rem'}}>
          <div>
            <h4>{translate('primary_vectors', language)}</h4>
            <p>
              <strong>{translate('phlebotomine_sandflies', language)}</strong> {translate('phlebotomine_desc', language)}<sup><a href="#ref-13">[13]</a></sup>
            </p>
            <p style={{marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>
              {translate('sandfly_vertical_transmission', language)}<sup><a href="#ref-4">[4]</a></sup>
            </p>
          </div>
          <div>
            <h4>{translate('intermediate_reservoir_hosts', language)}</h4>
            <p>
              {translate('intermediate_hosts_desc', language)}
            </p>
            <ul style={{listStyle: 'circle', paddingLeft: '20px', marginTop: '0.5rem'}}>
              <li style={{marginBottom: '0.5rem'}}><strong>{translate('intermediate_hosts_amplifiers', language)}</strong> {translate('intermediate_hosts_detail', language)}<sup><a href="#ref-12">[12]</a></sup></li>
              <li style={{marginBottom: '0.5rem'}}><strong>{translate('reservoir_hosts', language)}</strong> {translate('reservoir_hosts_detail', language)}<sup><a href="#ref-12">[12]</a></sup></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="glass-panel" style={{marginBottom: '2rem'}}>
        <h3>{translate('geographic_shift_hypothesis', language)}</h3>
        <p>
          {translate('geographic_shift_desc', language)}
        </p>
        <p style={{marginTop: '1rem', color: 'var(--accent-color)', fontWeight: 'bold'}}>
          {translate('geographic_shift_note', language)}
        </p>
        <p style={{marginTop: '1rem'}}>
          {translate('geographic_shift_detail', language)}<sup><a href="#ref-4">[4]</a></sup>
        </p>
      </div>

      <div className="grid-layout">
        <div className="glass-panel">
          <h3>{translate('one_health_model', language)}</h3>
          <div style={{background: 'var(--bg-color)', padding: '1rem', borderRadius: '8px', textAlign: 'center'}}>
            <p><strong>{translate('climate_environment', language)}</strong></p>
            <p>↓</p>
            <p><strong>{translate('vector_abundance', language)}</strong></p>
            <p>↓</p>
            <p><strong>{translate('vector_infection_animal_interaction', language)}</strong></p>
            <p>↓</p>
            <p><strong>{translate('human_exposure_children', language)}</strong></p>
          </div>
        </div>
        
        <div className="glass-panel">
          <h3>{translate('key_environmental_drivers', language)}</h3>
          <ul style={{listStyle: 'circle', paddingLeft: '20px'}}>
            <li style={{marginBottom: '0.5rem'}}>{translate('monsoon_post_monsoon', language)}</li>
            <li style={{marginBottom: '0.5rem'}}>{translate('housing', language)}</li>
            <li style={{marginBottom: '0.5rem'}}>{translate('livestock_proximity', language)}</li>
            <li style={{marginBottom: '0.5rem'}}>{translate('land_use_changes', language)}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Ecology;
