import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Drica & Leo</h3>
            <p>Transformando vidas através da organização com carinho, excelência e profissionalismo.</p>
            <div className="social-links">
              <a href="https://instagram.com/adrianamoura.organizer" target="_blank" rel="noopener" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://wa.me/5581994732981" target="_blank" rel="noopener" className="social-link">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-pinterest"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Links Rápidos</h4>
            <ul className="footer-links">
              <li><Link to="/">Início</Link></li>
              <li><Link to="/servicos">Serviços</Link></li>
              <li><Link to="/sobre">Sobre Nós</Link></li>
              <li><Link to="/galeria">Galeria</Link></li>
              <li><Link to="/contato">Contato</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Serviços</h4>
            <ul className="footer-links">
              <li><Link to="/guarda-roupas">Guarda-roupas</Link></li>
              <li><Link to="/cozinhas">Cozinhas</Link></li>
              <li><Link to="/escritorios">Escritórios</Link></li>
              <li><Link to="/salas">Salas</Link></li>
              <li><Link to="/despensas">Despensas</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contato</h4>
            <ul className="footer-links">
              <li><i className="fab fa-whatsapp"></i> (81) 99473-2981</li>
              <li><i className="far fa-envelope"></i> drica.leo@organizer.pe</li>
              <li><i className="fas fa-map-marker-alt"></i> Pernambuco, Brasil</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Drica & Leo. Todos os direitos reservados.</p>
          <p>Desenvolvido com <span className="heart">❤️</span> em Pernambuco</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
