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
        * { box-sizing: border-box; }
        body { background: #fef6f9; margin: 0; }
        h1 {
          font-size: 3rem;
          color: #4361ee;
          text-align: center;
          margin: 0 0 10px 0;
        }
        .sub {
          font-size: 1.3rem;
          color: #f72585;
          text-align: center;
          margin: 0 0 50px 0;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
          margin-bottom: 60px;
        }
        .card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(67,97,238,0.1);
        }
        .img-box {
          height: 250px;
          position: relative;
          overflow: hidden;
        }
        .img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .icon-box {
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
        .content {
          padding: 40px 20px 20px;
        }
        h2 {
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
        .benefit { background: #f8f9fa; }
        .quality { background: #eef2ff; }
        .benefit h3, .quality h3 {
          display: flex;
          align-items: center;
          gap: 8px;
          margin: 0 0 10px 0;
          font-size: 1.2rem;
          white-space: nowrap;
        }
        .benefit h3 { color: #f72585; }
        .quality h3 { color: #4361ee; }
        .benefit p, .quality p {
          margin: 0;
          line-height: 1.5;
          color: #2d2d44;
          font-size: 1rem;
          word-break: break-word;
        }
        .cta {
          text-align: center;
          padding: 50px 30px;
          background: linear-gradient(135deg, #4361ee, #f72585);
          border-radius: 30px;
          color: white;
        }
        .cta h3 { font-size: 2.2rem; margin-bottom: 15px; }
        .btns {
          display: flex;
          gap: 15px;
          justify-content: center;
        }
        .btns button {
          padding: 12px 30px;
          border: none;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: bold;
          cursor: pointer;
        }
        .btn1 { background: white; color: #4361ee; }
        .btn2 { background: transparent; color: white; border: 2px solid white !important; }
        @media (max-width: 768px) {
          .grid { grid-template-columns: 1fr; }
          h1 { font-size: 2.5rem; }
          .content { padding: 35px 12px 20px; }
          h2 { font-size: 1.5rem; }
          .benefit h3, .quality h3 { font-size: 1.1rem; }
          .btns { flex-direction: column; }
          .btns button { width: 100%; }
        }
      `}</style>

      <h1>Nossos Serviços</h1>
      <p className="sub">Soluções personalizadas para cada ambiente</p>

      <div className="grid">
        {services.map(s => (
          <div key={s.id} className="card">
            <div className="img-box">
              <img src={s.image} alt={s.title} />
              <div className="icon-box">{s.icon}</div>
            </div>
            <div className="content">
              <h2>{s.title}</h2>
              <div className="benefit">
                <h3><span>✨</span> Benefício</h3>
                <p>{s.benefit}</p>
              </div>
              <div className="quality">
                <h3><span>🏆</span> Qualidade</h3>
                <p>{s.quality}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="cta">
        <h3>Venha nos conhecer!</h3>
        <p>Faça um orçamento sem compromisso e descubra como podemos transformar seu espaço</p>
        <div className="btns">
          <button className="btn1" onClick={() => navigate('/contato')}>Fazer orçamento</button>
          <button className="btn2" onClick={() => window.open('https://wa.me/5581994732981', '_blank')}>
            <i className="fab fa-whatsapp"></i> WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
