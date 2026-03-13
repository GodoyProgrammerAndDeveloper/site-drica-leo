import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-drica">Drica</span>
              <span className="title-ampersand">&</span>
              <span className="title-leo">Leo</span>
            </h1>
            <p className="hero-subtitle">
              Transformando vidas através da organização 
              <span className="subtitle-highlight"> com excelência, carinho e profissionalismo</span>
            </p>
            <p className="hero-description">
              Duas irmãs pernambucanas com um propósito: levar harmonia, bem-estar 
              e qualidade de vida para seu lar através da organização profissional.
            </p>
            <div className="hero-buttons">
              <a href="/contato" className="btn btn-primary">
                <i className="fas fa-calendar-check"></i> Agendar visita
              </a>
              <a href="#servicos" className="btn btn-secondary">
                Conheça nossos serviços
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-decoration">
              <div className="decoration-circle"></div>
              <div className="decoration-circle"></div>
              <div className="decoration-circle"></div>
            </div>
            <img src="https://images.unsplash.com/photo-1556905200-079c42e709a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Organização" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
