import React from "react";
import { useNavigate } from "react-router-dom";

const ServicesPage = () => {
  const navigate = useNavigate();

  const services = [
    { 
      id: 1,
      icon: "👗", 
      title: "Guarda-roupas", 
      benefit: "Ganhe tempo na hora de se vestir e prolongue a vida útil das suas roupas",
      quality: "Técnicas Marie Kondo, dobras especiais e sistemas de etiquetagem profissional",
      image: "/images/Cabide Roupoas Masculinas.jpeg"
    },
    { 
      id: 2,
      icon: "🍳", 
      title: "Cozinhas", 
      benefit: "Cozinhe com prazer em um espaço onde tudo está ao alcance das mãos",
      quality: "Despensa funcional, potes herméticos e organização por categorias",
      image: "/images/Louça organizada_01.jpeg"
    },
    { 
      id: 3,
      icon: "💻", 
      title: "Escritórios", 
      benefit: "Aumente sua produtividade com um home office livre de distrações",
      quality: "Gestão de cabos, organização de documentos e ergonomia do espaço",
      image: "/images/Papelaria Depois.jpeg"
    },
    { 
      id: 4,
      icon: "🛋️", 
      title: "Salas", 
      benefit: "Receba bem em um ambiente aconchegante e harmonioso",
      quality: "Estantes organizadas, decoração funcional e espaços integrados",
      image: "/images/Organização comeias frente Depois.jpeg"
    },
    { 
      id: 5,
      icon: "🧸", 
      title: "Quartos Kids", 
      benefit: "Estimule a autonomia das crianças com um quarto que elas mesmas organizam",
      quality: "Espaço lúdico, brinquedos acessíveis e área de estudos funcional",
      image: "/images/Roupas Feminias Depois.jpeg"
    },
    { 
      id: 6,
      icon: "📦", 
      title: "Despensas", 
      benefit: "Economize nas compras com tudo à vista e controle de validade",
      quality: "Estoque organizado, etiquetagem completa e aproveitamento máximo",
      image: "/images/Despensa Depois_01.jpeg"
    }
  ];

  return (
    <div style={{ padding: "100px 20px", maxWidth: "1200px", margin: "0 auto" }}>
      <style>{`
        * {
          box-sizing: border-box;
        }
        .services-title {
          font-size: 3rem;
          color: #4361ee;
          text-align: center;
          margin: 0 0 10px 0;
        }
        .services-sub {
          font-size: 1.3rem;
          color: #f72585;
          text-align: center;
          margin: 0 0 50px 0;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
          margin-bottom: 60px;
        }
        .service-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(67,97,238,0.1);
        }
        .service-img {
          height: 250px;
          position: relative;
        }
        .service-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .service-icon {
          position: absolute;
          bottom: -30px;
          right: 20px;
          width: 70px;
          height: 70px;
          background: #4361ee;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          color: white;
          border: 4px solid white;
          z-index: 2;
        }
        .service-content {
          padding: 40px 25px 25px 25px;
        }
        .service-name {
          font-size: 2rem;
          color: #4361ee;
          text-align: center;
          margin: 0 0 20px 0;
          font-weight: bold;
        }
        .benefit, .quality {
          padding: 20px;
          border-radius: 15px;
          margin-bottom: 15px;
        }
        .benefit {
          background: #f8f9fa;
        }
        .quality {
          background: #eef2ff;
        }
        .benefit h3, .quality h3 {
          display: flex;
          align-items: center;
          gap: 8px;
          margin: 0 0 10px 0;
          font-size: 1.2rem;
        }
        .benefit h3 { color: #f72585; }
        .quality h3 { color: #4361ee; }
        .benefit p, .quality p {
          margin: 0;
          line-height: 1.6;
          color: #2d2d44;
          word-break: break-word;
          overflow-wrap: break-word;
        }
        .cta {
          text-align: center;
          padding: 50px 30px;
          background: linear-gradient(135deg, #4361ee, #f72585);
          border-radius: 30px;
          color: white;
        }
        .cta h2 {
          font-size: 2.2rem;
          margin: 0 0 15px 0;
        }
        .cta p {
          font-size: 1.2rem;
          margin: 0 0 25px 0;
          opacity: 0.95;
        }
        .cta-buttons {
          display: flex;
          gap: 15px;
          justify-content: center;
        }
        .cta-buttons button {
          padding: 12px 30px;
          border: none;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: bold;
          cursor: pointer;
        }
        .btn-orcamento {
          background: white;
          color: #4361ee;
        }
        .btn-whatsapp {
          background: transparent;
          color: white;
          border: 2px solid white !important;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
            gap: 25px;
          }
          .services-title { font-size: 2.5rem; }
          .service-name { font-size: 1.5rem; }
          .benefit p, .quality p { font-size: 0.95rem; }
          .cta-buttons { flex-direction: column; align-items: center; }
          .cta-buttons button { width: 100%; max-width: 300px; }
          .cta h2 { font-size: 1.8rem; }
          .cta p { font-size: 1rem; }
        }
        @media (max-width: 480px) {
          .service-name { font-size: 1.3rem; }
          .benefit p, .quality p { font-size: 0.9rem; }
        }
      `}</style>

      <h1 className="services-title">Nossos Serviços</h1>
      <p className="services-sub">Soluções personalizadas para cada ambiente</p>

      <div className="services-grid">
        {services.map(s => (
          <div key={s.id} className="service-card">
            <div className="service-img">
              <img src={s.image} alt={s.title} />
              <div className="service-icon">{s.icon}</div>
            </div>
            <div className="service-content">
              <h2 className="service-name">{s.title}</h2>
              <div className="benefit">
                <h3><span>✨</span>Benefício</h3>
                <p>{s.benefit}</p>
              </div>
              <div className="quality">
                <h3><span>🏆</span>Qualidade</h3>
                <p>{s.quality}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="cta">
        <h2>Venha nos conhecer!</h2>
        <p>Faça um orçamento sem compromisso e descubra como podemos transformar seu espaço</p>
        <div className="cta-buttons">
          <button className="btn-orcamento" onClick={() => navigate('/contato')}>Fazer orçamento</button>
          <button className="btn-whatsapp" onClick={() => window.open('https://wa.me/5581994732981', '_blank')}>
            <i className="fab fa-whatsapp"></i> WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
