import { useState, useEffect, useContext } from 'react';
import './App.css';
// Language context removed; using local state
import { translate } from './utils/translate';
import Hero from './components/Hero'
import Virology from './components/Virology'
import Epidemiology from './components/Epidemiology'
import Therapeutics from './components/Therapeutics'
import KnowledgeMatrix from './components/KnowledgeMatrix'
import Ecology from './components/Ecology'
import Genomics from './components/Genomics'
import Diagnosis from './components/Diagnosis'
import ResearchRoadmap from './components/ResearchRoadmap'
import References from './components/References'

function App() {
  const [language, setLanguage] = useState('en');
  const [activeTab, setActiveTab] = useState('hero')
  const [touchStartX, setTouchStartX] = useState(null)

  const tabs = [
    'hero',
    'epidemiology',
    'ecology',
    'virology',
    'genomics',
    'diagnosis',
    'therapeutics',
    'knowledge-matrix',
    'roadmap'
  ];

  useEffect(() => {
    const activeBtn = document.querySelector('.side-nav button.active');
    if (activeBtn) {
      activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [activeTab]);

  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const distance = touchStartX - touchEndX;
    const minSwipeDistance = 50; // minimum distance to be considered a swipe

    if (Math.abs(distance) > minSwipeDistance) {
      const currentIndex = tabs.indexOf(activeTab);
      if (distance > 0 && currentIndex < tabs.length - 1) {
        // Swipe left -> next tab
        setActiveTab(tabs[currentIndex + 1]);
      } else if (distance < 0 && currentIndex > 0) {
        // Swipe right -> previous tab
        setActiveTab(tabs[currentIndex - 1]);
      }
    }
    setTouchStartX(null);
  };

  const tabReferences = {
    'hero': [1, 2],
    'epidemiology': [1, 3, 5, 6, 12, 14],
    'ecology': [4, 12, 13],
    'virology': [7, 8, 16],
    'genomics': [6],
    'diagnosis': [1],
    'therapeutics': [7, 8, 9, 15],
    'knowledge-matrix': [],
    'roadmap': []
  };

  return (
      <div className="app-layout">
        <nav className="side-nav">
          <div className="nav-container">
            <button className="lang-toggle" onClick={() => setLanguage(language === 'en' ? 'gu' : 'en')}>
              {language === 'en' ? 'ગુજરાતી' : 'English'}
            </button>
            <button className={activeTab === 'hero' ? 'active' : ''} onClick={() => setActiveTab('hero')}>{translate('overview', language)}</button>
            <button className={activeTab === 'epidemiology' ? 'active' : ''} onClick={() => setActiveTab('epidemiology')}>{translate('epidemiology', language)}</button>
            <button className={activeTab === 'ecology' ? 'active' : ''} onClick={() => setActiveTab('ecology')}>{translate('ecology', language)}</button>
            <button className={activeTab === 'virology' ? 'active' : ''} onClick={() => setActiveTab('virology')}>{translate('biology', language)}</button>
            <button className={activeTab === 'genomics' ? 'active' : ''} onClick={() => setActiveTab('genomics')}>{translate('genomics', language)}</button>
            <button className={activeTab === 'diagnosis' ? 'active' : ''} onClick={() => setActiveTab('diagnosis')}>{translate('diagnosis', language)}</button>
            <button className={activeTab === 'therapeutics' ? 'active' : ''} onClick={() => setActiveTab('therapeutics')}>{translate('vaccinesTherapeutics', language)}</button>
            <button className={activeTab === 'knowledge-matrix' ? 'active' : ''} onClick={() => setActiveTab('knowledge-matrix')}>{translate('knowledgeMatrix', language)}</button>
            <button className={activeTab === 'roadmap' ? 'active' : ''} onClick={() => setActiveTab('roadmap')}>{translate('research', language)}</button>
          </div>
        </nav>
        <main
          className="main-content"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <>
            <h1 className="hero-title" style={{ textAlign: 'center', marginTop: '2rem', marginBottom: '1rem', padding: '0 1rem' }}>Chandipura Virus (CHPV)</h1>
            <div className="container" style={{ minHeight: '60vh', paddingTop: '1rem' }}>
              {activeTab === 'hero' && <div id="hero"><Hero language={language} /></div>}
              {activeTab === 'epidemiology' && <Epidemiology language={language} />}
              {activeTab === 'ecology' && <Ecology language={language} />}
              {activeTab === 'virology' && <Virology language={language} />}
              {activeTab === 'genomics' && <Genomics language={language} />}
              {activeTab === 'diagnosis' && <Diagnosis language={language} />}
              {activeTab === 'therapeutics' && <Therapeutics language={language} />}
              {activeTab === 'knowledge-matrix' && <KnowledgeMatrix language={language} />}
              {activeTab === 'roadmap' && <ResearchRoadmap language={language} />}
            </div>
            <div className="container">
              <References citedIds={tabReferences[activeTab]} language={language} />
            </div>
          </>
        </main>
      </div>
    
  );
}

export default App
