import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container container">
        <Link to="/" className="logo">
          <img src="/images/logo.png" alt="Drica & Léo" className="logo-img" />
          <div className="logo-text">
            <h2>Drica & Léo</h2>
            <p>Personal Organizer</p>
          </div>
        </Link>

        {/* Ícone do menu hambúrguer */}
        <button 
          className={`menu-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menu de navegação */}
        <nav className={`nav ${menuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Início</Link>
          <Link to="/servicos" className="nav-link" onClick={() => setMenuOpen(false)}>Serviços</Link>
          <Link to="/sobre" className="nav-link" onClick={() => setMenuOpen(false)}>Sobre</Link>
          <Link to="/galeria" className="nav-link" onClick={() => setMenuOpen(false)}>Galeria</Link>
          <Link to="/contato" className="nav-link" onClick={() => setMenuOpen(false)}>Contato</Link>

          <div className="nav-social">
            <a 
              href="https://wa.me/5581994732981" 
              className="nav-link whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              <i className="fab fa-whatsapp"></i> WhatsApp
            </a>
            <a 
              href="https://instagram.com/adrianamoura.organizer" 
              className="nav-link instagram"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
