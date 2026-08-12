import React from 'react';

const Genomics = () => {
  return (
    <section id="genomics">
      <h2 className="section-title">Genomics & Evolution</h2>
      
      <div className="glass-panel" style={{marginBottom: '2rem'}}>
        <h3>The 2024 Gujarat Whole-Genome Sequence</h3>
        <p>
          A major development is the 2026 publication of the whole-genome sequence from a 12-year-old patient from Patan, Gujarat (2024 outbreak).<sup><a href="#ref-5">[5]</a></sup>
        </p>
        <div style={{display: 'flex', gap: '2rem', marginTop: '1rem', flexWrap: 'wrap'}}>
          <div style={{flex: 1, background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px'}}>
            <h4 style={{color: 'var(--blue-accent)'}}>Sequence Highlights</h4>
            <ul>
              <li>~293 nucleotide changes relative to historical reference</li>
              <li>~24 nonsynonymous substitutions</li>
              <li>Overall conserved CHPV organization</li>
            </ul>
          </div>
          <div style={{flex: 1, background: 'rgba(239, 68, 68, 0.1)', border: '1px solid #ef4444', padding: '1rem', borderRadius: '8px'}}>
            <h4 style={{color: '#ef4444'}}>Crucial Warning</h4>
            <p><strong>Mutation ≠ Increased Virulence.</strong></p>
            <p>The available evidence does not currently establish that these mutations caused increased virulence or transmissibility. Functional reverse genetics experiments are needed.</p>
          </div>
        </div>
      </div>
      
      <p style={{textAlign: 'center', color: 'var(--text-secondary)'}}>
        The current genomic dataset remains surprisingly small compared to other viruses, hindering efforts to map transmission chains and vector-associated evolution.
      </p>
    </section>
  );
};

export default Genomics;
