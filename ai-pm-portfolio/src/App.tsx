import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AiBusinessAnalysis from './pages/AiBusinessAnalysis';
import ProductUx from './pages/ProductUx';
import AiLab from './pages/AiLab';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-shrink-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ai-business-analysis" element={<AiBusinessAnalysis />} />
            <Route path="/product-ux" element={<ProductUx />} />
            <Route path="/ai-lab" element={<AiLab />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;