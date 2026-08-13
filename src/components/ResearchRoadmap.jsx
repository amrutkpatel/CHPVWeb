import { translate } from '../utils/translate';

const ResearchRoadmap = ({ language }) => {
  return (
    <section id="roadmap">
      <h2 className="section-title">{translate('roadmap_heading', language)}</h2>

      <div className="glass-panel" style={{marginBottom: '2rem'}}>
        <h3>{translate('roadmap_unanswered_title', language)}</h3>
        <ol style={{paddingLeft: '20px', marginTop: '1rem'}}>
          <li style={{marginBottom: '0.5rem'}}><strong>{translate('roadmap_q1_title', language)}</strong> {translate('roadmap_q1_desc', language)}</li>
          <li style={{marginBottom: '0.5rem'}}><strong>{translate('roadmap_q2_title', language)}</strong> {translate('roadmap_q2_desc', language)}</li>
          <li style={{marginBottom: '0.5rem'}}><strong>{translate('roadmap_q3_title', language)}</strong> {translate('roadmap_q3_desc', language)}</li>
          <li style={{marginBottom: '0.5rem'}}><strong>{translate('roadmap_q4_title', language)}</strong> {translate('roadmap_q4_desc', language)}</li>
          <li style={{marginBottom: '0.5rem'}}><strong>{translate('roadmap_q5_title', language)}</strong> {translate('roadmap_q5_desc', language)}</li>
        </ol>
      </div>

      <div className="glass-panel">
        <h3>{translate('roadmap_pipeline_title', language)}</h3>
        <div style={{marginTop: '2rem'}}>
          
          <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem'}}>
            <span style={{fontWeight: 'bold', color: 'var(--text-secondary)'}}>{translate('roadmap_discovery', language)}</span>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.8rem', borderLeft: '3px solid var(--surface-border)', paddingLeft: '1rem'}}>
               <div style={{background: 'var(--bg-color)', padding: '4px 10px', borderRadius: '6px', border: '1px solid var(--surface-border)', fontSize: '0.85rem'}}>{translate('roadmap_mabs', language)}</div>
               <div style={{background: 'var(--bg-color)', padding: '4px 10px', borderRadius: '6px', border: '1px solid var(--surface-border)', fontSize: '0.85rem'}}>{translate('roadmap_mrna', language)}</div>
               <div style={{background: 'var(--bg-color)', padding: '4px 10px', borderRadius: '6px', border: '1px solid var(--surface-border)', fontSize: '0.85rem'}}>{translate('roadmap_host_antivirals', language)}</div>
               <div style={{background: 'var(--bg-color)', padding: '4px 10px', borderRadius: '6px', border: '1px solid var(--surface-border)', fontSize: '0.85rem'}}>{translate('roadmap_sirna', language)}</div>
            </div>
          </div>
          
          <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem'}}>
            <span style={{fontWeight: 'bold', color: 'var(--text-secondary)'}}>{translate('roadmap_preclinical', language)}</span>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.8rem', borderLeft: '3px solid #10b981', paddingLeft: '1rem'}}>
               <div style={{background: 'rgba(16, 185, 129, 0.05)', padding: '4px 10px', borderRadius: '6px', border: '1px solid #10b981', color: '#10b981', fontSize: '0.85rem'}}>{translate('roadmap_favipiravir', language)}</div>
               <div style={{background: 'rgba(16, 185, 129, 0.05)', padding: '4px 10px', borderRadius: '6px', border: '1px solid #10b981', color: '#10b981', fontSize: '0.85rem'}}>{translate('roadmap_recombinant_g', language)}</div>
            </div>
          </div>
          
          <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
            <span style={{fontWeight: 'bold', color: '#ef4444'}}>{translate('roadmap_clinical', language)}</span>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.8rem', borderLeft: '3px solid #ef4444', paddingLeft: '1rem'}}>
               <div style={{color: '#ef4444', fontSize: '0.9rem', fontStyle: 'italic', padding: '4px 0'}}>{translate('roadmap_no_clinical', language)}</div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ResearchRoadmap;
