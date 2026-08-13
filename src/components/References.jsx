import { translate } from '../utils/translate';

const References = ({ citedIds, language }) => {
  const allReferences = [
    { id: 1, text: translate('ref_1', language) },
    { id: 2, text: translate('ref_2', language) },
    { id: 3, text: translate('ref_3', language) },
    { id: 4, text: translate('ref_4', language) },
    { id: 5, text: translate('ref_5', language) },
    { id: 6, text: translate('ref_6', language) },
    { id: 7, text: translate('ref_7', language) },
    { id: 8, text: translate('ref_8', language) },
    { id: 9, text: translate('ref_9', language) },
    { id: 10, text: translate('ref_10', language) },
    { id: 11, text: translate('ref_11', language) },
    { id: 12, text: translate('ref_12', language) },
    { id: 13, text: translate('ref_13', language) },
    { id: 14, text: translate('ref_14', language) },
    { id: 15, text: translate('ref_15', language) },
    { id: 16, text: translate('ref_16', language) }
  ];

  const referencesToDisplay = citedIds 
    ? allReferences.filter(ref => citedIds.includes(ref.id))
    : allReferences;

  if (referencesToDisplay.length === 0) return null;

  return (
    <section id="references" style={{ marginTop: '4rem', padding: '2rem', background: 'rgba(0,0,0,0.05)', borderRadius: '12px' }}>
      <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>{translate('references_heading', language)}</h2>
      <ol style={{ paddingLeft: '1.5rem' }}>
        {referencesToDisplay.map((ref) => (
          <li key={ref.id} id={`ref-${ref.id}`} value={ref.id} style={{ marginBottom: '0.8rem', color: 'var(--text-secondary)' }}>
            {ref.text}
          </li>
        ))}
      </ol>
    </section>
  );
};

export default References;
