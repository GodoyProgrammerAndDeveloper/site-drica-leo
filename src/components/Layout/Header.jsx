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

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container container">
        <Link to="/" className="logo" onClick={handleLinkClick}>
          <img src="/images/logo.png" alt="Drica & Léo" className="logo-img" />
          <div className="logo-text">
            <h2>Drica & Léo</h2>
            <p>Personal Organizer</p>
          </div>
        </Link>

        <button 
          className={`menu-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${menuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={handleLinkClick}>Início</Link>
          <Link to="/servicos" className="nav-link" onClick={handleLinkClick}>Serviços</Link>
          <Link to="/sobre" className="nav-link" onClick={handleLinkClick}>Sobre</Link>
          <Link to="/galeria" className="nav-link" onClick={handleLinkClick}>Galeria</Link>
          <Link to="/contato" className="nav-link" onClick={handleLinkClick}>Contato</Link>

          <div className="nav-social">
            <a 
              href="https://wa.me/5581994732981" 
              className="nav-link whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
            >
              <i className="fab fa-whatsapp"></i> WhatsApp
            </a>
            <a 
              href="https://instagram.com/adrianamoura.organizer" 
              className="nav-link instagram"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
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
