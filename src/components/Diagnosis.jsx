import { translate } from '../utils/translate';

const Diagnosis = ({ language }) => {
  return (
    <section id="diagnosis">
      <h2 className="section-title">{translate('diagnosis_heading', language)}</h2>
      
      <p style={{textAlign: 'center', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem', color: 'var(--text-secondary)'}}>
        {translate('diagnosis_intro', language)}
      </p>

      <div className="grid-layout">
        <div className="glass-panel" style={{borderColor: 'rgba(255, 59, 92, 0.5)'}}>
          <h3 style={{color: 'var(--accent-color)'}}>{translate('diagnosis_molecular_genomic', language)}</h3>
          
          <div style={{marginTop: '1rem', marginBottom: '1.5rem'}}>
            <h4 style={{marginBottom: '0.5rem'}}>{translate('diagnosis_rt_pcr_title', language)}</h4>
            <p>
              {translate('diagnosis_rt_pcr_desc1', language)} 
              <br/>
              <em>{translate('diagnosis_rt_pcr_desc2', language)}</em>
            </p>
          </div>

          <div style={{marginBottom: '1.5rem'}}>
            <h4 style={{marginBottom: '0.5rem'}}>{translate('diagnosis_wgs_title', language)}</h4>
            <p>
              {translate('diagnosis_wgs_desc', language)}
            </p>
          </div>
        </div>

        <div className="glass-panel">
          <h3>{translate('diagnosis_serological_assays', language)}</h3>
          
          <div style={{marginTop: '1rem', marginBottom: '1.5rem'}}>
            <h4 style={{marginBottom: '0.5rem'}}>{translate('diagnosis_igm_igg_title', language)}</h4>
            <p>
              <strong>{translate('diagnosis_igm_elisa', language)}</strong> {translate('diagnosis_igm_elisa_desc', language)}<sup><a href="#ref-1">[1]</a></sup>
            </p>
            <p style={{marginTop: '0.8rem'}}>
              <strong>{translate('diagnosis_igg_elisa', language)}</strong> {translate('diagnosis_igg_elisa_desc', language)}
            </p>
          </div>
          
          <div style={{marginBottom: '1.5rem'}}>
            <h4 style={{marginBottom: '0.5rem'}}>{translate('diagnosis_conceptual_strategy', language)}</h4>
            <div style={{background: 'rgba(0,0,0,0.05)', padding: '1rem', borderRadius: '8px', textAlign: 'center'}}>
              <p><strong>{translate('diagnosis_early_illness', language)}</strong> ➔ RT-PCR</p>
              <p><strong>{translate('diagnosis_later_illness', language)}</strong> ➔ IgM ELISA</p>
            </div>
          </div>
        </div>

        <div className="glass-panel" style={{flexBasis: '100%'}}>
          <h3>{translate('diagnosis_advanced_future', language)}</h3>
          <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1rem'}}>
            <div>
              <h4 style={{marginBottom: '0.5rem'}}>{translate('diagnosis_virus_isolation', language)}</h4>
              <p>
                {translate('diagnosis_virus_isolation_desc', language)}
              </p>
            </div>
            <div>
              <h4 style={{marginBottom: '0.5rem'}}>{translate('diagnosis_mass_spec', language)}</h4>
              <p>
                {translate('diagnosis_mass_spec_desc', language)}
              </p>
            </div>
          </div>

          <div style={{marginTop: '2rem', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid #ef4444', padding: '1rem', borderRadius: '8px'}}>
            <h4 style={{color: '#ef4444', marginBottom: '0.5rem'}}>{translate('diagnosis_diagnostic_gap', language)}</h4>
            <p>
              {translate('diagnosis_diagnostic_gap_desc1', language)} <strong>{translate('diagnosis_rapid_poc', language)}</strong> {translate('diagnosis_diagnostic_gap_desc2', language)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Diagnosis;
