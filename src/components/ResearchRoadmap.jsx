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
        <h3>Therapeutics Pipeline</h3>
        <div style={{marginTop: '1rem'}}>
          <div style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
            <span style={{width: '120px', fontWeight: 'bold'}}>Discovery</span>
            <div style={{flex: 1, background: 'rgba(255,255,255,0.1)', height: '8px', borderRadius: '4px', position: 'relative'}}>
               <div style={{position: 'absolute', top: '-10px', left: '10%', background: 'var(--surface-color)', padding: '2px 8px', borderRadius: '4px', border: '1px solid var(--surface-border)', fontSize: '0.8rem'}}>mAbs / mRNA Vaccines</div>
            </div>
          </div>
          
          <div style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
            <span style={{width: '120px', fontWeight: 'bold'}}>Preclinical</span>
            <div style={{flex: 1, background: 'rgba(255,255,255,0.1)', height: '8px', borderRadius: '4px', position: 'relative'}}>
              <div style={{position: 'absolute', top: '-10px', left: '50%', background: 'var(--surface-color)', padding: '2px 8px', borderRadius: '4px', border: '1px solid #10b981', color: '#10b981', fontSize: '0.8rem'}}>Favipiravir</div>
              <div style={{position: 'absolute', top: '15px', left: '40%', background: 'var(--surface-color)', padding: '2px 8px', borderRadius: '4px', border: '1px solid #10b981', color: '#10b981', fontSize: '0.8rem'}}>Recombinant G Protein</div>
              <div style={{position: 'absolute', top: '-10px', left: '30%', background: 'var(--surface-color)', padding: '2px 8px', borderRadius: '4px', border: '1px solid #f59e0b', color: '#f59e0b', fontSize: '0.8rem'}}>siRNA</div>
            </div>
          </div>
          
          <div style={{display: 'flex', alignItems: 'center'}}>
            <span style={{width: '120px', fontWeight: 'bold', color: '#ef4444'}}>Clinical</span>
            <div style={{flex: 1, background: 'rgba(239, 68, 68, 0.2)', height: '8px', borderRadius: '4px', position: 'relative'}}>
              <div style={{position: 'absolute', top: '-10px', left: '10%', color: '#ef4444', fontSize: '0.8rem', fontStyle: 'italic'}}>No established clinical programmes identified</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchRoadmap;
