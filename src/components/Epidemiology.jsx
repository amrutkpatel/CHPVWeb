import { translate } from '../utils/translate';

const Epidemiology = ({ language }) => {
  return (
    <section id="epidemiology">
      <h2 className="section-title">{translate('epidemiology_heading', language)}</h2>
      
      <p style={{textAlign: 'center', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem'}}>
        {translate('epi_major_burden', language)}<sup><a href="#ref-11">[11]</a></sup>
      </p>

      <div className="glass-panel" style={{marginBottom: '2rem'}}>
        <h3 style={{color: 'var(--accent-color)'}}>{translate('epi_seropositivity_title', language)}</h3>
        
        <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1.5rem', marginBottom: '1.5rem'}}>
          <div style={{background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px'}}>
            <h4>{translate('epi_case_positivity_subtitle', language)}</h4>
            <ul style={{listStyle: 'none', padding: 0, marginTop: '0.5rem', fontSize: '0.95rem'}}>
              <li style={{marginBottom: '10px'}}>
                <strong>{translate('epi_2003_ap_title', language)}</strong> {translate('epi_2003_ap_desc', language)}<sup><a href="#ref-1">[1]</a></sup>
              </li>
              <li style={{marginBottom: '10px'}}>
                <strong>{translate('epi_2024_gujarat_title', language)}</strong> {translate('epi_2024_gujarat_desc', language)}<sup><a href="#ref-4">[4]</a></sup>
              </li>
              <li>
                <strong>{translate('epi_2024_genomic_title', language)}</strong> {translate('epi_2024_genomic_desc', language)}<sup><a href="#ref-13">[13]</a></sup>
              </li>
            </ul>
            <p style={{marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)'}}>
              {translate('epi_note', language)}
            </p>
          </div>

          <div style={{background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px'}}>
            <h4>{translate('epi_igm_igg_title', language)}</h4>
            <p style={{fontSize: '0.95rem', marginTop: '0.5rem'}}>
              {translate('epi_igm_igg_desc', language)}
            </p>
            <ul style={{listStyle: 'circle', paddingLeft: '20px', marginTop: '0.5rem', fontSize: '0.95rem'}}>
              <li style={{marginBottom: '10px'}}>
                <strong>{translate('epi_igm_window_title', language)}</strong> {translate('epi_igm_window_desc1', language)} <strong>{translate('epi_after_day_4', language)}</strong> {translate('epi_igm_window_desc2', language)}<sup><a href="#ref-1">[1]</a></sup>
              </li>
              <li style={{marginBottom: '10px'}}>
                <strong>{translate('epi_igg_pop_title', language)}</strong> {translate('epi_igg_pop_desc', language)}<sup><a href="#ref-11">[11]</a></sup>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="timeline">
        <div className="timeline-item left">
          <div className="timeline-content">
            <div className="timeline-date">1965</div>
            <h3>{translate('epi_timeline_1965_title', language)}</h3>
            <p>{translate('epi_timeline_1965_desc', language)}<sup><a href="#ref-2">[2]</a></sup></p>
          </div>
        </div>
        <div className="timeline-item right">
          <div className="timeline-content">
            <div className="timeline-date">2003</div>
            <h3>{translate('epi_timeline_2003_title', language)}</h3>
            <p>{translate('epi_timeline_2003_desc', language)}<sup><a href="#ref-1">[1]</a></sup></p>
          </div>
        </div>
        <div className="timeline-item left">
          <div className="timeline-content">
            <div className="timeline-date">2004 - 2012</div>
            <h3>{translate('epi_timeline_recurring_title', language)}</h3>
            <p>{translate('epi_timeline_recurring_desc', language)}<sup><a href="#ref-11">[11]</a></sup></p>
          </div>
        </div>
        <div className="timeline-item right">
          <div className="timeline-content">
            <div className="timeline-date">2024</div>
            <h3>{translate('epi_timeline_2024_title', language)}</h3>
            <p>{translate('epi_timeline_2024_desc', language)}<sup><a href="#ref-4">[4]</a><a href="#ref-5">[5]</a><a href="#ref-13">[13]</a></sup></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Epidemiology;
