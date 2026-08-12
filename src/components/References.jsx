import React from 'react';

const References = ({ citedIds }) => {
  const allReferences = [
    { id: 1, text: 'Rao BL et al. (2004) "A large outbreak of acute encephalitis with high fatality rate in children in Andhra Pradesh, India." The Lancet. (Clinical progression, CNS invasion, 2003 outbreak)' },
    { id: 2, text: 'Bhatt PN et al. (1967) "Chandipura: a new arbovirus isolated in India from patients with febrile illness." Indian J Med Res. (1965 isolation in Maharashtra)' },
    { id: 3, text: '"Detection of Chandipura Virus in Sandflies (Sergentomyia spp.) in Gujarat, India." J-STAGE (JJID). (Vector ecology, vertical transmission)' },
    { id: 4, text: 'World Health Organization (2024) "Disease Outbreak News: Chandipura virus - India." (DON529, 2024 outbreak data, lack of H2H transmission)' },
    { id: 5, text: 'Shukla N et al. (2026) "Whole-Genome Sequencing of Chandipura Virus from the 2024 Gujarat Outbreak." Microbiology Spectrum.' },
    { id: 6, text: '"Development of a recombinant G-protein based vaccine against Chandipura virus." Vaccine (ScienceDirect). (~11kb genome, ~90% protection in mice)' },
    { id: 7, text: '"Chandipura virus infection induces apoptosis in neurons through Fas-mediated pathway." PubMed ID: 24027318.' },
    { id: 8, text: '"Preclinical evaluation of Favipiravir against Chandipura virus." PubMed ID: 37254846.' },
    { id: 9, text: '"Cytokine-associated blood-brain barrier dysfunction in viral encephalitides." Rev Med Virol. (Wiley)' },
    { id: 10, text: '"miR-155 contributes to antiviral response against Chandipura virus in human microglial cells." PubMed ID: 37327858.' },
    { id: 11, text: '"Epidemiology and ecology of Chandipura virus in India." PMC6142667. (Animal seropositivity, geographic distribution, 2004 outbreaks)' },
    { id: 12, text: '"Seasonal dynamics of Chandipura virus transmission." ScienceDirect. (June-September activity)' },
    { id: 13, text: 'Local media reports (The Times of India, Indian Express) - August 2026. (Ongoing 2026 Gujarat outbreak data)' },
    { id: 14, text: 'Jhala D et al. (2026) "Time-Resolved Transcriptomic Profiling of Chandipura Virus Infection Reveals Dynamic Host Responses and Host-Directed Therapeutic Targets." Int J Mol Sci. PMID: 42074008.' },
    { id: 15, text: '"Host factors for Chandipura virus entry." PMC13368348. (A2M, LRP1, GRP78 candidate receptors, taxonomy)' }
  ];

  const referencesToDisplay = citedIds 
    ? allReferences.filter(ref => citedIds.includes(ref.id))
    : allReferences;

  if (referencesToDisplay.length === 0) return null;

  return (
    <section id="references" style={{ marginTop: '4rem', padding: '2rem', background: 'rgba(0,0,0,0.05)', borderRadius: '12px' }}>
      <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>References</h2>
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
