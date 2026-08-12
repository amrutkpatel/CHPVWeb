import React from 'react';

const KnowledgeMatrix = () => {
  return (
    <section id="knowledge-matrix">
      <h2 className="section-title">What We Know vs What We Don't</h2>
      <p style={{textAlign: 'center', marginBottom: '2rem'}}>
        A clear distinction between established facts and critical gaps in CHPV biology.
      </p>

      <div className="grid-layout">
        <div className="glass-panel" style={{borderTop: '4px solid #10b981'}}>
          <h3 style={{color: '#10b981'}}>🟢 Established</h3>
          <ul style={{listStyle: 'none', padding: 0}}>
            <li style={{marginBottom: '0.8rem'}}>✓ CHPV is a vesiculovirus/rhabdovirus (Negative-sense RNA)</li>
            <li style={{marginBottom: '0.8rem'}}>✓ Strongly neurotropic, causing severe AES</li>
            <li style={{marginBottom: '0.8rem'}}>✓ Children are disproportionately affected</li>
            <li style={{marginBottom: '0.8rem'}}>✓ Sandflies are important vectors</li>
            <li style={{marginBottom: '0.8rem'}}>✓ Disease is strongly seasonal in India</li>
            <li style={{marginBottom: '0.8rem'}}>✓ Human-to-human transmission is not established</li>
            <li style={{marginBottom: '0.8rem'}}>✓ Neuronal apoptosis contributes to pathogenesis</li>
            <li style={{marginBottom: '0.8rem'}}>✓ No licensed vaccine or specific antiviral exists</li>
          </ul>
        </div>

        <div className="glass-panel" style={{borderTop: '4px solid #f59e0b'}}>
          <h3 style={{color: '#f59e0b'}}>🟡 Probable / Suggestive</h3>
          <ul style={{listStyle: 'none', padding: 0}}>
            <li style={{marginBottom: '0.8rem'}}>⚠ Specific sandfly species involved (e.g. Sergentomyia)</li>
            <li style={{marginBottom: '0.8rem'}}>⚠ Vertical transmission in vectors</li>
            <li style={{marginBottom: '0.8rem'}}>⚠ Climate and land-use effects on outbreaks</li>
            <li style={{marginBottom: '0.8rem'}}>⚠ Livestock-vector interaction (One Health)</li>
            <li style={{marginBottom: '0.8rem'}}>⚠ Blood-Brain Barrier (BBB) disruption mechanism</li>
            <li style={{marginBottom: '0.8rem'}}>⚠ Microglial responses & miRNA-mediated regulation</li>
          </ul>
        </div>

        <div className="glass-panel" style={{borderTop: '4px solid #ef4444'}}>
          <h3 style={{color: '#ef4444'}}>🔴 Unknown / Research Gaps</h3>
          <ul style={{listStyle: 'none', padding: 0}}>
            <li style={{marginBottom: '0.8rem'}}>✖ Definitive vertebrate reservoir</li>
            <li style={{marginBottom: '0.8rem'}}>✖ Precise CNS entry mechanism</li>
            <li style={{marginBottom: '0.8rem'}}>✖ Molecular basis of paediatric susceptibility</li>
            <li style={{marginBottom: '0.8rem'}}>✖ Determinants of neurovirulence</li>
            <li style={{marginBottom: '0.8rem'}}>✖ Vector competence of individual species</li>
            <li style={{marginBottom: '0.8rem'}}>✖ Correlates of protective immunity</li>
            <li style={{marginBottom: '0.8rem'}}>✖ Relationship between viral genotype and clinical severity</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeMatrix;
