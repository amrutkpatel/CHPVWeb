import { translate } from '../utils/translate';

const Genomics = ({ language }) => {
  return (
    <section id="genomics">
      <h2 className="section-title">{translate('genomics_heading', language)}</h2>
      
      <div className="glass-panel" style={{marginBottom: '2rem'}}>
        <h3>{translate('genomics_sub_heading', language)}</h3>
        <p>
          {translate('genomics_pub_desc', language)}<sup><a href="#ref-5">[5]</a></sup>
        </p>
        <div style={{display: 'flex', gap: '2rem', marginTop: '1rem', flexWrap: 'wrap'}}>
          <div style={{flex: 1, background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px'}}>
            <h4 style={{color: 'var(--blue-accent)'}}>{translate('genomics_seq_highlights', language)}</h4>
            <ul>
              <li>{translate('genomics_seq_1', language)}</li>
              <li>{translate('genomics_seq_2', language)}</li>
              <li>{translate('genomics_seq_3', language)}</li>
            </ul>
          </div>
          <div style={{flex: 1, background: 'rgba(239, 68, 68, 0.1)', border: '1px solid #ef4444', padding: '1rem', borderRadius: '8px'}}>
            <h4 style={{color: '#ef4444'}}>{translate('genomics_crucial_warning', language)}</h4>
            <p><strong>{translate('genomics_mutation_note', language)}</strong></p>
            <p>{translate('genomics_evidence_desc', language)}</p>
          </div>
        </div>
      </div>
      
      <p style={{textAlign: 'center', color: 'var(--text-secondary)'}}>
        {translate('genomics_dataset_note', language)}
      </p>
    </section>
  );
};

export default Genomics;
