import React from 'react';

const Ecology = () => {
  return (
    <section id="ecology">
      <h2 className="section-title">Vector Ecology & Hosts</h2>
      
      <div className="glass-panel" style={{marginBottom: '2rem'}}>
        <h3>Vectors & Hosts</h3>
        <div className="grid-layout" style={{marginTop: '1rem'}}>
          <div>
            <h4>Primary Vectors</h4>
            <p>
              <strong>Phlebotomine Sandflies</strong> are the best-supported vectors, closely linked to rural Indian outbreaks. Outbreaks have a striking association with the monsoon, early post-monsoon periods, mud walls, and cattle sheds.<sup><a href="#ref-12">[12]</a></sup>
            </p>
            <p style={{marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>
              Interestingly, CHPV RNA has also been detected in male sandflies, hinting at potential vertical transmission within the vector.<sup><a href="#ref-3">[3]</a></sup>
            </p>
          </div>
          <div>
            <h4>Intermediate & Reservoir Hosts</h4>
            <p>
              While sandflies are the primary vectors, various vertebrate species are part of the transmission cycle.
            </p>
            <ul style={{listStyle: 'circle', paddingLeft: '20px', marginTop: '0.5rem'}}>
              <li style={{marginBottom: '0.5rem'}}><strong>Intermediate Hosts / Amplifiers:</strong> Domestic animals like cattle, pigs, and sheep often live close to human dwellings. Their presence attracts zoophilic sandflies (like Sergentomyia), creating a bridge for human exposure.<sup><a href="#ref-11">[11]</a></sup></li>
              <li style={{marginBottom: '0.5rem'}}><strong>Reservoir Hosts:</strong> Hedgehogs and rodents are suspected to be natural reservoirs in the wild, helping maintain the virus silently during inter-epidemic periods.<sup><a href="#ref-11">[11]</a></sup></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="glass-panel" style={{marginBottom: '2rem'}}>
        <h3>The "Geographic Shift" Hypothesis</h3>
        <p>
          Historically, major outbreaks occurred in Andhra Pradesh and Maharashtra (e.g. 2003). Recently, the burden has seemingly shifted to Gujarat (2024, 2026). However, the evidence suggests the virus hasn't simply "migrated". 
        </p>
        <p style={{marginTop: '1rem', color: 'var(--accent-color)', fontWeight: 'bold'}}>
          Rather than the virus moving, the Vector/Environment ecology may be changing.
        </p>
        <p style={{marginTop: '1rem'}}>
          In 2018, CHPV was detected in Gujarat sandflies (including males, hinting at vertical transmission), matching the 2003 AP strain. This indicates an established, silent reservoir system that only boils over into human outbreaks when climate, vector density, and human exposure perfectly align.<sup><a href="#ref-3">[3]</a></sup>
        </p>
      </div>

      <div className="grid-layout">
        <div className="glass-panel">
          <h3>The One Health Model</h3>
          <div style={{background: 'var(--bg-color)', padding: '1rem', borderRadius: '8px', textAlign: 'center'}}>
            <p><strong>Climate / Environment</strong></p>
            <p>↓</p>
            <p><strong>Vector Abundance</strong></p>
            <p>↓</p>
            <p><strong>Vector Infection & Animal Interaction</strong></p>
            <p>↓</p>
            <p><strong>Human Exposure (Children)</strong></p>
          </div>
        </div>
        
        <div className="glass-panel">
          <h3>Key Environmental Drivers</h3>
          <ul style={{listStyle: 'circle', paddingLeft: '20px'}}>
            <li style={{marginBottom: '0.5rem'}}><strong>Monsoon/Post-monsoon:</strong> Ideal breeding humidity</li>
            <li style={{marginBottom: '0.5rem'}}><strong>Housing:</strong> Mud walls and crevices serve as sandfly habitats</li>
            <li style={{marginBottom: '0.5rem'}}><strong>Livestock proximity:</strong> Cattle sheds attract zoophilic sandflies like Sergentomyia</li>
            <li style={{marginBottom: '0.5rem'}}><strong>Land-use changes:</strong> Shifting agricultural practices may alter the vector-human interface</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Ecology;
