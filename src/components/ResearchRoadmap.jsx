import React from 'react';

const ResearchRoadmap = () => {
  return (
    <section id="roadmap">
      <h2 className="section-title">Research Roadmap & Pipeline</h2>

      <div className="glass-panel" style={{marginBottom: '2rem'}}>
        <h3>Top Unanswered Questions</h3>
        <ol style={{paddingLeft: '20px', marginTop: '1rem'}}>
          <li style={{marginBottom: '0.5rem'}}><strong>What is the reservoir?</strong> Which vertebrate species actually maintains CHPV?</li>
          <li style={{marginBottom: '0.5rem'}}><strong>Which sandfly species actually transmit CHPV?</strong> Is Sergentomyia genuinely competent or merely infected?</li>
          <li style={{marginBottom: '0.5rem'}}><strong>Why are children disproportionately susceptible?</strong> Is it exposure, immunology, or receptor expression?</li>
          <li style={{marginBottom: '0.5rem'}}><strong>How does CHPV enter the CNS?</strong> Blood-Brain Barrier disruption vs peripheral nerves.</li>
          <li style={{marginBottom: '0.5rem'}}><strong>What determines outbreak emergence?</strong> What combination of climate, vector, and host produces severe outbreaks?</li>
        </ol>
      </div>

      <div className="glass-panel">
        <h3>Vaccines & Therapeutics Pipeline</h3>
        <div style={{marginTop: '2rem'}}>
          
          <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem'}}>
            <span style={{fontWeight: 'bold', color: 'var(--text-secondary)'}}>Discovery</span>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.8rem', borderLeft: '3px solid var(--surface-border)', paddingLeft: '1rem'}}>
               <div style={{background: 'var(--bg-color)', padding: '4px 10px', borderRadius: '6px', border: '1px solid var(--surface-border)', fontSize: '0.85rem'}}>mAbs (Therapeutic)</div>
               <div style={{background: 'var(--bg-color)', padding: '4px 10px', borderRadius: '6px', border: '1px solid var(--surface-border)', fontSize: '0.85rem'}}>mRNA (Vaccine)</div>
               <div style={{background: 'var(--bg-color)', padding: '4px 10px', borderRadius: '6px', border: '1px solid var(--surface-border)', fontSize: '0.85rem'}}>Romidepsin & Sulphasalazine (Therapeutic)</div>
            </div>
          </div>
          
          <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem'}}>
            <span style={{fontWeight: 'bold', color: 'var(--text-secondary)'}}>Preclinical</span>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.8rem', borderLeft: '3px solid #10b981', paddingLeft: '1rem'}}>
               <div style={{background: 'rgba(16, 185, 129, 0.05)', padding: '4px 10px', borderRadius: '6px', border: '1px solid #10b981', color: '#10b981', fontSize: '0.85rem'}}>Favipiravir (Therapeutic)</div>
               <div style={{background: 'rgba(16, 185, 129, 0.05)', padding: '4px 10px', borderRadius: '6px', border: '1px solid #10b981', color: '#10b981', fontSize: '0.85rem'}}>Recombinant G Protein (Vaccine)</div>
               <div style={{background: 'rgba(245, 158, 11, 0.05)', padding: '4px 10px', borderRadius: '6px', border: '1px solid #f59e0b', color: '#f59e0b', fontSize: '0.85rem'}}>siRNA (Therapeutic)</div>
            </div>
          </div>
          
          <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
            <span style={{fontWeight: 'bold', color: '#ef4444'}}>Clinical</span>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.8rem', borderLeft: '3px solid #ef4444', paddingLeft: '1rem'}}>
               <div style={{color: '#ef4444', fontSize: '0.9rem', fontStyle: 'italic', padding: '4px 0'}}>No established clinical programmes identified</div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ResearchRoadmap;
