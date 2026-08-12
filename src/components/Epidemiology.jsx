import React from 'react';

const Epidemiology = () => {
  return (
    <section id="epidemiology">
      <h2 className="section-title">Epidemiology & Outbreaks</h2>
      
      <p style={{textAlign: 'center', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem'}}>
        The major human disease burden has been reported from India (Gujarat, Maharashtra, Andhra Pradesh), though historical evidence exists in Africa and other parts of Asia.<sup><a href="#ref-11">[11]</a></sup>
      </p>

      <div className="glass-panel" style={{marginBottom: '2rem'}}>
        <h3 style={{color: 'var(--accent-color)'}}>Seropositivity & Case Positivity Rates</h3>
        
        <div className="grid-layout" style={{marginTop: '1.5rem', marginBottom: '1.5rem'}}>
          <div style={{background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px'}}>
            <h4>Case Positivity (Lab-Confirmed / Suspected AES)</h4>
            <ul style={{listStyle: 'none', padding: 0, marginTop: '0.5rem', fontSize: '0.95rem'}}>
              <li style={{marginBottom: '10px'}}>
                <strong>2003 Andhra Pradesh:</strong> 329 suspected cases, 183 deaths (56% CFR). Molecular confirmation in a subset due to limited testing.<sup><a href="#ref-1">[1]</a></sup>
              </li>
              <li style={{marginBottom: '10px'}}>
                <strong>2024 Gujarat Outbreak:</strong> 245 suspected AES cases, 64 laboratory-confirmed CHPV infections (<strong>~26% Positivity</strong>).<sup><a href="#ref-4">[4]</a></sup>
              </li>
              <li>
                <strong>2026 Gujarat Resurgence:</strong> ~184 suspected cases, 35 lab-confirmed (<strong>~19% Positivity</strong>) early in the outbreak.<sup><a href="#ref-13">[13]</a></sup>
              </li>
            </ul>
            <p style={{marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)'}}>
              *Note: Not every Acute Encephalitis Syndrome (AES) case is caused by CHPV. AES acts as a syndromic umbrella, leading to lower CHPV-specific positivity rates among total reported AES cases.
            </p>
          </div>

          <div style={{background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px'}}>
            <h4>IgM / IgG Seropositivity Dynamics</h4>
            <p style={{fontSize: '0.95rem', marginTop: '0.5rem'}}>
              Diagnosis relies heavily on the temporal dynamics of the immune response:
            </p>
            <ul style={{listStyle: 'circle', paddingLeft: '20px', marginTop: '0.5rem', fontSize: '0.95rem'}}>
              <li style={{marginBottom: '10px'}}>
                <strong>IgM Detection Window:</strong> Anti-CHPV IgM seropositivity is poor in the first 72 hours. In historical outbreaks, samples obtained <strong>after Day 4</strong> of illness showed significantly higher IgM positivity rates compared to early samples.<sup><a href="#ref-1">[1]</a></sup>
              </li>
              <li style={{marginBottom: '10px'}}>
                <strong>IgG & Population Seroprevalence:</strong> Background IgG seroprevalence studies in animals (cattle, sheep, rodents) and adults in endemic regions suggest widespread silent circulation. Adults often possess cross-reactive or neutralizing antibodies from past asymptomatic infections, potentially explaining the extreme pediatric susceptibility.<sup><a href="#ref-11">[11]</a></sup>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="timeline">
        <div className="timeline-item left">
          <div className="timeline-content">
            <div className="timeline-date">1965</div>
            <h3>First Isolation</h3>
            <p>Isolated in Maharashtra. Initially considered relatively obscure.<sup><a href="#ref-2">[2]</a></sup></p>
          </div>
        </div>
        <div className="timeline-item right">
          <div className="timeline-content">
            <div className="timeline-date">2003</div>
            <h3>Andhra Pradesh Outbreak</h3>
            <p>A landmark outbreak with 329 suspected cases, 183 deaths (~56% CFR). Virus isolated from brain tissue.<sup><a href="#ref-1">[1]</a></sup></p>
          </div>
        </div>
        <div className="timeline-item left">
          <div className="timeline-content">
            <div className="timeline-date">2004 - 2012</div>
            <h3>Recurring Activity</h3>
            <p>Recurring severe paediatric encephalitis outbreaks in Gujarat, Maharashtra, and Andhra Pradesh.<sup><a href="#ref-11">[11]</a></sup></p>
          </div>
        </div>
        <div className="timeline-item right">
          <div className="timeline-content">
            <div className="timeline-date">2024</div>
            <h3>Major Gujarat Outbreak</h3>
            <p>Largest in two decades. 245 AES cases, 82 deaths, 64 lab-confirmed CHPV infections.<sup><a href="#ref-4">[4]</a></sup></p>
          </div>
        </div>
        <div className="timeline-item left">
          <div className="timeline-content">
            <div className="timeline-date">2026</div>
            <h3>Current Resurgence</h3>
            <p>Ongoing outbreak with newly sequenced whole-genome data showing ~293 nucleotide changes.<sup><a href="#ref-5">[5]</a><a href="#ref-13">[13]</a></sup></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Epidemiology;
