import { useState, useEffect } from 'react'
import './App.css'
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
  const [activeTab, setActiveTab] = useState('hero')

  const tabReferences = {
    'hero': [1],
    'epidemiology': [1, 2, 4, 5, 11, 13],
    'ecology': [3, 11, 12],
    'virology': [6, 7, 15],
    'genomics': [5],
    'diagnosis': [1],
    'therapeutics': [6, 7, 8, 14],
    'knowledge-matrix': [],
    'roadmap': []
  };

  return (
    <>
      <nav className="sticky-nav">
        <div className="nav-container">
          <button className={activeTab === 'hero' ? 'active' : ''} onClick={() => setActiveTab('hero')}>Overview</button>
          <button className={activeTab === 'epidemiology' ? 'active' : ''} onClick={() => setActiveTab('epidemiology')}>Epidemiology</button>
          <button className={activeTab === 'ecology' ? 'active' : ''} onClick={() => setActiveTab('ecology')}>Ecology</button>
          <button className={activeTab === 'virology' ? 'active' : ''} onClick={() => setActiveTab('virology')}>Biology</button>
          <button className={activeTab === 'genomics' ? 'active' : ''} onClick={() => setActiveTab('genomics')}>Genomics</button>
          <button className={activeTab === 'diagnosis' ? 'active' : ''} onClick={() => setActiveTab('diagnosis')}>Diagnosis</button>
          <button className={activeTab === 'therapeutics' ? 'active' : ''} onClick={() => setActiveTab('therapeutics')}>Vaccines & Therapeutics</button>
          <button className={activeTab === 'knowledge-matrix' ? 'active' : ''} onClick={() => setActiveTab('knowledge-matrix')}>Knowledge Matrix</button>
          <button className={activeTab === 'roadmap' ? 'active' : ''} onClick={() => setActiveTab('roadmap')}>Research</button>
        </div>
      </nav>
      
      <div className="container" style={{ minHeight: '60vh', paddingTop: '2rem' }}>
        {activeTab === 'hero' && <div id="hero"><Hero /></div>}
        {activeTab === 'epidemiology' && <Epidemiology />}
        {activeTab === 'ecology' && <Ecology />}
        {activeTab === 'virology' && <Virology />}
        {activeTab === 'genomics' && <Genomics />}
        {activeTab === 'diagnosis' && <Diagnosis />}
        {activeTab === 'therapeutics' && <Therapeutics />}
        {activeTab === 'knowledge-matrix' && <KnowledgeMatrix />}
        {activeTab === 'roadmap' && <ResearchRoadmap />}
      </div>
      
      <div className="container">
        <References citedIds={tabReferences[activeTab]} />
      </div>

    </>
  )
}

export default App
