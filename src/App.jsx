import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import './App.css';

function App() {
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
      </div>
    </BrowserRouter>
  );
}

export default App;
