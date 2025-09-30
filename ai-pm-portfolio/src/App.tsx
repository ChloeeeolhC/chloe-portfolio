
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AiBusinessAnalysis from './pages/AiBusinessAnalysis';
import ProductUx from './pages/ProductUx';
import AiLab from './pages/AiLab';
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
    <Router>
      <div className="App d-flex flex-column min-vh-100" style={appStyle}>
        <Navbar />
        <main className="flex-shrink-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ai-business-analysis" element={<AiBusinessAnalysis />} />
            <Route path="/product-ux" element={<ProductUx />} />
            <Route path="/ai-lab" element={<AiLab />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
