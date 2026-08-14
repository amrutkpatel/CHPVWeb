import { translate } from '../utils/translate';

const KnowledgeMatrix = ({ language }) => {
  return (
    <section id="knowledge-matrix">
      <h2 className="section-title">{translate('matrix_heading', language)}</h2>
      <p style={{textAlign: 'center', marginBottom: '2rem'}}>
        {translate('matrix_desc', language)}
      </p>

      <div className="grid-layout">
        <div className="glass-panel" style={{borderTop: '4px solid #10b981'}}>
          <h3 style={{color: '#10b981'}}>{translate('matrix_established', language)}</h3>
          <ul style={{listStyle: 'none', padding: 0}}>
            <li style={{marginBottom: '0.8rem'}}>{translate('matrix_est_1', language)}</li>
            <li style={{marginBottom: '0.8rem'}}>{translate('matrix_est_2', language)}</li>
            <li style={{marginBottom: '0.8rem'}}>{translate('matrix_est_3', language)}</li>
            <li style={{marginBottom: '0.8rem'}}>{translate('matrix_est_4', language)}</li>
            <li style={{marginBottom: '0.8rem'}}>{translate('matrix_est_5', language)}</li>
            <li style={{marginBottom: '0.8rem'}}>{translate('matrix_est_6', language)}</li>
            <li style={{marginBottom: '0.8rem'}}>{translate('matrix_est_7', language)}</li>
            <li style={{marginBottom: '0.8rem'}}>{translate('matrix_est_8', language)}</li>
          </ul>
        </div>

        <div className="glass-panel" style={{borderTop: '4px solid #f59e0b'}}>
          <h3 style={{color: '#f59e0b'}}>{translate('matrix_probable', language)}</h3>
          <ul style={{listStyle: 'none', padding: 0}}>
            <li style={{marginBottom: '0.8rem'}}>{translate('matrix_prob_1', language)}</li>
            <li style={{marginBottom: '0.8rem'}}>{translate('matrix_prob_2', language)}</li>
            <li style={{marginBottom: '0.8rem'}}>{translate('matrix_prob_3', language)}</li>
            <li style={{marginBottom: '0.8rem'}}>{translate('matrix_prob_4', language)}</li>
            <li style={{marginBottom: '0.8rem'}}>{translate('matrix_prob_5', language)}</li>
            <li style={{marginBottom: '0.8rem'}}>{translate('matrix_prob_6', language)}</li>
          </ul>
        </div>

        <div className="glass-panel" style={{borderTop: '4px solid #ef4444'}}>
          <h3 style={{color: '#ef4444'}}>{translate('matrix_unknown', language)}</h3>
          <ul style={{listStyle: 'none', padding: 0}}>
            <li style={{marginBottom: '0.8rem'}}>{translate('matrix_unk_1', language)}</li>
            <li style={{marginBottom: '0.8rem'}}>{translate('matrix_unk_2', language)}</li>
            <li style={{marginBottom: '0.8rem'}}>{translate('matrix_unk_3', language)}</li>
            <li style={{marginBottom: '0.8rem'}}>{translate('matrix_unk_4', language)}</li>
            <li style={{marginBottom: '0.8rem'}}>{translate('matrix_unk_5', language)}</li>
            <li style={{marginBottom: '0.8rem'}}>{translate('matrix_unk_6', language)}</li>
            <li style={{marginBottom: '0.8rem'}}>{translate('matrix_unk_7', language)}</li>
            <li style={{marginBottom: '0.8rem'}}>{translate('matrix_unk_8', language)}</li>
            <li style={{marginBottom: '0.8rem'}}>{translate('matrix_unk_9', language)}</li>
            <li style={{marginBottom: '0.8rem'}}>{translate('matrix_unk_10', language)}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeMatrix;
