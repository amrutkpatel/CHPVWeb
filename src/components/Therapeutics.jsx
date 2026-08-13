import { translate } from '../utils/translate';

const Therapeutics = ({ language }) => {
  return (
    <section id="therapeutics">
      <h2 className="section-title">{translate('therapeutics_heading', language)}</h2>
      
      <div className="grid-layout">
        <div className="glass-panel" style={{borderColor: 'rgba(255, 59, 92, 0.5)'}}>
          <h3 style={{color: 'var(--accent-color)'}}>{translate('therapeutics_current_status', language)}</h3>
          <p>
            {translate('therapeutics_status_desc1', language)} <strong>{translate('therapeutics_no_vaccine', language)}</strong> {translate('therapeutics_status_desc2', language)} <strong>{translate('therapeutics_no_antiviral', language)}</strong> {translate('therapeutics_status_desc3', language)} 
          </p>
        </div>

        <div className="glass-panel">
          <h3>{translate('therapeutics_vaccine_dev', language)}</h3>
          <ul style={{listStyle: 'circle', paddingLeft: '20px'}}>
            <li style={{marginBottom: '10px'}}>
              <strong>{translate('therapeutics_vaccine_1_title', language)}</strong> {translate('therapeutics_vaccine_1_desc', language)}<sup><a href="#ref-6">[6]</a></sup>
            </li>
            <li style={{marginBottom: '10px'}}>
              <strong>{translate('therapeutics_vaccine_2_title', language)}</strong> {translate('therapeutics_vaccine_2_desc', language)}
            </li>
            <li>
              <strong>{translate('therapeutics_vaccine_3_title', language)}</strong> {translate('therapeutics_vaccine_3_desc', language)}
            </li>
          </ul>
        </div>

        <div className="glass-panel" style={{flexBasis: '100%'}}>
          <h3>{translate('therapeutics_drug_repurposing', language)}</h3>
          <div style={{marginTop: '1rem'}}>
            <ul style={{listStyle: 'circle', paddingLeft: '20px'}}>
              <li style={{marginBottom: '10px'}}>
                <strong>{translate('therapeutics_drug_1_title', language)}</strong> {translate('therapeutics_drug_1_desc', language)}<sup><a href="#ref-8">[8]</a></sup>
              </li>
              <li style={{marginBottom: '10px'}}>
                <strong>{translate('therapeutics_drug_2_title', language)}</strong> {translate('therapeutics_drug_2_desc', language)}<sup><a href="#ref-7">[7]</a></sup>
              </li>
              <li>
                <strong>{translate('therapeutics_drug_3_title', language)}</strong> {translate('therapeutics_drug_3_desc', language)}<sup><a href="#ref-14">[14]</a></sup>
                <div style={{marginTop: '0.8rem', fontSize: '0.9rem', background: 'rgba(0,0,0,0.1)', padding: '10px', borderRadius: '8px'}}>
                  <ul style={{listStyle: 'square', paddingLeft: '20px'}}>
                    <li style={{marginBottom: '4px'}}><strong>{translate('therapeutics_early_stage', language)}</strong> {translate('therapeutics_early_desc', language)}</li>
                    <li style={{marginBottom: '4px'}}><strong>{translate('therapeutics_late_stage', language)}</strong> {translate('therapeutics_late_desc', language)}</li>
                  </ul>
                  <p style={{marginTop: '0.5rem', fontStyle: 'italic', color: 'var(--accent-color)'}}>
                    {translate('therapeutics_host_target_desc', language)} <strong>{translate('therapeutics_drug_romidepsin', language)}</strong> {translate('therapeutics_drug_and', language)} <strong>{translate('therapeutics_drug_sulphasalazine', language)}</strong> {translate('therapeutics_host_target_efficacy', language)}
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
