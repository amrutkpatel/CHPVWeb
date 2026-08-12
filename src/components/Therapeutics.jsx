import React from 'react';

const Therapeutics = () => {
  return (
    <section id="therapeutics">
      <h2 className="section-title">Therapeutics & Vaccines</h2>
      
      <div className="grid-layout">
        <div className="glass-panel" style={{borderColor: 'rgba(255, 59, 92, 0.5)'}}>
          <h3 style={{color: 'var(--accent-color)'}}>Current Clinical Status</h3>
          <p>
            There is <strong>no licensed CHPV vaccine</strong> and <strong>no approved CHPV-specific antiviral therapy</strong> as of 2026. Management remains primarily intensive supportive care (airway management, anticonvulsants, and managing cerebral edema). 
          </p>
        </div>

        <div className="glass-panel">
          <h3>Vaccine Development</h3>
          <ul style={{listStyle: 'circle', paddingLeft: '20px'}}>
            <li style={{marginBottom: '10px'}}>
              <strong>Recombinant G-protein Vaccine:</strong> The glycoprotein (G) is the primary target for neutralizing antibodies. Preclinical trials using recombinant G-protein vaccines have shown robust immunogenicity and ~90% protection in murine models.<sup><a href="#ref-6">[6]</a></sup>
            </li>
            <li style={{marginBottom: '10px'}}>
              <strong>Inactivated Virus Candidates:</strong> Early studies explored formalin-inactivated CHPV, demonstrating efficacy in animal models, but human trials have not yet materialized due to scale and safety considerations.
            </li>
            <li>
              <strong>mRNA & Vector Platforms:</strong> Emerging platforms utilized during the COVID-19 pandemic are currently being investigated for rapid deployment against CHPV G-protein.
            </li>
          </ul>
        </div>

        <div className="glass-panel" style={{gridColumn: '1 / -1'}}>
          <h3>Drug Repurposing & In Vitro Studies</h3>
          <div className="grid-layout" style={{marginTop: '1rem'}}>
            <ul style={{listStyle: 'circle', paddingLeft: '20px'}}>
              <li style={{marginBottom: '10px'}}>
                <strong>Favipiravir & Ribavirin:</strong> Broad-spectrum RNA polymerase inhibitors have demonstrated significant antiviral activity against CHPV in vitro by targeting the L polymerase. Favipiravir shows particularly promising preclinical leads.<sup><a href="#ref-8">[8]</a></sup>
              </li>
              <li style={{marginBottom: '10px'}}>
                <strong>Mycophenolic Acid (MPA):</strong> This immunosuppressant has been shown in recent in vitro studies to potently inhibit CHPV replication, likely by depleting intracellular guanosine pools.
              </li>
            </ul>
            <ul style={{listStyle: 'circle', paddingLeft: '20px'}}>
              <li style={{marginBottom: '10px'}}>
                <strong>RNA Interference (RNAi):</strong> Small interfering RNAs (siRNAs) targeting the virus-induced apoptosis pathway (e.g., caspase-3) or specific viral transcripts have successfully reduced viral titers and neuronal apoptosis in cellular models.<sup><a href="#ref-7">[7]</a></sup>
              </li>
              <li>
                <strong>Host-Directed Therapies (Transcriptomic Insights):</strong> A 2026 time-resolved transcriptomic study (PMID: 42074008) mapped the dynamic host response to CHPV infection, revealing how the virus systematically takes over the cell.<sup><a href="#ref-14">[14]</a></sup>
                <div style={{marginTop: '0.8rem', fontSize: '0.9rem', background: 'rgba(0,0,0,0.1)', padding: '10px', borderRadius: '8px'}}>
                  <ul style={{listStyle: 'square', paddingLeft: '20px'}}>
                    <li style={{marginBottom: '4px'}}><strong>Early (6h - 12h):</strong> Massive activation of innate immune/inflammatory pathways (ISGs) while suppressing standard metabolic processes.</li>
                    <li style={{marginBottom: '4px'}}><strong>Late (18h - 24h):</strong> The virus reprograms host lipid and sphingolipid metabolism for its own replication, followed by a global transcriptional shutdown (repression of chromatin organization and ribosome biogenesis) leading to cell death.</li>
                  </ul>
                  <p style={{marginTop: '0.5rem', fontStyle: 'italic', color: 'var(--accent-color)'}}>
                    By mapping these temporal stages, researchers have identified specific host pathways amenable to pharmacological targeting, with novel host-directed compounds already showing promising in vitro antiviral activity in neuronal cell lines.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Therapeutics;
