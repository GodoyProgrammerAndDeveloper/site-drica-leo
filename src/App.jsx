import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import './App.css';

function App() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/servicos" element={<ServicesPage />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/galeria" element={<GalleryPage />} />
            <Route path="/contato" element={<ContactPage />} />
          </Routes>
        </main>

        {/* BOTÃO VOLTAR AO TOPO */}
        {showScroll && (
          <button
            onClick={scrollToTop}
            style={{
              position: "fixed",
              bottom: "30px",
              right: "30px",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #8b5cf6, #f43f5e)",
              color: "white",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 4px 15px rgba(139, 92, 246, 0.3)",
              zIndex: 1000,
              fontSize: "1.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            ↑
          </button>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
