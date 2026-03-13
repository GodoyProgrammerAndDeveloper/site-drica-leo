import React from 'react';
import './CTASection.css';

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content scale-in">
          <h2>Pronta para transformar seu lar?</h2>
          <p>
            Entre em contato conosco e descubra como a organização pode mudar sua vida
          </p>
          <div className="cta-buttons">
            <a href="/contato" className="btn btn-primary btn-large">
              <i className="fas fa-calendar-check"></i> Agendar visita
            </a>
            <a href="https://wa.me/5581994732981" className="btn btn-pink btn-large">
              <i className="fab fa-whatsapp"></i> WhatsApp
            </a>
            <a href="https://www.instagram.com/adrianamoura.organizer" className="btn btn-instagram btn-large" target="_blank" rel="noopener">
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
