import React from 'react';

const Virology = () => {
  return (
    <section id="virology">
      <h2 className="section-title">Virology & Pathogenesis</h2>
      
      <div className="grid-layout">
        <div className="glass-panel">
          <h3>The Virus</h3>
          <p>
            <strong>Genus:</strong> Vesiculovirus<br/>
            <strong>Family:</strong> Rhabdoviridae<br/>
            <strong>Genome:</strong> ~11 kb Negative-sense ssRNA<sup><a href="#ref-6">[6]</a></sup><br/>
            <strong>Morphology:</strong> Bullet-shaped<sup><a href="#ref-15">[15]</a></sup>
          </p>
          <p style={{marginTop: '1rem'}}>
            Because it is a negative-sense RNA virus, the genomic RNA cannot directly function as mRNA. Viral particles carry the L/P polymerase complex required to initiate transcription.
          </p>
        </div>

        <div className="glass-panel">
          <h3>Genome Organization<sup><a href="#ref-6">[6]</a></sup></h3>
          <ul style={{listStyle: 'none', padding: 0}}>
            <li style={{marginBottom: '10px'}}><strong>N (Nucleoprotein):</strong> Encapsidates viral RNA</li>
            <li style={{marginBottom: '10px'}}><strong>P (Phosphoprotein):</strong> Polymerase cofactor</li>
            <li style={{marginBottom: '10px'}}><strong>M (Matrix):</strong> RNP-envelope interaction, assembly</li>
            <li style={{marginBottom: '10px'}}><strong>G (Glycoprotein):</strong> Attachment and membrane fusion</li>
            <li style={{marginBottom: '10px'}}><strong>L (Large protein):</strong> RNA-dependent RNA polymerase</li>
          </ul>
        </div>

        <div className="glass-panel" style={{flexBasis: '100%'}}>
          <h3>Pathogenesis Model</h3>
          <p style={{color: 'var(--accent-color)', fontWeight: 'bold', fontSize: '1.2rem', textAlign: 'center', margin: '2rem 0'}}>
            Vector Bite ➔ Peripheral Infection ➔ Viraemia ➔ CNS Access ➔ Neuronal Infection ➔ Intense Innate Immune Response + Neuronal Apoptosis ➔ Rapid Encephalitis
          </p>
          <p>
            CHPV is strongly neurotropic. A 2013 study demonstrated that CHPV-infected neurons undergo Fas-mediated extrinsic apoptosis. Neurological damage is not simply due to the virus replicating, but host cell-death signalling is an important component.<sup><a href="#ref-7">[7]</a></sup>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Virology;
