import React from 'react';

const Diagnosis = () => {
  return (
    <section id="diagnosis">
      <h2 className="section-title">Diagnostic Methods</h2>
      
      <p style={{textAlign: 'center', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem', color: 'var(--text-secondary)'}}>
        Given the extraordinarily short therapeutic window (24-48 hours) for CHPV encephalitis, rapid and accurate diagnosis is critical. 
        A combined strategy using molecular and serological techniques is standard.
      </p>

      <div className="grid-layout">
        <div className="glass-panel" style={{borderColor: 'rgba(255, 59, 92, 0.5)'}}>
          <h3 style={{color: 'var(--accent-color)'}}>Molecular & Genomic Assays</h3>
          
          <div style={{marginTop: '1rem', marginBottom: '1.5rem'}}>
            <h4 style={{marginBottom: '0.5rem'}}>Reverse Transcription PCR (RT-PCR)</h4>
            <p>
              The gold standard during the early acute phase. Targets conserved genomic regions for high specificity. 
              It provides molecular confirmation and is crucial for outbreak investigation. 
              <em>Limitation: Viraemia may be transient, yielding negative results if samples are collected late.</em>
            </p>
          </div>

          <div style={{marginBottom: '1.5rem'}}>
            <h4 style={{marginBottom: '0.5rem'}}>Whole-Genome Sequencing (WGS)</h4>
            <p>
              Used primarily for genomic surveillance, tracking viral evolution, and mapping transmission chains rather than immediate clinical triage. 
              Essential for identifying nucleotide changes across outbreaks (e.g., 2024 Gujarat outbreak).
            </p>
          </div>
        </div>

        <div className="glass-panel">
          <h3>Serological Assays</h3>
          
          <div style={{marginTop: '1rem', marginBottom: '1.5rem'}}>
            <h4 style={{marginBottom: '0.5rem'}}>IgM & IgG ELISA</h4>
            <p>
              <strong>IgM ELISA:</strong> Useful particularly after several days of illness when viraemia has cleared but the acute immune response is active. Historically, samples obtained after day 4 are significantly more frequently IgM-positive than earlier samples.<sup><a href="#ref-1">[1]</a></sup>
            </p>
            <p style={{marginTop: '0.8rem'}}>
              <strong>IgG ELISA:</strong> Indicates past exposure, historical infection, or long-term immunity (convalescence). IgG typically becomes positive later in the infection cycle (often 2-3 weeks post-onset) and is more valuable for sero-epidemiological surveys to understand background population immunity rather than acute clinical diagnosis.
            </p>
          </div>
          
          <div style={{marginBottom: '1.5rem'}}>
            <h4 style={{marginBottom: '0.5rem'}}>The Conceptual Strategy</h4>
            <div style={{background: 'rgba(0,0,0,0.05)', padding: '1rem', borderRadius: '8px', textAlign: 'center'}}>
              <p><strong>Early Illness (Days 1-3)</strong> ➔ RT-PCR</p>
              <p><strong>Later Illness (Day 4+)</strong> ➔ IgM ELISA</p>
            </div>
          </div>
        </div>

        <div className="glass-panel" style={{flexBasis: '100%'}}>
          <h3>Advanced & Future Modalities</h3>
          <div className="grid-layout" style={{marginTop: '1rem'}}>
            <div>
              <h4 style={{marginBottom: '0.5rem'}}>Virus Isolation</h4>
              <p>
                Culturing the virus from clinical samples (like brain tissue or CSF) in cell lines. While highly definitive, it requires specialized biosafety facilities, takes days to weeks, and is generally reserved for research and reference laboratories.
              </p>
            </div>
            <div>
              <h4 style={{marginBottom: '0.5rem'}}>Mass Spectrometry & Proteomics</h4>
              <p>
                Emerging as a powerful tool for unbiased pathogen detection and identifying host biomarkers in CSF or serum. It can rapidly differentiate CHPV from other causes of Acute Encephalitis Syndrome (AES).
              </p>
            </div>
          </div>

          <div style={{marginTop: '2rem', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid #ef4444', padding: '1rem', borderRadius: '8px'}}>
            <h4 style={{color: '#ef4444', marginBottom: '0.5rem'}}>The Diagnostic Gap</h4>
            <p>
              A major unmet clinical need is a <strong>rapid point-of-care test</strong> (e.g., RT-LAMP, CRISPR diagnostics, or lateral-flow antigen test) capable of confirming CHPV in under 30 minutes with minimal equipment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Diagnosis;
