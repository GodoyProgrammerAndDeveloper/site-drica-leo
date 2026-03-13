import React from 'react';
import { Link } from 'react-router-dom';
import { homeImages } from '../../data/homeImagesData';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section id="sobre" className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-content fade-in-left">
            <h2 className="section-title">Sobre Nós</h2>
            <p className="about-text">
              Drica e Leo são duas irmãs pernambucanas com um propósito: transformar vidas através da organização. 
              Com formação em terapia organizacional e anos de experiência, ajudamos pessoas a 
              encontrarem paz e funcionalidade em seus lares.
            </p>
            <p className="about-text">
              Acreditamos que um ambiente organizado vai além da estética - é sobre bem-estar, 
              produtividade e qualidade de vida. Cada projeto é único e desenvolvido com muito 
              carinho e atenção aos detalhes.
            </p>
            <Link to="/sobre" className="btn-secondary">
              Conheça nossa história
            </Link>
          </div>
          
          <div className="about-image scale-in">
            <img src={homeImages.about} alt="Drica & Leo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
