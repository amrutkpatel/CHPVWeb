import { translate } from '../utils/translate';

const Virology = ({ language }) => {
  return (
    <section id="virology">
      <h2 className="section-title">{translate('virology_heading', language)}</h2>
      
      <div className="grid-layout">
        <div className="glass-panel">
          <h3>{translate('the_virus', language)}</h3>
          <p>
            <strong>{translate('genus', language)}:</strong> {translate('vesiculovirus', language)}<br/>
            <strong>{translate('family', language)}:</strong> {translate('rhabdoviridae', language)}<br/>
            <strong>{translate('genome', language)}:</strong> {translate('genome_details', language)}<sup><a href="#ref-6">[6]</a></sup><br/>
            <strong>{translate('morphology', language)}:</strong> {translate('morphology_details', language)}<sup><a href="#ref-15">[15]</a></sup>
          </p>
          <p style={{marginTop: '1rem'}}>
            {translate('rna_transcription_desc', language)}
          </p>
        </div>

        <div className="glass-panel">
          <h3>{translate('genome_organization', language)}<sup><a href="#ref-6">[6]</a></sup></h3>
          <ul style={{listStyle: 'none', padding: 0}}>
            <li style={{marginBottom: '10px'}}><strong>{translate('n_protein', language)}:</strong> {translate('n_protein_desc', language)}</li>
            <li style={{marginBottom: '10px'}}><strong>{translate('p_protein', language)}:</strong> {translate('p_protein_desc', language)}</li>
            <li style={{marginBottom: '10px'}}><strong>{translate('m_protein', language)}:</strong> {translate('m_protein_desc', language)}</li>
            <li style={{marginBottom: '10px'}}><strong>{translate('g_protein', language)}:</strong> {translate('g_protein_desc', language)}</li>
            <li style={{marginBottom: '10px'}}><strong>{translate('l_protein', language)}:</strong> {translate('l_protein_desc', language)}</li>
          </ul>
        </div>

        <div className="glass-panel" style={{flexBasis: '100%'}}>
          <h3>{translate('pathogenesis_model', language)}</h3>
          <p style={{color: 'var(--accent-color)', fontWeight: 'bold', fontSize: '1.2rem', textAlign: 'center', margin: '2rem 0'}}>
            {translate('pathogenesis_flow', language)}
          </p>
          <p>
            {translate('neurotropic_desc', language)}<sup><a href="#ref-7">[7]</a></sup>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Virology;
