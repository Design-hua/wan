import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Universities from './components/Universities';
import Services from './components/Services';
import CostComparison from './components/CostComparison';
import ApplicationProcess from './components/ApplicationProcess';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      {activeSection === 'home' && (
        <>
          <Hero />
          <Universities />
          <Services />
        </>
      )}
      {activeSection === 'universities' && <Universities />}
      {activeSection === 'costs' && <CostComparison />}
      {activeSection === 'application' && <ApplicationProcess />}
      {activeSection === 'contact' && <Contact />}
      <Footer />
    </div>
  );
}

export default App;