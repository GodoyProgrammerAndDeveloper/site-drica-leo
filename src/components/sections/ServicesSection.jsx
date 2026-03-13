import React, { useState } from 'react';
import './ServicesSection.css';

const servicesData = [
  {
    id: 1,
    icon: '👗',
    title: 'Guarda-roupas',
    description: 'Organização de armários com técnicas Marie Kondo, etiquetagem e maximização de espaço.',
    image: 'https://images.unsplash.com/photo-1556905200-079c42e709a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    preview: 'Armários organizados, dobras que economizam espaço, etiquetas personalizadas',
    features: ['Dobras que economizam espaço', 'Organização por categorias', 'Sistemas de etiquetagem']
  },
  {
    id: 2,
    icon: '🍳',
    title: 'Cozinhas',
    description: 'Despensa organizada, potes etiquetados e tudo ao alcance das mãos.',
    image: 'https://images.unsplash.com/photo-1556912172-45dff3d5f5d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    preview: 'Despensa funcional, potes herméticos, organização de utensílios',
    features: ['Despensa funcional', 'Potes e etiquetas', 'Aproveitamento de espaço']
  },
  {
    id: 3,
    icon: '💻',
    title: 'Escritórios',
    description: 'Home office produtivo com organização de documentos, cabos e materiais.',
    image: 'https://images.unsplash.com/photo-1527192491265-7e15afd0e1e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    preview: 'Gestão de cabos, organização de documentos, ergonomia do espaço',
    features: ['Gestão de cabos', 'Organização de papéis', 'Arquivos e documentos']
  },
  {
    id: 4,
    icon: '🛋️',
    title: 'Salas',
    description: 'Ambientes integrados e aconchegantes para receber bem.',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7d47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    preview: 'Organização de estantes, espaço TV, decoração funcional',
    features: ['Organização de livros', 'Espaço TV e lazer', 'Decoração funcional']
  },
  {
    id: 5,
    icon: '🧸',
    title: 'Quartos Kids',
    description: 'Espaço lúdico e funcional para as crianças.',
    image: 'https://images.unsplash.com/photo-1556905055-6e5b1c1d9e4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    preview: 'Brinquedos organizados, área de estudos, roupinhas etiquetadas',
    features: ['Brinquedos organizados', 'Área de estudos', 'Roupas e acessórios']
  },
  {
    id: 6,
    icon: '📦',
    title: 'Despensas',
    description: 'Organização completa de alimentos, produtos de limpeza e lavanderia.',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    preview: 'Estoque organizado, produtos categorizados, etiquetagem completa',
    features: ['Estoque organizado', 'Produtos de limpeza', 'Etiquetagem completa']
  }
];

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="servicos" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Nossos Serviços</h2>
          <p>
            Soluções personalizadas para cada ambiente da sua casa, com todo carinho que você merece
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div 
              key={service.id}
              className="service-card"
              onClick={() => setSelectedService(service)}
            >
              <div className="service-image-container">
                <img src={service.image} alt={service.title} loading="lazy" />
                <div className="service-icon">{service.icon}</div>
                {/* PREVIEW NO CARD */}
                <div className="card-preview">
                  <div className="preview-arrow"></div>
                  <p>{service.preview}</p>
                </div>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="service-btn">Saiba mais →</button>
            </div>
          ))}
        </div>
      </div>

      {selectedService && (
        <div className="modal" onClick={() => setSelectedService(null)}>
          <div className="modal-content service-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedService(null)}>×</button>
            <div className="service-modal-image">
              <img src={selectedService.image} alt={selectedService.title} />
              <div className="service-modal-icon">{selectedService.icon}</div>
            </div>
            <h3>{selectedService.title}</h3>
            <p>{selectedService.description}</p>
            <ul className="service-modal-list">
              {selectedService.features.map((feature, index) => (
                <li key={index}>✨ {feature}</li>
              ))}
            </ul>
            <div className="service-modal-buttons">
              <a href="/contato" className="btn btn-primary">
                <i className="fas fa-calendar-check"></i> Agendar visita
              </a>
              <a href="https://wa.me/5581994732981" className="btn btn-secondary">
                <i className="fab fa-whatsapp"></i> WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
