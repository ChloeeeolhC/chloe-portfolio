
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import EnglishWriting from './pages/EnglishWriting';
import GrowthSeo from './pages/GrowthSeo';
import AiBusinessAnalysis from './pages/AiBusinessAnalysis';
import Contact from './pages/Contact';

import './App.css';

function App() {
  const appStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/home-page.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
  };

  return (
    <LanguageProvider>
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App d-flex flex-column min-vh-100" style={appStyle}>
          <Navbar />
          <main className="flex-shrink-0">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/english-writing" element={<EnglishWriting />} />
              <Route path="/growth-seo" element={<GrowthSeo />} />
              <Route path="/business-analysis" element={<AiBusinessAnalysis />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
