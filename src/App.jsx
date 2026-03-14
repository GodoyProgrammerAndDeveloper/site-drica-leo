import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';        // ✅ MENU
import HomePage from './pages/HomePage';                 // ✅ PÁGINA INICIAL
import ServicesPage from './pages/ServicesPage';         // ✅ SERVIÇOS
import AboutPage from './pages/AboutPage';               // ✅ SOBRE
import GalleryPage from './pages/GalleryPage';           // ✅ GALERIA
import ContactPage from './pages/ContactPage';           // ✅ CONTATO
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />  {/* ← ISSO FAZ OS BOTÕES APARECEREM! */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/servicos" element={<ServicesPage />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/galeria" element={<GalleryPage />} />
            <Route path="/contato" element={<ContactPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
